exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return json(200, { ok: true });
  }

  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "Method not allowed." });
  }

  const apiKey = process.env.MIROMIND_API_KEY || process.env.MM_API_KEY;
  if (!apiKey) {
    return json(500, {
      ok: false,
      error: "MIROMIND_API_KEY or MM_API_KEY is not configured on the server."
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "Invalid JSON body." });
  }

  const task = String(payload.task || "").slice(0, 5000);
  const sugar = String(payload.sugar || "half").slice(0, 40);
  if (!task.trim()) {
    return json(400, { ok: false, error: "Task is required." });
  }

  const prompt = [
    "You are MiroMind acting as the reasoning backend for MoCam, a privacy-first AI wardrobe app.",
    "Return a concise English result for a mobile demo. Do not expose hidden reasoning.",
    "Respect the user's privacy mode. Do not ask for face/body data unless the mode explicitly allows it.",
    `Privacy sugar mode: ${sugar}`,
    "",
    task,
    "",
    "Output exactly four short bullet points in English:",
    "- Outfit:",
    "- Color logic:",
    "- Makeup/accessory:",
    "- Sugar display:"
  ].join("\n");

  try {
    const response = await fetch("https://api.miromind.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mirothinker-1-7-deepresearch-mini",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const text = await response.text();
    if (!response.ok) {
      return json(response.status, {
        ok: false,
        error: "MiroMind API request failed.",
        details: text.slice(0, 800)
      });
    }

    const parsed = parseMiroMindResponse(text);
    return json(200, {
      ok: true,
      model: parsed.model || "mirothinker-1-7-deepresearch-mini",
      content: parsed.content || "MiroMind returned an empty response.",
      usage: parsed.usage || null
    });
  } catch (error) {
    return json(500, {
      ok: false,
      error: error.message || "Unknown server error."
    });
  }
};

function parseMiroMindResponse(text) {
  const trimmed = text.trim();
  if (!trimmed.startsWith("data:")) {
    const body = JSON.parse(trimmed);
    return {
      model: body.model,
      content: body.choices?.[0]?.message?.content || "",
      usage: body.usage || null
    };
  }

  let content = "";
  let usage = null;
  let model = "";
  for (const line of trimmed.split(/\r?\n/)) {
    if (!line.startsWith("data:")) continue;
    const chunk = line.slice(5).trim();
    if (!chunk || chunk === "[DONE]") continue;
    try {
      const event = JSON.parse(chunk);
      model = event.model || model;
      const delta = event.choices?.[0]?.delta || {};
      if (typeof delta.content === "string") content += delta.content;
      if (typeof delta.agent_summary === "string" && !content.includes(delta.agent_summary)) {
        content += delta.agent_summary;
      }
      if (event.usage) usage = event.usage;
    } catch {
      // Ignore malformed stream chunks.
    }
  }
  return { model, content: content.trim(), usage };
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    },
    body: JSON.stringify(body)
  };
}

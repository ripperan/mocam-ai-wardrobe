$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function New-Bitmap($path, $width, $height, [scriptblock]$draw) {
    $bitmap = New-Object System.Drawing.Bitmap($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    & $draw $graphics $width $height
    $bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $bitmap.Dispose()
}

function Brush($hex) {
    return New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml($hex))
}

function PenC($hex, $width = 2) {
    return New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml($hex), $width)
}

function FontC($size, $style = [System.Drawing.FontStyle]::Regular) {
    return New-Object System.Drawing.Font("Microsoft YaHei UI", $size, $style)
}

$assetDir = Join-Path (Get-Location) "outputs/assets"

New-Bitmap (Join-Path $assetDir "mocam-hero.png") 1440 900 {
    param($g, $w, $h)
    $bg = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.Rectangle(0, 0, $w, $h)),
        [System.Drawing.ColorTranslator]::FromHtml("#f7efe8"),
        [System.Drawing.ColorTranslator]::FromHtml("#dbe8e2"),
        20
    )
    $g.FillRectangle($bg, 0, 0, $w, $h)
    $bg.Dispose()

    $g.FillEllipse((Brush "#f0cfc8"), 970, 110, 360, 360)
    $g.FillEllipse((Brush "#cdd9ef"), 80, 560, 320, 320)
    $g.FillRectangle((Brush "#324040"), 142, 152, 18, 550)
    $g.FillRectangle((Brush "#324040"), 118, 148, 530, 18)
    $g.DrawArc((PenC "#324040" 10), 385, 126, 72, 72, 200, 140)

    $clothes = @(
        @{x=212;y=190;c="#f1b6a7";w=128;h=310},
        @{x=330;y=178;c="#334b4f";w=150;h=330},
        @{x=470;y=190;c="#f4df97";w=132;h=300},
        @{x=590;y=202;c="#9bb7a6";w=116;h=280}
    )
    foreach ($item in $clothes) {
        $path = New-Object System.Drawing.Drawing2D.GraphicsPath
        $path.AddBezier($item.x, $item.y + 20, $item.x + 35, $item.y - 30, $item.x + $item.w - 35, $item.y - 30, $item.x + $item.w, $item.y + 20)
        $path.AddLine($item.x + $item.w, $item.y + 20, $item.x + $item.w - 10, $item.y + $item.h)
        $path.AddLine($item.x + $item.w - 10, $item.y + $item.h, $item.x + 10, $item.y + $item.h)
        $path.AddLine($item.x + 10, $item.y + $item.h, $item.x, $item.y + 20)
        $g.FillPath((Brush $item.c), $path)
        $g.DrawPath((PenC "#f9faf8" 3), $path)
        $path.Dispose()
    }

    $g.FillRectangle((Brush "#ffffff"), 790, 190, 350, 620)
    $g.DrawRectangle((PenC "#314040" 6), 790, 190, 350, 620)
    $g.FillRectangle((Brush "#314040"), 825, 230, 170, 16)
    $g.FillRectangle((Brush "#e9f2ed"), 825, 280, 280, 180)
    $g.FillEllipse((Brush "#e7b59e"), 915, 312, 78, 78)
    $g.FillRectangle((Brush "#2f484b"), 875, 388, 160, 52)
    $g.FillRectangle((Brush "#f7efe8"), 825, 490, 280, 64)
    $g.FillRectangle((Brush "#f7efe8"), 825, 574, 280, 64)
    $g.FillRectangle((Brush "#f7efe8"), 825, 658, 280, 64)
    $g.FillEllipse((Brush "#f1b6a7"), 845, 506, 32, 32)
    $g.FillEllipse((Brush "#9bb7a6"), 845, 590, 32, 32)
    $g.FillEllipse((Brush "#f4df97"), 845, 674, 32, 32)

    $g.DrawString("MoCam", (FontC 56 ([System.Drawing.FontStyle]::Bold)), (Brush "#263333"), 1120, 640)
    $g.DrawString("another me", (FontC 28), (Brush "#52605e"), 1124, 708)
}

New-Bitmap (Join-Path $assetDir "sugar-zero.png") 720 520 {
    param($g, $w, $h)
    $g.Clear([System.Drawing.ColorTranslator]::FromHtml("#f4f1eb"))
    $g.FillRectangle((Brush "#ffffff"), 72, 76, 484, 350)
    $g.DrawRectangle((PenC "#2f3f3e" 5), 72, 76, 484, 350)
    $g.FillRectangle((Brush "#2f3f3e"), 106, 116, 220, 20)
    $g.FillRectangle((Brush "#dbe8e2"), 106, 172, 390, 54)
    $g.FillRectangle((Brush "#eee1d9"), 106, 252, 300, 54)
    $g.FillRectangle((Brush "#f1c8bc"), 106, 332, 360, 54)
    $g.DrawString("momo", (FontC 44 ([System.Drawing.FontStyle]::Bold)), (Brush "#2f3f3e"), 430, 352)
}

New-Bitmap (Join-Path $assetDir "sugar-half.png") 720 520 {
    param($g, $w, $h)
    $g.Clear([System.Drawing.ColorTranslator]::FromHtml("#eef4ef"))
    $g.FillEllipse((Brush "#f2c8b7"), 248, 90, 210, 210)
    $g.FillEllipse((Brush "#2f3f3e"), 292, 168, 18, 18)
    $g.FillEllipse((Brush "#2f3f3e"), 405, 168, 18, 18)
    $g.DrawArc((PenC "#2f3f3e" 5), 325, 200, 70, 40, 10, 160)
    $g.FillRectangle((Brush "#6b8f83"), 222, 294, 260, 156)
    $g.DrawRectangle((PenC "#ffffff" 5), 222, 294, 260, 156)
    $g.DrawString("avatar", (FontC 44 ([System.Drawing.FontStyle]::Bold)), (Brush "#2f3f3e"), 244, 358)
}

New-Bitmap (Join-Path $assetDir "sugar-full.png") 720 520 {
    param($g, $w, $h)
    $g.Clear([System.Drawing.ColorTranslator]::FromHtml("#f8ede8"))
    $g.FillRectangle((Brush "#2f3f3e"), 122, 82, 390, 330)
    $g.FillRectangle((Brush "#ffffff"), 140, 100, 354, 294)
    $g.FillEllipse((Brush "#e8b69d"), 252, 134, 150, 150)
    $g.FillRectangle((Brush "#334b4f"), 214, 284, 226, 92)
    $g.FillEllipse((Brush "#f1c8bc"), 438, 74, 92, 92)
    $g.DrawString("shine", (FontC 46 ([System.Drawing.FontStyle]::Bold)), (Brush "#2f3f3e"), 380, 326)
}

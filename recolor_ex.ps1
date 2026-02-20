$f = 'd:\AI promt project\index.html'
$h = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# Replace inline color styles in the example panels
# Old blue shades  →  new vivid distinct colors
# Persona (#90e0ef pale blue)  → #fb923c orange
# Task (#0096c7 primary blue)  → #facc15 amber
# Context (#48cae4 light blue) → #4ade80 green
# Format (#00b4d8 bright blue) → #60a5fa sky blue
# Exemplar (#93c5fd lavender)  → #c084fc purple
# Tone (#bae6fd faint blue)    → #f472b6 pink

$h = $h.Replace('color:#90e0ef', 'color:#fb923c')
$h = $h.Replace('color:#0096c7', 'color:#facc15')
$h = $h.Replace('color:#48cae4', 'color:#4ade80')
$h = $h.Replace('color:#00b4d8', 'color:#60a5fa')
$h = $h.Replace('color:#93c5fd', 'color:#c084fc')
$h = $h.Replace('color:#bae6fd', 'color:#f472b6')

[System.IO.File]::WriteAllText($f, $h, [System.Text.Encoding]::UTF8)
Write-Host "Done"

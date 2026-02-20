$f = 'd:\AI promt project\style.css'
$css = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# ── rgba earth → blue ──────────────────────────────────
# terracotta rgba(194,65,12,...)
$css = $css -replace 'rgba\(194,65,12,0\.6\)', 'rgba(0,150,199,0.6)'
$css = $css -replace 'rgba\(194,65,12,0\.8\)', 'rgba(0,150,199,0.8)'
$css = $css -replace 'rgba\(194,65,12,0\.9\)', 'rgba(0,150,199,0.9)'
$css = $css -replace 'rgba\(194,65,12,0\.5\)', 'rgba(0,150,199,0.5)'
$css = $css -replace 'rgba\(194,65,12,0\.4\)', 'rgba(0,150,199,0.4)'
$css = $css -replace 'rgba\(194,65,12,0\.3\)', 'rgba(0,150,199,0.3)'
$css = $css -replace 'rgba\(194,65,12,0\.2\)', 'rgba(0,150,199,0.2)'
$css = $css -replace 'rgba\(194,65,12,0\.15\)', 'rgba(0,150,199,0.15)'
$css = $css -replace 'rgba\(194,65,12,0\.1\)', 'rgba(0,150,199,0.1)'
$css = $css -replace 'rgba\(194,65,12,0\.08\)', 'rgba(0,150,199,0.08)'
$css = $css -replace 'rgba\(194,65,12,0\.06\)', 'rgba(0,150,199,0.06)'
$css = $css -replace 'rgba\(194,65,12,0\.05\)', 'rgba(0,150,199,0.05)'
# amber rgba(217,119,6,...)
$css = $css -replace 'rgba\(217,119,6,0\.5\)', 'rgba(0,180,216,0.5)'
$css = $css -replace 'rgba\(217,119,6,0\.3\)', 'rgba(0,180,216,0.3)'
$css = $css -replace 'rgba\(217,119,6,0\.25\)', 'rgba(0,180,216,0.25)'
$css = $css -replace 'rgba\(217,119,6,0\.06\)', 'rgba(0,180,216,0.06)'
$css = $css -replace 'rgba\(217,119,6,0\.07\)', 'rgba(0,180,216,0.07)'
# olive rgba(101,163,13,...)
$css = $css -replace 'rgba\(101,163,13,0\.5\)', 'rgba(72,202,228,0.5)'
$css = $css -replace 'rgba\(101,163,13,0\.3\)', 'rgba(72,202,228,0.3)'
$css = $css -replace 'rgba\(101,163,13,0\.25\)', 'rgba(72,202,228,0.25)'
$css = $css -replace 'rgba\(101,163,13,0\.15\)', 'rgba(72,202,228,0.15)'
$css = $css -replace 'rgba\(101,163,13,0\.1\)', 'rgba(72,202,228,0.1)'
$css = $css -replace 'rgba\(101,163,13,0\.06\)', 'rgba(72,202,228,0.06)'

# ── hex earth → blue ───────────────────────────────────
$css = $css.Replace('#c2410c', '#0096c7')
$css = $css.Replace('#d97706', '#00b4d8')
$css = $css.Replace('#65a30d', '#48cae4')
$css = $css.Replace('#92400e', '#0d47a1')
$css = $css.Replace('#b91c1c', '#90e0ef')
$css = $css.Replace('#b45309', '#0077b6')
$css = $css.Replace('#fdf6e3', '#f0f8ff')
$css = $css.Replace('#fef08a', '#bae6fd')
$css = $css.Replace('#fbbf24', '#7dd3fc')
$css = $css.Replace('#fcd34d', '#bae6fd')
$css = $css.Replace('#d9f99d', '#bfdbfe')
$css = $css.Replace('#a8925c', '#7ab3cc')
$css = $css.Replace('#fca5a5', '#bae6fd')
$css = $css.Replace('#fed7aa', '#bfdbfe')
$css = $css.Replace('#fdba74', '#93c5fd')
$css = $css.Replace('#86efac', '#67e8f9')

# canvas bg fill color in JS comment area (style.css does not have it, but just in case)
$css = $css.Replace('#070b14', '#050810')
$css = $css.Replace('#0c0901', '#050810')

[System.IO.File]::WriteAllText($f, $css, [System.Text.Encoding]::UTF8)
Write-Host "CSS done"

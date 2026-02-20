$f = 'd:\AI promt project\index.html'
$h = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# Module 1 pills + tags: earth -> blue family
$h = $h.Replace('--pc:#c2410c', '--pc:#0096c7')
$h = $h.Replace('--pc:#d97706', '--pc:#00b4d8')
$h = $h.Replace('--pc:#65a30d', '--pc:#48cae4')
$h = $h.Replace('--tc:#e8a87c', '--tc:#7dd3fc')
$h = $h.Replace('--tc:#fcd34d', '--tc:#38bdf8')
$h = $h.Replace('--tc:#bef264', '--tc:#67e8f9')
$h = $h.Replace('--tc:#fdba74', '--tc:#93c5fd')
$h = $h.Replace('--tc:#d4a5a5', '--tc:#a5b4fc')
$h = $h.Replace('--tc:#fca5a5', '--tc:#bae6fd')

# After prompt colored spans: earth -> blue
$h = $h.Replace('color:#e8a87c', 'color:#7dd3fc')
$h = $h.Replace('color:#fcd34d', 'color:#38bdf8')
$h = $h.Replace('color:#bef264', 'color:#67e8f9')
$h = $h.Replace('color:#fdba74', 'color:#93c5fd')
$h = $h.Replace('color:#d4a5a5', 'color:#a5b4fc')
$h = $h.Replace('color:#fca5a5', 'color:#bae6fd')

# CREATE framework card --lc colors
$h = $h.Replace('--lc:#c2410c', '--lc:#0096c7')
$h = $h.Replace('--lc:#d97706', '--lc:#00b4d8')
$h = $h.Replace('--lc:#65a30d', '--lc:#48cae4')
$h = $h.Replace('--lc:#b45309', '--lc:#0077b6')
$h = $h.Replace('--lc:#b91c1c', '--lc:#90e0ef')
$h = $h.Replace('--lc:#92400e', '--lc:#0d47a1')
$h = $h.Replace('--lc:#ef4444', '--lc:#90e0ef')
$h = $h.Replace('--lc:#f59e0b', '--lc:#0077b6')
$h = $h.Replace('--lc:#ec4899', '--lc:#0d47a1')

# CREATE full example span colors
$h = $h.Replace('color:#a78bfa', 'color:#7dd3fc')
$h = $h.Replace('color:#7dd3fc', 'color:#38bdf8')
$h = $h.Replace('color:#6ee7b7', 'color:#67e8f9')
$h = $h.Replace('color:#fde68a', 'color:#93c5fd')
$h = $h.Replace('color:#fca5a5', 'color:#bae6fd')
$h = $h.Replace('color:#f9a8d4', 'color:#a5b4fc')

[System.IO.File]::WriteAllText($f, $h, [System.Text.Encoding]::UTF8)
Write-Host "HTML done"

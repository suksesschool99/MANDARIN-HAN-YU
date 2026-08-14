$files = Get-ChildItem -Path "dino-mandarin-github\js\*.js"
foreach ($f in $files) {
    $raw = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $ob = ($raw.ToCharArray() | Where-Object { $_ -eq '{' }).Count
    $cb = ($raw.ToCharArray() | Where-Object { $_ -eq '}' }).Count
    $ok = ($raw.ToCharArray() | Where-Object { $_ -eq '[' }).Count
    $ck = ($raw.ToCharArray() | Where-Object { $_ -eq ']' }).Count
    $op = ($raw.ToCharArray() | Where-Object { $_ -eq '(' }).Count
    $cp = ($raw.ToCharArray() | Where-Object { $_ -eq ')' }).Count
    Write-Host "$($f.Name) -> Braces: $ob / $cb | Brackets: $ok / $ck | Parens: $op / $cp"
}

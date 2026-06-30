$targetUrl = 'https://wa.me/918808800266?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Sankalp%20Computer%20Academy%20%F0%9F%91%8B%0A%0A%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A5%87%20computer%20courses%20%E0%A4%94%E0%A4%B0%20admission%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4%0A%0A%E0%A4%95%E0%A5%83%E0%A4%AA%E0%A4%AF%E0%A4%BE%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20courses%2C%20fees%20%E0%A4%94%E0%A4%B0%20admission%20process%20%E0%A4%95%E0%A5%80%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%A6%E0%A5%87%E0%A4%82%E0%A5%A4%0A%0A%E0%A4%A7%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A4%B5%E0%A4%BE%E0%A4%A6%20%F0%9F%99%8F'

$htmlFiles = Get-ChildItem -Filter *.html
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace any wa.me link with or without query params that belong to the number 918808800266 or 8808800266
    $content = [regex]::Replace($content, 'https://wa\.me/(91)?8808800266[^"''\`]*', $targetUrl)
    
    [System.IO.File]::WriteAllText($file.FullName, $content)
}

Write-Host "Updated all WhatsApp links to pre-filled template."

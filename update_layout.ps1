$header = @"
    <!-- Main Header -->
    <header class="main-header" id="mainHeader">
        <div class="container header-container">
            <a href="index.html" class="logo">
                <div class="logo-text">
                    <span class="logo-name">Sankalp Academy</span>
                    <span class="logo-tagline">Practical Computer Education</span>
                </div>
            </a>

            <nav class="nav-links">
                <div class="nav-item"><a href="index.html" class="nav-link">Home</a></div>
                <div class="nav-item"><a href="courses.html" class="nav-link">Courses</a></div>
                <div class="nav-item"><a href="contact.html" class="nav-link">Contact</a></div>
                <div class="nav-item"><a href="about.html" class="nav-link">About Academy</a></div>
            </nav>

            <div class="header-actions">
                <a href="contact.html" class="btn btn-primary">Apply Now</a>
            </div>

            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <i data-lucide="menu"></i>
            </button>
        </div>
    </header>
"@

$footer = @"
    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div class="container max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="col-span-1 md:col-span-1">
                    <h3 class="text-white text-xl font-bold font-heading mb-4">Sankalp Academy</h3>
                    <p class="text-sm mb-4">Hyderganj ki Trusted Computer Academy. Providing practical, job-ready digital education.</p>
                </div>
                
                <div>
                    <h4 class="text-white font-bold font-heading mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="index.html" class="hover:text-white transition">Home</a></li>
                        <li><a href="courses.html" class="hover:text-white transition">Courses</a></li>
                        <li><a href="about.html" class="hover:text-white transition">About Academy</a></li>
                        <li><a href="contact.html" class="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-white font-bold font-heading mb-4">Popular Courses</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="course-details.html?id=adca-plus" class="hover:text-white transition">ADCA Plus</a></li>
                        <li><a href="course-details.html?id=tally-prime" class="hover:text-white transition">Tally Prime</a></li>
                        <li><a href="course-details.html?id=web-development" class="hover:text-white transition">Web Development</a></li>
                        <li><a href="course-details.html?id=python" class="hover:text-white transition">Python Programming</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-white font-bold font-heading mb-4">Contact</h4>
                    <ul class="space-y-2 text-sm">
                        <li class="flex items-start"><i data-lucide="map-pin" class="w-4 h-4 mr-2 mt-1 flex-shrink-0"></i> Hyderganj, UP</li>
                        <li class="flex items-center"><i data-lucide="phone" class="w-4 h-4 mr-2 flex-shrink-0"></i> <a href="tel:+918808807636" class="hover:text-white">+91 8808807636</a></li>
                        <li class="flex items-center"><i data-lucide="mail" class="w-4 h-4 mr-2 flex-shrink-0"></i> <a href="mailto:sankalpacademy.in@gmail.com" class="hover:text-white">sankalpacademy.in@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                <p>&copy; 2026 Sankalp Academy. All rights reserved.</p>
            </div>
        </div>
    </footer>
"@

Get-ChildItem *.html | ForEach-Object {
    $c = [System.IO.File]::ReadAllText($_.FullName)
    $c = [regex]::Replace($c, '(?is)(?:<!-- Main Header -->\s*)?<header[^>]*?class="[^"]*?main-header[^>]*>[\s\S]*?</header>', $header)
    $c = [regex]::Replace($c, '(?is)(?:<!-- Footer -->\s*)?<footer[^>]*>[\s\S]*?</footer>', $footer)
    [System.IO.File]::WriteAllText($_.FullName, $c)
    Write-Host "Updated $($_.Name)"
}

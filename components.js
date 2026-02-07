(function () {
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const logoHref = isHomePage ? '#' : 'index.html';
    const headerClass = isHomePage ? 'header' : 'header scrolled';

    // Font Awesome (sosyal medya ikonları için)
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
        document.head.appendChild(fa);
    }

    // ===================== HEADER =====================
    const headerHTML = `
    <header class="${headerClass}" id="header">
        <nav class="nav container">
            <a href="${logoHref}" class="logo">
                <span class="playfair">SMP</span>
                <span class="tagline">INTERNATIONAL</span>
            </a>
            <ul class="nav-menu desktop-menu">
                <li><a href="properties.html">Projeler</a></li>
                <li><a href="universities.html">Üniversiteler</a></li>
                <li><a href="stories.html">Başarılar</a></li>
                <li><a href="process.html">Süreç</a></li>
                <li><a href="sss.html">SSS</a></li>
                <li><a href="about.html">Hakkımızda</a></li>
            </ul>
            <div class="nav-actions">
                <a href="https://wa.me/905459450343" class="btn btn-whatsapp hide-mobile">WhatsApp</a>
            </div>
        </nav>
    </header>

    <button class="mobile-hamburger" id="hamburger" aria-label="Menüyü aç">
        <span></span><span></span><span></span>
    </button>

    <div class="mobile-menu-overlay" id="mobile-menu-overlay">
        <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Menüyü kapat">&times;</button>
        <ul class="mobile-menu-list">
            <li><a href="index.html">Ana Sayfa</a></li>
            <li><a href="properties.html">Projeler</a></li>
            <li><a href="universities.html">Üniversiteler</a></li>
            <li><a href="stories.html">Başarılar</a></li>
            <li><a href="process.html">Süreç</a></li>
            <li><a href="sss.html">SSS</a></li>
            <li><a href="about.html">Hakkımızda</a></li>
        </ul>
    </div>
    `;

    // ===================== FOOTER =====================
    const footerHTML = `
    <footer class="footer">
        <div class="container footer-grid-refined">
            <div>
                <a href="${logoHref}" class="logo">
                    <span class="playfair">SMP</span>
                    <span class="tagline">International</span>
                </a>
                <p style="margin-top:20px; font-size:0.9rem; color:var(--gray-text);">İngiltere emlak yatırımında profesyonel ortağınız. Sterlin bazlı güvenli gelecek.</p><br>
                <div style="display: flex; gap: 20px; align-items: center;">
                    <a href="https://www.instagram.com/ingilteredenemlak" target="_blank">
                        <i class="fab fa-instagram" style="font-size: 30px;"></i>
                    </a>
                    <a href="https://www.facebook.com/ingilteredenemlak" target="_blank">
                        <i class="fab fa-facebook-f" style="font-size: 30px;"></i>
                    </a>
                    <a href="https://www.youtube.com/@SmpInternational" target="_blank">
                        <i class="fab fa-youtube" style="font-size: 30px;"></i>
                    </a>
                </div>
            </div>
            <div>
                <h4 class="playfair" style="margin-bottom:20px;">Hızlı Menü</h4>
                <ul style="font-size:0.9rem; display:flex; flex-direction:column; gap:10px;">
                    <li><a href="properties.html">Projeler</a></li>
                    <li><a href="universities.html">Üniversiteler</a></li>
                    <li><a href="stories.html">Başarılar</a></li>
                    <li><a href="process.html">Süreç</a></li>
                    <li><a href="sss.html">SSS</a></li>
                    <li><a href="about.html">Hakkımızda</a></li>
                </ul>
            </div>
            <div>
                <h4 class="playfair" style="margin-bottom:20px;">İletişim</h4>
                <p style="font-size:0.9rem; margin-bottom:10px;">📍 Londra Ofisi<br>122 St Pancras Way, NW1 9NB<br>+44 7301269253</p>
                <p style="font-size:0.9rem; margin-bottom:10px;">📍 İstanbul Ofisi (Trump Towers)<br>Mecidiyeköy Yolu Cad. No 12,<br>Tower 2, Floor 18, IST/34387<br>+90 5459450343</p>
                <a href="mailto:info@smpinternational.co.uk" style="font-size:0.9rem;">📧 info@smpinternational.co.uk</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 SMP International. Tüm hakları saklıdır.</p>
        </div>
    </footer>
    `;

    // Inject header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = headerHTML;
    }

    // Inject footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }
})();

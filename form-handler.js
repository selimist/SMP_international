document.addEventListener('DOMContentLoaded', () => {
    // 1. Sayfa Yüklenme Zamanı (Spam Kontrolü İçin)
    const loadTime = Date.now();

    // 2. Modal HTML Yapısını Oluştur ve Sayfaya Ekle
    function createModal() {
        if (document.querySelector('.modal-overlay')) return;

        const modalHTML = `
            <div class="modal-overlay" id="success-modal">
                <div class="modal-content">
                    <button class="modal-close" id="modal-close-btn">&times;</button>
                    <div class="modal-icon">&#10003;</div>
                    <div class="modal-message">
                        Teşekkürler, en kısa sürede<br>sizinle iletişime geçeceğiz.
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Kapatma eventlerini tanımla
        const modal = document.getElementById('success-modal');
        const closeBtn = document.getElementById('modal-close-btn');

        // X butonuna basınca kapat
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Overlay (boşluk) alana tıklayınca kapat
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    createModal();

    // 3. Modalı Gösteren Fonksiyon
    function showModal() {
        const modal = document.getElementById('success-modal');
        if (modal) {
            modal.classList.add('active');

            // 4 saniye sonra otomatik kapat
            setTimeout(() => {
                modal.classList.remove('active');
            }, 4000);
        }
    }

    // 4. Form Gönderim İşlemleri
    document.querySelectorAll('#contact-form, #sidebar-contact-form').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            // Butonu kilitle
            btn.textContent = 'Gönderiliyor...';
            btn.disabled = true;

            const fd = new FormData(form);
            const data = {
                name: fd.get('name'),
                email: fd.get('email'),
                phone: "'" + fd.get('phone'),
                message: fd.get('message') || '',
                page: window.location.pathname + window.location.search,
                timestamp: new Date(Date.now() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, 19)
            };


            // SPAM KONTROLÜ (Honeypot + Zaman)
            const honeypot = fd.get('website');
            const submitTime = Date.now();
            const timeDiff = submitTime - loadTime;

            // Spam ise -> Başarılı gibi davran ama gönderme
            if (honeypot || timeDiff < 4000) {
                console.log('Spam detected:', { honeypot, timeDiff });

                // Kullanıcıyı kandırmak için kısa bir gecikme
                setTimeout(() => {
                    showModal(); // Pop-up aç
                    form.reset(); // Formu temizle
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 1000);

                return; // Veriyi gönderme!
            }

            try {
                // Veriyi Google Sheet'e gönder (Fire-and-forget)
                const params = new URLSearchParams(data).toString();
                fetch('https://script.google.com/a/macros/crepdigital.com/s/AKfycbzt8BfmpHmA9tcWd_NzPoMfrsjtHFSdcLKkQDcQym1SKQ2NBADddeKVhEkvt9q6bEKTDQ/exec?' + params, {
                    mode: 'no-cors'
                });

                // Başarılı -> Pop-up aç
                showModal();
                form.reset();
                btn.textContent = originalText;
                btn.disabled = false;

            } catch (err) {
                console.error('Submission error:', err);
                btn.textContent = 'Hata! Tekrar Deneyin';
                btn.disabled = false;
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 3000);
            }
        });
    });
});

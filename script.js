
        // منوی موبایل
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        });

        // بستن منو هنگام کلیک روی لینک
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            });
        });

        // فرم درخواست مشاوره
        const consultationForm = document.getElementById('consultation-form');

        consultationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // در اینجا کد ارسال فرم به سرور قرار می‌گیرد
            // برای نمونه یک پیام ساده نمایش می‌دهیم
            alert('درخواست مشاوره شما با موفقیت ثبت شد. همکاران ما در اسرع وقت با شما تماس خواهند گرفت.');

            // ریست کردن فرم
            consultationForm.reset();
        });

        // اسکرول نرم برای لینک‌های داخلی
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // تغییر استایل نوار ناوبری هنگام اسکرول
        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
        });

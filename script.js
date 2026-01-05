
(function () {
    emailjs.init("8aIxYi009_KprVgY7");
  })();
  
  const form = document.getElementById("consultation-form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
  
    // ارسال ایمیل
    emailjs.sendForm(
      "hashemiannikta@gmail.com",
      "template_hnlrpv7",
      this
    ).then(() => {
      alert("✅ درخواست شما ثبت شد");
  
      // متن پیام
      const text =
  `📌 درخواست مشاوره جدید
  
  👤 نام: ${name}
  📞 تماس: ${phone}
  📧 ایمیل: ${email || "—"}
  📂 موضوع: ${subject}
  
  📝 توضیحات:
  ${message || "—"}`;
  
      // واتساپ
      const whatsappNumber = "989036305679";
      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(whatsappURL, "_blank");
  
      // تلگرام
      const telegramUser = "@nikiii1379";
      const telegramURL =
        `https://t.me/${telegramUser}?text=${encodeURIComponent(text)}`;
      window.open(telegramURL, "_blank");
  
      form.reset();
  
    }).catch(() => {
      alert("❌ خطا در ارسال پیام");
    });
  });
  

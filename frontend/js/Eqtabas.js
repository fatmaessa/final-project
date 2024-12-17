document.getElementById("submitQuote").addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const author = document.getElementById("author").value;
    const book = document.getElementById("book").value;
    const quote = document.getElementById("quote").value.trim();
    const toast = new bootstrap.Toast(document.getElementById('successToast'));
    toast.show();
    
    if (!category || !author || !book || !quote) {
      alert("يرجى تعبئة جميع الحقول!");
      return;
    }
  
    alert("تمت إضافة الاقتباس بنجاح!");
    document.getElementById("quoteForm").reset();
  });
  document.getElementById("subscribeButton").addEventListener("click", () => {
    const emailInput = document.getElementById("emailInput").value.trim();
  
    if (!emailInput || !/^\S+@\S+\.\S+$/.test(emailInput)) {
      alert("يرجى إدخال بريد إلكتروني صالح!");
      return;
    }
  
    alert("تم الاشتراك بنجاح! شكراً لتواصلك معنا.");
    document.getElementById("subscribeForm").reset();
  });
    
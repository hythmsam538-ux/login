
function toggleMenu() {
  document.getElementById("sideNav").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("sideNav").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}
// إنشاء المودال مرة واحدة في الصفحة
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <button class="modal-close">×</button>
    <img src="" alt="صورة المنتج" />
  </div>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.modal-close');

// فتح الصورة عند الضغط على زر "عرض"
document.querySelectorAll('.details').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const imgSrc = card.querySelector('img').src;
    modalImg.src = imgSrc;
    modal.style.display = 'flex';
  });
});

// إغلاق عند الضغط على ×
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// إغلاق عند الضغط خارج الصورة
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
/* اراء
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 240, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -240, behavior: 'smooth' });
  });
});
*/


  const btn = document.getElementById("backToTop");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  btn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // سلاسة التمرير لأي رابط داخلي
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      const offset = 90; // لو عندك هيدر ثابت
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });

   AOS.init({
    duration: 1000, // مدة الحركة (1 ثانية)
    once: true,     // تظهر مرة واحدة فقط عند التمرير
    offset: 100     // تبدأ الحركة قبل الدخول بـ100 بكسل
  });



 // عناصر الزر والشريط
const alertBtn = document.getElementById("alertBtn");
const discountBar = document.getElementById("discountBar");
const hideBar = document.getElementById("hideBar");

let barOpened = false;   // هل الشريط مفتوح؟

// عند الضغط على زر الجرس
alertBtn.addEventListener("click", () => {
  discountBar.classList.add("show-discount");   // ظهور الشريط
  alertBtn.style.opacity = "0";                 // إخفاء زر الجرس
  alertBtn.style.pointerEvents = "none";
  barOpened = true;
});

// عند الضغط على ×
hideBar.addEventListener("click", () => {
  discountBar.classList.remove("show-discount"); // إخفاء الشريط
  alertBtn.style.opacity = "1";                  // إظهار الزر
  alertBtn.style.pointerEvents = "auto";
  barOpened = false;
});

// إخفاء الشريط عند النزول
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // المستخدم نازل ↓↓↓
    if (barOpened) {
      discountBar.classList.remove("show-discount");
      alertBtn.style.opacity = "1";
      alertBtn.style.pointerEvents = "auto";
      barOpened = false;
    }
  }

  lastScroll = currentScroll;
});
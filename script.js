
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
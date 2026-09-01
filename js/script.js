// 手機版選單開關
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 點擊連結後，手機版自動收起選單
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ============================================
// 作品燈箱播放（分類子頁面用）
// 每個 .work-item 上要設定 data-embed="嵌入網址"
// YouTube 嵌入網址格式： https://www.youtube.com/embed/影片ID
// Dailymotion 嵌入網址格式： https://www.dailymotion.com/embed/video/影片ID
// ============================================
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const videoWrap = document.getElementById('videoWrap');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.work-item').forEach(item => {
  item.addEventListener('click', () => {
    const embedUrl = item.dataset.embed;
    const imageUrl = item.dataset.image;
    const title = item.dataset.title || '';

    if (embedUrl) {
      videoWrap.innerHTML = `<iframe src="${embedUrl}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else if (imageUrl) {
      videoWrap.innerHTML = `<img src="${imageUrl}" alt=""
        style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#000;">`;
    } else {
      return; // 兩個都沒填就不開燈箱
    }

    lightboxTitle.textContent = title;
    lightbox.classList.add('active');
  });
});

  function closeLightbox() {
    lightbox.classList.remove('active');
    videoWrap.innerHTML = ''; // 清空才會真的停止播放
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}
// 精選作品說明文字：展開/收合
document.querySelectorAll('.feature-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const desc = btn.previousElementSibling;
    desc.classList.toggle('expanded');
    btn.textContent = desc.classList.contains('expanded') ? '收合' : '展開';
  });
});

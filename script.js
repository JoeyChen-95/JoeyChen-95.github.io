// 自动更新年份
document.getElementById('year').textContent = new Date().getFullYear();
// 平滑滚动（可选）
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

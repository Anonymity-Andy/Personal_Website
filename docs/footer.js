let lastScrollPosition = 0;
window.addEventListener("scroll", function() {
    const footer = document.querySelector(".footer");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // 计算滚动距离和窗口高度的比例
    const scrollRatio = (scrollPosition / windowHeight);

    // 设置透明度
    footer.style.opacity = Math.min(1, scrollRatio*4);

    lastScrollPosition = scrollPosition;
});
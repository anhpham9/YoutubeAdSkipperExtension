// version 1.0
// function skipAds() {
//     // Bấm nút "Bỏ qua quảng cáo"
//     const skipBtn = document.querySelector('.ytp-ad-skip-button');
//     if (skipBtn) {
//         skipBtn.click();
//         console.log('Đã bấm Skip Ad');
//     }

//     // Tắt các quảng cáo banner
//     const adBanners = document.querySelectorAll('.ytp-ad-overlay-container, .video-ads');
//     adBanners.forEach(el => el.remove());
// }

// // Lặp lại mỗi 1 giây
// setInterval(skipAds, 1000);


// version 2.0

// Hàm bỏ qua quảng cáo
function skipAds() {
    // Bấm "Bỏ qua quảng cáo"
    const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
    if (skipButton) {
        skipButton.click();
        console.log('🟢 Bỏ qua quảng cáo video.');
    }

    // Ẩn banner quảng cáo trong video
    const adOverlays = document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-module, .video-ads, .ytp-ad-player-overlay');
    adOverlays.forEach(el => {
        el.style.display = 'none';
        console.log('🟡 Đã ẩn overlay/banner.');
    });

    // Nếu video bị thay bằng quảng cáo, bỏ qua bằng cách tua đến cuối
    const adContainer = document.querySelector('.ad-showing');
    const video = document.querySelector('video');

    if (adContainer && video && video.duration > 0) {
        video.currentTime = video.duration;
        console.log('🔴 Đã tua hết quảng cáo.');
    }
}

// Hàm để theo dõi sự thay đổi DOM (vì YouTube là SPA - Single Page App)
function observePage() {
    const observer = new MutationObserver(() => {
        skipAds();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log("🟢 Đang theo dõi YouTube để bỏ quảng cáo...");
}

// Chờ DOM sẵn sàng, sau đó khởi chạy
document.addEventListener("DOMContentLoaded", () => {
    setInterval(skipAds, 1000); // chạy định kỳ
    observePage();              // theo dõi thay đổi động
});

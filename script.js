// Set date range for video availability
const now = new Date();
const showStart = new Date('November 16, 2024');
const showEnd = new Date('January 1, 2025');

// Video availability logic
if (now >= showStart && now < showEnd) {
  document.getElementById('video-player').innerHTML = `
    <iframe src="https://archive.org/embed/christmaslog" 
            style="width: 100%; height: 300px;" 
            frameborder="0" allowfullscreen></iframe>`;
} else {
  document.getElementById('video-player').innerHTML = `
    <p style="color: #ff4500; font-size: 18px; text-align: center;">
      This special will be available from November 16 to January 1.
    </p>`;
}

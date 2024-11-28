// Set date range for video availability (for A Town Called Panic: Christmas Panic!)
const now = new Date();
const showStart = new Date('November 16, 2024');
const showEnd = new Date('January 1, 2025');

// Video availability logic for A Town Called Panic: Christmas Panic!
if (now >= showStart && now < showEnd) {
  document.getElementById('video-player').innerHTML = `
    <video width="100%" height="400" controls>
      <source src="https://archive.org/download/christmaslog/UniversCine_jEi6e9Bsm5%20%28online-video-cutter.com%29%20%28online-video-cutter.com%29.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <button onclick="window.location.href='https://archive.org/details/christmaslog'">Watch on Archive.org</button>`;
} else {
  document.getElementById('video-player').innerHTML = `
    <p style="color: #ff4500; font-size: 18px; text-align: center;">
      This special will be available from November 16 to January 1.
    </p>`;
}

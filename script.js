// Show video only in the second half of November to January 1st
const now = new Date();
const startSeason = new Date(now.getFullYear(), 10, 16); // November 16
const endSeason = new Date(now.getFullYear(), 0, 1); // January 1

if (now >= startSeason || now <= endSeason) {
  document.getElementById('christmas-log').classList.remove('hidden');
}

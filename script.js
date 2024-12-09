function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

const apiKey = process.env.GOOGLE_API_KEY;
const channelId = 'UC1lGZb83wad0NaKK_dfEVFA';     // Replace with your YouTube Channel ID
const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=3`;

function loadLatestVideos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const videoIds = data.items.map(item => item.id.videoId);
            if (videoIds.length > 0) {
                document.getElementById('video1').src = `https://www.youtube.com/embed/${videoIds[0]}`;
                document.getElementById('video2').src = `https://www.youtube.com/embed/${videoIds[1]}`;
                document.getElementById('video3').src = `https://www.youtube.com/embed/${videoIds[2]}`;
            }
        })
        .catch(error => console.error('Error fetching YouTube videos:', error));
}

window.onload = loadLatestVideos;

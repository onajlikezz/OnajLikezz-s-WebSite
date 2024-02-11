function selectVideo(videoElement, videoSrc, thumbnailSrc, videoTitle, videoDescription) {
    // Postavljanje iframe src atributa na odabrani video
    document.getElementById('selected-video').src = videoSrc;

    // Postavljanje opisa videa
    document.getElementById('video-description').textContent = videoDescription;

    // Postavljanje klase 'active' na trenutno selektovani video i uklanjanje 'active' klase sa prethodno selektovanog
    var selectedVideo = document.querySelector('.video-item.active');
    if (selectedVideo) {
        selectedVideo.classList.remove('active');
    }
    videoElement.classList.add('active');
}

function searchVideos() {
    // Dobijanje unetog teksta iz polja za pretragu
    var searchText = document.getElementById('searchInput').value.toLowerCase();

    // Dobijanje liste svih video zapisa
    var videoItems = document.querySelectorAll('.video-item');

    // Iteriranje kroz sve video zapise
    videoItems.forEach(function(videoItem) {
        // Dobijanje naslova video zapisa
        var title = videoItem.querySelector('.video-title').textContent.toLowerCase();

        // Provera da li naslov sadrži uneti tekst
        if (title.includes(searchText)) {
            // Ako naslov sadrži uneti tekst, prikaži video zapis
            videoItem.style.display = 'block';
        } else {
            // Ako naslov ne sadrži uneti tekst, sakrij video zapis
            videoItem.style.display = 'none';
        }
    });
}
function selectVideo(element, videoUrl, thumbnail, title) {
    // Sklanja klasu "selected" sa svih elemenata
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => item.classList.remove('selected'));

    // Dodaje klasu "selected" na odabrani element
    element.classList.add('selected');

    // Prikazuje odabrani video u video playeru
    const videoPlayer = document.getElementById('selected-video');
    videoPlayer.src = videoUrl;

    // Postavlja thumbnail i naslov odabranog videa
    document.getElementById('thumbnail').src = thumbnail;
    document.getElementById('video-title').innerText = title;
}

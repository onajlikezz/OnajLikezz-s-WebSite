// Funkcija koja provjerava i postavlja prikaz pop-out reklame
function checkAndSetPopout() {
    // Provera lokalnog skladišta
    var popoutStatus = localStorage.getItem('popoutStatus');
    if (popoutStatus === 'visible') {
        document.getElementById('popout-container').style.display = 'block';
    }
}

// Provera i postavljanje prikaza pop-out reklame kada se stranica učita
window.addEventListener('load', function(event) {
    checkAndSetPopout();
});

// Prikazi pop-out reklamu kada korisnik pokusa napustiti stranicu
window.addEventListener('beforeunload', function(event) {
    localStorage.setItem('popoutStatus', 'visible');
});

// Zatvori pop-out reklamu kada korisnik klikne na dugme "x"
document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('popout-container').style.display = 'none';
    localStorage.setItem('popoutStatus', 'hidden');
});
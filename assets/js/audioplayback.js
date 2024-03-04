document.addEventListener("DOMContentLoaded", function() {
    var link = document.getElementById('audioControl');
    var audio = document.getElementById("audioElement");
    var icon = link.querySelector('i');

    link.addEventListener("click", function(event) {
        event.preventDefault(); 

        if (audio.paused) {
            audio.play(); 
            icon.classList.remove('bxs-volume-mute');
            icon.classList.add('bxs-volume-full');
        } else {
            audio.pause();
            audio.currentTime = 0; 
            icon.classList.remove('bxs-volume-full');
            icon.classList.add('bxs-volume-mute');
        }
    });
});
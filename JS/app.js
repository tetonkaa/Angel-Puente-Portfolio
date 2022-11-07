
const openModal = document.getElementById('modalOn')

const modal = document.getElementById('modal')
const exitModal = document.getElementById('close')

function startModal(){
    modal.style.display = 'flex'
}

function closeModal(){
    modal.style.display= 'none'
}
openModal.addEventListener('click', startModal)
exitModal.addEventListener('click', closeModal)


// const wallpapers = document.getElementbyId("background")
const slideBtn= document.getElementById("slideshow")


function wpchange(){
        document.getElementById("background").src = "images/16bitearth.png";
    document.getElementById("background").src = "images/dinomouth.jpg";
    
    
}

slideBtn.addEventListener('click',wpchange)



 

let playBtn = document.getElementById("songs")

function changeTrack(){

    let currentSong = document.getElementById("track")
    currentSong.pause();
    currentSong.src = "../sounds/njab.mp3";
    currentSong.play();
    
}

playBtn.addEventListener('click', changeTrack)

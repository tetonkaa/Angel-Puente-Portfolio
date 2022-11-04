console.log("test")
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

let audio = document.getElementById("beeper")

let navItem = document.getElementById("nav1")

navItem.addEventListener('mouseover', play(audio))


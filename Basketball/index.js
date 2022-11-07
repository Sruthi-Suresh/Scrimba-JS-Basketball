let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let hval=0 
let gval=0

function addHome()  {
    hval+=1 
    homeScore.textContent = hval

}

function addGuest()  {
    gval+=1 
    guestScore.textContent = gval

}

function reset() {
    homeScore.textContent = 0 
    guestScore.textContent = 0
}
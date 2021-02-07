


// // Get the button, and when the user clicks on it, execute myFunction
// document.querySelector(".span").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.querySelector(".reviewsHide").classList.toggle("show");
//   document.querySelector(".span").classList.toggle("spanshow");
// }


const reviewsOpen = () => {
    var expandArrow = document.querySelector(".span");//Selects expand arrow
    var hide = document.querySelector(".reviewsHide");//Selects review section to enable disable accordion 

    expandArrow.addEventListener('click', () => {
        hide.classList.toggle("reviewsHide");//Toggles between display none
        expandArrow.classList.toggle("spanshow");//Toggle between rotate 90deg
    });
}

reviewsOpen();



const panels = document.querySelectorAll('.numContainer')

panels.forEach(numContainer => {
    numContainer.addEventListener('click', () => {
        removeActiveClasses()
        numContainer.classList.add('active')
    })
})

function removeActiveClasses() {
    numContainer.forEach(numContainer => {
        numContainer.classList.remove('active')
    })
}


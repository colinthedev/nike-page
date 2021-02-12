//Burger Button Navigation Open
const navOpen = () => {
    //Burger Icon
    const burgerBtn = document.querySelector(".headerContainer__burger");
    const burger1 = document.querySelector(".headerContainer__burger-1");
    const burger2 = document.querySelector(".headerContainer__burger-2");
    const burger3 = document.querySelector(".headerContainer__burger-3");
    //Burger Animation
    const burger1open = document.querySelector(".headerContainer__burger-1");
    const burger2open = document.querySelector(".headerContainer__burger-2");
    const burger3open = document.querySelector(".headerContainer__burger-3");
    //Nav Container And Items
    const linkContainer = document.querySelector(".headerContainer__middle");
    const linkItems = document.querySelector(".headerContainer__middle-purchase");
    const searchAndIcons = document.querySelector(".headerContainer__rBottom");
    const logo = document.querySelector(".logo");
  
    burgerBtn.addEventListener('click', () => {
        //Burger Icon
        burgerBtn.classList.toggle("headerContainer__burger-active");
        burger1.classList.toggle("burgerLine-active");
        burger2.classList.toggle("burgerLine-active");
        burger3.classList.toggle("burgerLine-active");
        //Burger Animation
        burger1open.classList.toggle("headerContainer__burger-1--open");
        burger2open.classList.toggle("headerContainer__burger-2--open");
        burger3open.classList.toggle("headerContainer__burger-3--open");
        //Nav Container And Items
        linkContainer.classList.toggle("headerContainer__middle-active");
        linkItems.classList.toggle("headerContainer__middle-purchase-active");
        searchAndIcons.classList.toggle("headerContainer__rBottom-active");
        logo.classList.toggle("logo-active");
    });
  }

  navOpen();


//Review Section
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



// // Get the button, and when the user clicks on it, execute myFunction
// document.querySelector(".span").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.querySelector(".reviewsHide").classList.toggle("show");
//   document.querySelector(".span").classList.toggle("spanshow");
// }

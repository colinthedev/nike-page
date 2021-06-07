'Use strict'

// Burger Button Navigation Open
const navOpen = () => {
    //Burger Icon
    let burgerBtn = document.querySelector(".headerContainer__burger");
    let burger1 = document.querySelector(".headerContainer__burger-1");
    let burger2 = document.querySelector(".headerContainer__burger-2");
    let burger3 = document.querySelector(".headerContainer__burger-3");
    //Burger Animation
    let burger1open = document.querySelector(".headerContainer__burger-1");
    let burger2open = document.querySelector(".headerContainer__burger-2");
    let burger3open = document.querySelector(".headerContainer__burger-3");
    //Nav Container And Items
    let linkContainer = document.querySelector(".headerContainer__middle");
    let linkItems = document.querySelector(".headerContainer__middle-purchase");
    let searchAndIcons = document.querySelector(".headerContainer__rBottom");
    let logo = document.querySelector(".logo");

  
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
  };
  navOpen();


// Review Section
const reviewsOpen = () => {
    let expandArrow = document.querySelector(".span");//Selects expand arrow
    let hide = document.querySelector(".reviewsHide");//Selects review section to enable disable accordion 

    expandArrow.addEventListener('click', () => {
        hide.classList.toggle("reviewsHide");//Toggles between display none
        expandArrow.classList.toggle("spanshow");//Toggle between rotate 90deg
    });
};

reviewsOpen();

// Shoe size button
// Get the shoe size button
let shoeSizeBtn = document.querySelectorAll('.numContainer__wrapper');
// console.log(shoeSizeBtn);

// Add active class to selected size button
shoeSizeBtn.forEach(numContainer__wrapper => {
    numContainer__wrapper.addEventListener('click', () => {
        removeActiveClasses()
        numContainer__wrapper.classList.add('active')
    });
});

// Remove active class from previous size button
function removeActiveClasses() {
    shoeSizeBtn.forEach(numContainer__wrapper => {
        numContainer__wrapper.classList.remove('active')
    });
};


// Shoe color
// Get buttons
let multiColorBtn = document.getElementById('multiBtn');
let blueColorBtn = document.getElementById('blueBtn');
let redColorBtn = document.getElementById('redBtn');
// console.log(multiColorBtn);

// Get images
let shoeSide = document.getElementById('side');
let shoeTop = document.getElementById('top');
let shoeBottom = document.getElementById('bottom');
let shoeSide2 = document.getElementById('side2');
// console.log();

// Change image on click
// Multi
multiColorBtn.addEventListener('click', function() {
    shoeSide.src = 'img/main/ShoeSide.svg';
    shoeTop.src = 'img/main/ShoeTop.svg';
    shoeBottom.src = 'img/main/ShoeBottom.svg';
    shoeSide2.src = 'img/main/ShoeSide2.svg';
})

// Blue
blueColorBtn.addEventListener('click', function() {
    shoeSide.src = 'img/main/ShoeSide-blue.svg';
    shoeTop.src = 'img/main/ShoeTop-blue.svg';
    shoeBottom.src = 'img/main/ShoeBottom-blue.svg';
    shoeSide2.src = 'img/main/ShoeSide2-blue.svg';
})

// Red
redColorBtn.addEventListener('click', function() {
    shoeSide.src = 'img/main/ShoeSide-red.svg';
    shoeTop.src = 'img/main/ShoeTop-red.svg';
    shoeBottom.src = 'img/main/ShoeBottom-red.svg';
    shoeSide2.src = 'img/main/ShoeSide2-red.svg';
})


// Shoe color buttons
// Get the shoe color button
// let shoeColorBtn = document.querySelectorAll('.colorBtn');
// console.log(shoeColorBtn);

// shoeColorBtn.forEach(colorBtn => {
//     colorBtn.addEventListener('click', () => {
//         removeActiveColor()
//         colorBtn.classList.add('active')
//         // console.log(colorBtn);
//     });
// });

// function removeActiveColor() {
//     shoeColorBtn.forEach(colorBtn => {
//         colorBtn.classList.remove('active')
//         console.log(colorBtn);
//     });
// };

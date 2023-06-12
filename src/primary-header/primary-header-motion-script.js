const primaryNav = document.querySelector(".primary-navigation");
const hamburger = document.querySelector('.hamburger-bars');

hamburger.addEventListener("click", () => {

    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        hamburger.classList.toggle('active');
    }
    else if(visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        hamburger.classList.toggle('active');
    }

});
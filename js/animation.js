const bttn = document.querySelector(".mobile--only")
const bttnImage = bttn.querySelector("img")
const menu = document.querySelector(".wrapper.wrapper--end")

const hamburgerIcon = {src: "./images/hamburger.svg", alt: "Open Menu"}
const closeIcon = {src: "./images/close.svg", alt: "Close Menu"}

bttn.addEventListener('click', () => {
    // console.log("hello worldz")
    if(menu.classList.contains("shown")){
        bttn.classList.add("faded")

        menu.classList.add("hidden")
        menu.classList.remove("shown")
        
        // wait for the animation to finish
        setTimeout(() => ChangeIcon(hamburgerIcon), 300)
    }else{
        menu.classList.add("shown")
        menu.classList.remove("hidden")

        // wait for the animation to finish
        setTimeout(() => ChangeIcon(closeIcon), 300)
    }
})

const ChangeIcon = (pathObj) => {
    // change the icon and alt for the navigaiton button
    for (key in pathObj){
        bttnImage.setAttribute(key, pathObj[key])
    }

    // remove the opacity
    bttn.classList.remove("faded")
}
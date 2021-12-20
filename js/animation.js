const bttn = document.querySelector(".mobile--only")
const menu = document.querySelector(".wrapper.wrapper--end")

bttn.addEventListener('click', () => {
    // console.log("hello worldz")
    if(menu.classList.contains("shown")){
        menu.classList.add("hidden")
        menu.classList.remove("shown")
    }else{
        menu.classList.add("shown")
        menu.classList.remove("hidden")
    }
})
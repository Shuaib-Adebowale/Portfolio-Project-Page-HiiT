const fullName = document.getElementById("name")
const emailFull = document.getElementById("email")
const textArea = document.getElementById("text")
const subForm = document.getElementById("sub")
const menuOpen = document.getElementById("menu-button")
const menuButton2 = document.getElementById("menu-button-2")
const menuList = document.querySelector(".menu-contact")
const mainPage = document.getElementById("main-page")

subForm.addEventListener("click",function(e){
    e.preventDefault();
    const nin = fullName.value;
    const candidateId = emailFull.value;
    const candidateId2 = textArea.value;
    console.log(
    `Name: ${nin} \n 
    Email: ${candidateId} \n
    More Information: ${candidateId2}`)

})


menuOpen.addEventListener("click", function(e){
    menuList.style.display = "block";
})

menuButton2.addEventListener("click", function(e){
    menuList.style.display = "none";
})

mainPage.addEventListener("click", function(){ 
    menuList.style.display = "none"
})


window.addEventListener("scroll", function () {
    var liA = document.getElementById("item__a");
    liA.classList.toggle("abajo",window.scrollY>0 && window.scrollY<1000);
});
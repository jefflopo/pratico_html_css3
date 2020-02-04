setTimeout(AparecerModal, 5000);
function AparecerModal(){
    document.querySelector(".modal").style.display = "block";

    document.querySelector(".modal a")
        .addEventListener("click", function () {
            document.querySelector(".modal").style.display = "none";
        })
}
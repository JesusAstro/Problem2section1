document.addEventListener('DOMContentLoaded', function () {

    const panels = document.getElementsByClassName("panel");
    for (let panel of panels) {
        panel.addEventListener("click",function (){
            //console.log(panel.className)
            panel.classList.toggle("open");
        });
    }


});

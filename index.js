practicas_open = true;
resumen_open = false;



function change_practicas_status() {
    let sidebar_submenu = document.getElementById("practicas-opciones");
    practicas_open ^= true; //alternate true/false on each click
    sidebar_submenu.style.display = practicas_open ? 'block' : 'none'
}

function show_resume() {
    let resumen = document.getElementById("resume-p");
    let r_button = document.getElementById("resume-button");
    if (resumen_open) {
        resumen.classList.remove('resume-expand');
        resumen.classList.add('resume-contract');
        r_button.style.transform = "rotate(0deg)";
    } else {
        resumen.classList.remove('resume-contract');
        resumen.classList.add('resume-expand');
        r_button.style.transform = "rotate(180deg)";
    }    
    resumen_open ^= true;
}

/*======================= VUE.js =========================*/

var app = new Vue({
    el:'#app',
    data:{
        page_title: 'Astronomía para gente apurada',
    },
});


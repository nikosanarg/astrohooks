practicas_open = true;
resumen_open = false;



function change_practicas_status() {
    let sidebar_submenu = document.getElementById("practicas-opciones");
    practicas_open ^= true; //alternate true/false on each click
    sidebar_submenu.style.display = practicas_open ? 'block' : 'none'
}

function show_resume() {
    let resumen = document.getElementById("resume-p");
    if (resumen_open) {
        resumen.classList.remove('resume-expand');
        resumen.classList.add('resume-contract');
    } else {
        resumen.classList.remove('resume-contract');
        resumen.classList.add('resume-expand');
    }
    resumen_open ^= true;
}
"fas fa-sort-down fa-2x"

/*======================= VUE.js =========================*/

var app = new Vue({
    el:'#app',
    data:{
        page_title: 'Astronomía para gente apurada',
        message: 'ASTRONOMIA PARA GENTE APURADA'
    },
});


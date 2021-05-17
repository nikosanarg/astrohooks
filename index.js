practicas_open = true;

const sidebar_submenu = document.getElementById("practicas-opciones")

function change_practicas_status() {
    practicas_open ^= true; //alternate true/false on each click
    sidebar_submenu.style.display = practicas_open ? 'block' : 'none'
}


/*======================= VUE.js =========================*/

var app = new Vue({
    el:'#app',
    data:{
        page_title: 'Astronomía para gente apurada',
        message: 'ASTRONOMIA PARA GENTE APURADA'
    },
});


practicas_open = true;



function change_practicas_status() {
    let sidebar_submenu = document.getElementById("practicas-opciones");
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


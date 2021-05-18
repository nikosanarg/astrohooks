Vue.component('v-header', {
    template: '\
        <div id="header">\
            <a href="/">Astronomía para gente apurada</a>\
            <a style="color: #55acee;" href="https://twitter.com/nsandobal_" target="_blank" id="fontawesome-button" role="button"><i class="fab fa-twitter fa-sm"></i></a>\
            <a style="color: #ac2bac;" href="https://instagram.com/sandobyte" target="_blank" id="fontawesome-button" role="button"><i class="fab fa-instagram fa-sm"></i></a>\
        </div>',
});

Vue.component('v-sidebar', {
    template: '\
        <div class="flexbox" id="sidebar">\
            <ul>\
                <a href="#resume"><li>Resumen</li></a>\
                <a id="menu-practicas" onclick="change_practicas_status()"><li>Prácticas</li></a>\
                <div id="practicas-opciones">\
                <a id="sidebar-practica" href="#practica1"><li>Práctica 1</li></a>\
                <a id="sidebar-practica" href="#practica2"><li>Práctica 2</li></a>\
                <a id="sidebar-practica" href="#practica3"><li>Práctica 3</li></a>\
                <a id="sidebar-practica" href="#practica4"><li>Práctica 4</li></a>\
                <a id="sidebar-practica" href="#practica5"><li>Práctica 5</li></a>\
                </div>\
                <a><img id="sidebar-img" src="./assets/rotating-galaxy.gif" alt=""></a>\
            </ul>\
        </div>',
});

Vue.component('v-footer', {
    template: '\
        <div id="footer">\
            <div id="f-contacto"><a>Contacto</a></div>\
            <div class="flexbox" id="footer-container">\
                <div>\
                    <a style="color: #cacaca;" href="https://github.com/nikosanarg" target="_blank" id="fontawesome-button-footer" role="button"><i class="fab fa-github fa-2x"></i></a>\
                    <a style="color: #00589b;" href="https://www.linkedin.com/in/nicolás-sandobal-988b82133/" target="_blank" id="fontawesome-button-footer" role="button"><i class="fab fa-linkedin fa-2x"></i></a>\
                    <a style="color: #55acee;" href="https://twitter.com/nsandobal_" target="_blank" id="fontawesome-button-footer" role="button"><i class="fab fa-twitter fa-2x"></i></a>\
                </div>\
                <div>\
                    <a style="color: #ac2bac;" href="https://instagram.com/sandobyte" target="_blank" id="fontawesome-button-footer" role="button"><i class="fab fa-instagram fa-2x"></i></a>\
                    <a style="color: #72ee67;" href="https://instagram.com/nsandobal" target="_blank" id="fontawesome-button-footer" role="button"><i class="fab fa-instagram fa-2x"></i></a>\
                    <a style="color: #79c5ff;" href="https://t.me/Arlistan" target="_blank" id="fontawesome-button-footer" role="button"><i class="fab fa-telegram-plane fa-2x"></i></a>\
                </div>\
            </div>\
            <div id="footer-container">\
                <div id="f-email"><a>nicsandobal@gmail.com</a></div>\
                <div id="f-email-send-button"><a onclick="mail()">Enviar correo electrónico</a></div>\
            </div>\
        </div>',
});

const titles = [
    'Repaso de trigonometría plana',
    'Esfera celeste',
    'Movimiento diurno de los astros',
    'Sistemas de coordenadas locales',
    'Transformaciones de coordenadas locales',
    'Movimiento anual aparente del sol',
    'Sistema de coordenadas absoluto',
];

Vue.component('pdf-resource', {
    props: {
        index: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        getTitle() {
            return titles[this.index-1];
        },
    },
    template: `\
        <div>\
            <p><h1>Práctica {{ this.index }} </h1><h3>( </h3><h5>\
                <a :href="'./practica/practica0' + (this.index) + '.pdf'" target="_blank">Práctica 0{{ this.index }}</a>  - \
                <a :href="'./practica/practica0' + (this.index) + '-exp.pdf'" target="_blank">Pdf teórico</a>\
            </h5><h3> )</h3></p>\
            <h3>{{ getTitle() }}</h3>\
        </div>`,
    });

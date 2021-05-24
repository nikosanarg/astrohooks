
// onclick="px_clean('p1-x1')"
const p1_1_select_options = ['p1-x1', 'p1-x2', 'p1-x3', 'p1-x4'];
const p1_2_select_options = ['p1-x5', 'p1-x6', 'p1-x7'];

function px_clean(prefix) {
    let prefix_i = prefix + '-i';
    let existance = true;
    let i=1;
    while (existance) {
        let id = prefix_i + i;
        let input = document.getElementById(id);
        if (input != null) {
            input.value = '';
            if (i == 1) input.focus();
        } else {
            existance = false;
        }
        i++;
    }

    let prefix_o = prefix + '-o';
    existance = true;
    i=1;
    while (existance) {
        let id = prefix_o + i;
        let output = document.getElementById(id);
        if (output != null) {
            output.value = '';
        } else {
            existance = false;
        }
        i++;
    }
}

function p1_1_clean() {
    p1_1_select_options.forEach(el => px_clean(el));
}

function p1_2_clean() {
    p1_2_select_options.forEach(el => px_clean(el));
}

function p1_1_change_type() {
    let opt = document.getElementById("p1-1-select").value;
    p1_1_select_options.forEach(i => {
        if (i == opt) {
            document.getElementById(i).classList.add('visible');
            document.getElementById(i).classList.remove('invisible');
        } else {
            document.getElementById(i).classList.add('invisible');
            document.getElementById(i).classList.remove('visible');
        } 
        p1_1_clean();
    });
}

function p1_2_change_type() {
    let opt = document.getElementById("p1-2-select").value;
    p1_2_select_options.forEach(i => {
        if (i == opt) {
            document.getElementById(i).classList.add('visible');
            document.getElementById(i).classList.remove('invisible');
        } else {
            document.getElementById(i).classList.add('invisible');
            document.getElementById(i).classList.remove('visible');
        } 
        p1_2_clean();
    });
}

function p1_x1_calc() { // grades to ...
    let [i1] = catch_inputs('p1-x1', 1);
    let [grades, minutes, seconds] = g2gms(i1);
    document.getElementById('p1-x1-o1').value = parseFloat(grades) + "° " + parseFloat(minutes) + "' " + parseFloat(seconds) + "''";
}

function p1_x2_calc() { // grades minutes seconds to ...
    let [i1, i2, i3] = catch_inputs('p1-x2', 3);
    let grados = gms2g(i1, i2, i3);
    document.getElementById('p1-x2-o1').value = grados + "°";
    let radianes = gms2rad(i1, i2, i3);
    document.getElementById('p1-x2-o2').value = radianes + " rad";
    let [hs, min, seg] = gms2hms(i1, i2, i3);
    document.getElementById('p1-x2-o3').value = hs + "hs " + min + "min " + seg + "seg";
}

function p1_x3_calc() { // radians to ...
    let [i1] = catch_inputs('p1-x3', 1);
    let grados = rad2g(i1);
    document.getElementById('p1-x3-o1').value = grados + "°";
    let [grad, minutos, segundos] = rad2gms(i1);
    document.getElementById('p1-x3-o2').value = parseFloat(grad) + "° " + parseFloat(minutos) + "' " + parseFloat(segundos) + "''";
    let [hs, min, seg] = rad2hms(i1);
    document.getElementById('p1-x3-o3').value = hs + "hs " + min + "min " + seg + "seg";
}

function p1_x4_calc() { // hours minutes seconds to ...
    let [i1, i2, i3] = catch_inputs('p1-x4', 3);
    let grados = hms2g(i1, i2, i3);
    document.getElementById('p1-x4-o1').value = grados + "°";
    let radianes = hms2rad(i1, i2, i3);
    document.getElementById('p1-x4-o2').value = radianes + " rad";
    let [grad, minutos, segundos] = hms2gms(i1, i2, i3);
    document.getElementById('p1-x4-o3').value = parseFloat(grad) + "° " + parseFloat(minutos) + "' " + parseFloat(segundos) + "''";
}

function p1_x5_calc() {
    let [i1] = catch_inputs('p1-x5', 1);
}
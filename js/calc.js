
// onclick="px_clean('p1-x1')"
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

function px_clean_p1() {
    px_clean('p1-x1');
    px_clean('p1-x2');
    px_clean('p1-x3');
    px_clean('p1-x4');
}

const p1_select_options = ['p1-x1', 'p1-x2', 'p1-x3', 'p1-x4'];
function p1_change_type() {
    let opt = document.getElementById("p1-select").value;
    p1_select_options.forEach(i => {
        if (i == opt) {
            document.getElementById(i).classList.add('visible');
            document.getElementById(i).classList.remove('invisible');
        } else {
            document.getElementById(i).classList.add('invisible');
            document.getElementById(i).classList.remove('visible');
        } 
        px_clean_p1();
    });
}

function p1_x1_calc() {
    let i1 = document.getElementById('p1-x1-i1').value - 0;
    let grades = Math.trunc(i1);
    let minutes = Math.trunc((i1 - grades) * 60 + 0.0001);
    let seconds = Math.trunc((((i1 - grades) * 60) - minutes) * 60 + 0.0001);
    document.getElementById('p1-x1-o1').value = parseFloat(grades) + "° " + parseFloat(minutes) + "' " + parseFloat(seconds) + "''";
}

function p1_x2_calc() {
    let i1 = document.getElementById('p1-x2-i1').value - 0;
    let i2 = document.getElementById('p1-x2-i2').value - 0;
    let i3 = document.getElementById('p1-x2-i3').value - 0;
    let grados = parseFloat((i1 + (i2 / 60) + (i3 / 3600)).toFixed(5));
    document.getElementById('p1-x2-o1').value = grados + "°";
    document.getElementById('p1-x2-o2').value = parseFloat((grados * 3.1415926535 / 180).toFixed(5)) + " rad";
    let hs = Math.trunc(grados * 12 / 180); 
    let min = Math.trunc(((grados * 12 / 180) - hs) * 60 + 0.0001); 
    let seg = Math.trunc(((((grados * 12 / 180) - hs) * 60) - min) * 60 + 0.0001); 
    document.getElementById('p1-x2-o3').value = hs + "hs " + min + "min " + seg + "seg";
}

function p1_x3_calc() {
    let i1 = document.getElementById("p1-x3-i1").value - 0;
    let grados = parseFloat((i1 * 180 / 3.1415926535).toFixed(5));
    document.getElementById('p1-x3-o1').value = grados + "°";
    let grades = Math.trunc(grados);
    let minutes = Math.trunc((grados - grades) * 60 + 0.0001);
    let seconds = Math.trunc((((grados - grades) * 60) - minutes) * 60 + 0.0001);
    document.getElementById('p1-x3-o2').value = parseFloat(grades) + "° " + parseFloat(minutes) + "' " + parseFloat(seconds) + "''";
    let hs = Math.trunc(grados * 12 / 180); 
    let min = Math.trunc(((grados * 12 / 180) - hs) * 60 + 0.0001); 
    let seg = Math.trunc(((((grados * 12 / 180) - hs) * 60) - min) * 60 + 0.0001); 
    document.getElementById('p1-x3-o3').value = hs + "hs " + min + "min " + seg + "seg";
}

function p1_x4_calc() {
    let i1 = document.getElementById('p1-x4-i1').value - 0;
    let i2 = document.getElementById('p1-x4-i2').value - 0;
    let i3 = document.getElementById('p1-x4-i3').value - 0;
    let grados = parseFloat(((i1 + (i2 / 60) + (i3 / 3600)) * 180 / 12).toFixed(5));
    document.getElementById('p1-x4-o1').value = grados + "°";
    document.getElementById('p1-x4-o2').value = parseFloat((grados * 3.1415926535 / 180).toFixed(5)) + " rad";
    let grades = Math.trunc(grados);
    let minutes = Math.trunc((grados - grades) * 60 + 0.0001);
    let seconds = Math.trunc((((grados - grades) * 60) - minutes) * 60 + 0.0001);
    document.getElementById('p1-x4-o3').value = parseFloat(grades) + "° " + parseFloat(minutes) + "' " + parseFloat(seconds) + "''";

}
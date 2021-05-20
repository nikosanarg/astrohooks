
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

function p1_x1_calc() {
    let i1 = document.getElementById('p1-x1-i1').value - 0;
    let i2 = document.getElementById('p1-x1-i2').value - 0;
    let i3 = document.getElementById('p1-x1-i3').value - 0;
    document.getElementById('p1-x1-o1').value = parseFloat((i1 + (i2 / 60) + (i3 / 3600)).toFixed(5)) + "°";
}

function p1_x2_calc() {
    let i1 = document.getElementById('p1-x2-i1').value - 0;
    let grades = Math.trunc(i1);
    document.getElementById('p1-x2-o1').value = parseFloat(grades) + "°";
    let minutes = Math.trunc((i1 - grades) * 60 + 0.00001);
    document.getElementById('p1-x2-o2').value = parseFloat(minutes) + "'";
    let seconds = Math.trunc((((i1 - grades) * 60) - minutes) * 60 + 0.00001);
    document.getElementById('p1-x2-o3').value = parseFloat(seconds) + '"';
}
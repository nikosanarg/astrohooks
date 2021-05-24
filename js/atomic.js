function catch_inputs(excercise, quantity) {
    let results = []
    for (let i = 1; i <= quantity; i++) {
        results.push(document.getElementById(excercise + "-i" + i).value - 0);
    }
    return results;
}

function gOverflow360(grades) {
    (grades >= 360) ? grades %= 360 : true;
    return grades;
}

function nViewFormat(val) { 
    return Math.round(val * 100000) / 100000;
}

function g2rad(val) {
    let grades = val * 3.1415926535 / 180;
    grades = parseFloat(gOverflow360(grades).toFixed(5));
    return grades;
}
function g2gms(val) { 
    val = gOverflow360(val);
    let grades = Math.trunc(val);
    let minutes = Math.trunc((val - grades) * 60);
    let seconds = Math.round((((val - grades) * 60) - minutes) * 60);
    return [grades, minutes, seconds];
}
function g2hms(val) {
    let hours = Math.trunc(val * 12 / 180); 
    let minutes = Math.trunc(((val * 12 / 180) - hours) * 60); 
    let seconds = Math.round(((((val * 12 / 180) - hours) * 60) - minutes) * 60); 
    return [hours, minutes, seconds];
}

function gms2g(val1, val2, val3) {
    val1 = gOverflow360(val1);
    let grades = parseFloat((val1 + (val2 / 60) + (val3 / 3600)).toFixed(5));
    return grades;
}
function gms2rad(val1, val2, val3) {
    let grades = gms2g(val1, val2, val3);
    let radians = parseFloat((grades * 3.1415926535 / 180).toFixed(5));
    return radians;
}
function gms2hms(val1, val2, val3) {
    let grades = gms2g(val1, val2, val3);
    return g2hms(grades);
}

function rad2g(val) {
    let grades = parseFloat((val * 180 / 3.1415926535).toFixed(5));
    grades = gOverflow360(grades).toFixed(5);
    return grades;
}
function rad2gms(val) {
    let grades = rad2g(val);
    grades = gOverflow360(grades);
    return g2gms(grades);
}
function rad2hms(val) {
    let grades = rad2g(val);
    grades = gOverflow360(grades);
    return g2hms(grades);
}

function hms2g(val1, val2, val3) {
    let grades = ((val1 + (val2 / 60) + (val3 / 3600)) * 180 / 12);
    grades = parseFloat(gOverflow360(grades)).toFixed(5);
    return grades;
}
function hms2rad(val1, val2, val3) {
    let grades = hms2g(val1, val2, val3);
    let radians = parseFloat((grades * 3.1415926535 / 180).toFixed(5));
    return radians;
}
function hms2gms(val1, val2, val3) {
    let grades = hms2g(val1, val2, val3);
    return g2gms(grades);
}

function gCuadrante(grad) {
    grad = gOverflow360(grad);
    if (grad > 0 && grad < 90) {
        return "Primero"
    } else if (grad > 90 && grad < 180) {
        return "Segundo"
    } else if (grad > 180 && grad < 270) {
        return "Tercero"
    } else if (grad > 270 && grad < 360) {
        return "Cuarto"
    } else {
        switch (grad) {
            case 0: return "Primero y cuarto";
            case 90: return "Primero y segundo";
            case 180: return "Segundo y tercero";
            case 270: return "Tercero y cuarto";
        }
    }
}

function gTrigonometricas(grades) {
    let gr = g2rad(grades); 
    let results = [];
    results.push(nViewFormat(Math.sin(gr)));
    results.push(nViewFormat(Math.cos(gr)));
    if (grades == 90 || grades == 270) {
        results.push("∉ ℝ");
    } else {
        results.push(nViewFormat(Math.cos(gr)));
    } 
    if (grades == 0 || grades == 180) {
        results.push("∉ ℝ");
    } else {
        results.push(nViewFormat(1/Math.sin(gr)));
    } 
    if (grades == 90 || grades == 270) {
        results.push("∉ ℝ");
    } else {
        results.push(nViewFormat(1/Math.cos(gr)));
    } 
    if (grades == 0 || grades == 180) {
        results.push("∉ ℝ");
    } else {
        results.push(nViewFormat(1/Math.tan(gr)));
    } 
    return results;
}
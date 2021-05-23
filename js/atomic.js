function catch_inputs(excercise, quantity) {
    let results = []
    for (let i = 1; i <= quantity; i++) {
        results.push(document.getElementById(excercise + "-i" + i).value - 0);
    }
    return results;
}

function g2gms(val) { 
    let grades = Math.trunc(val);
    let minutes = Math.trunc((val - grades) * 60 + 0.0001);
    let seconds = Math.trunc((((val - grades) * 60) - minutes) * 60 + 0.0001);
    return [grades, minutes, seconds];
}
function g2hms(val) {
    let hours = Math.trunc(val * 12 / 180); 
    let minutes = Math.trunc(((val * 12 / 180) - hours) * 60 + 0.0001); 
    let seconds = Math.trunc(((((val * 12 / 180) - hours) * 60) - minutes) * 60 + 0.0001); 
    return [hours, minutes, seconds];
}

function gms2g(val1, val2, val3) {
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
    return grades;
}
function rad2gms(val) {
    let grades = rad2g(val);
    return g2gms(grades);
}
function rad2hms(val) {
    let grades = rad2g(val);
    return g2hms(grades);
}

function hms2g(val1, val2, val3) {
    let grades = parseFloat(((val1 + (val2 / 60) + (val3 / 3600)) * 180 / 12).toFixed(5));
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
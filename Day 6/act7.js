function fircounterfunc() {
    let fircounter = 0;
    return function() {
        fircounter++;
        console.log(fircounter);
    };
}
function seccounterfunc() {
    let seccounter = 0;
    return function() {
        seccounter++;
        console.log(seccounter);
    };
}

// fircounterfunc ();
// seccounterfunc ();

// console.log(result_1());
// console.log(result_2());

let result_1 = fircounterfunc ();
let result_2 = seccounterfunc ();

result_1 ();
result_1 ();
result_2 ();
result_2 ();







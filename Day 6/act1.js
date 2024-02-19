// // Actvity #1
function eo_checker() {
    let number = parseInt(prompt("Enter a positive number:"));

    if (number % 2 == 0){
         return "Even";
     }
    else{
        return "Odd"; 
     }
 
}

let output = eo_checker();
console.log("It is", output);









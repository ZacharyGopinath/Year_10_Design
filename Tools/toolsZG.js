var isEven = false
function checkEven(a){
    if (parseInt(a)%2==0){
        isEven = true
        console.log(isEven)
        console.log("Your # is even!")
    }
    else{
        console.log(isEven)
        console.log("Your # is odd!")
    }
}
var a = prompt("What # would you like to check: ")
checkEven(a)

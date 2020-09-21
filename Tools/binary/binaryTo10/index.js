function calculate(){
    var num = document.getElementById("input").value;
    var n = 0;
    var total = 0;
    for (i = num.length - 1; i >= 0; i--){
        total = total + parseInt(num[i]) * (2**n);
        n = n + 1
        console.log(total)
    };
   var finalTotal = document.getElementById("outputBox").append(total)

}
function calculate(){
    var num = document.getElementById("input").value;
    var isValid = true;
    for (var i  = 0; i < num.length; ++i){
        if (num[i] == 1 || num[i] == 0){
            console.log(num[i] + " == Good");
        }
        else{
            isValid = false;
        }
    }
    if (isValid == true){
        var n = 0;
        var total = 0;
        for (i = num.length - 1; i >= 0; i--){
            total = total + parseInt(num[i]) * (2**n);
            n = n + 1;
        }
       document.getElementById("outputBox").innerHTML = total;
    }
    else{
        document.getElementById("outputBox").innerHTML = "Not a Valid Number"
    }
}

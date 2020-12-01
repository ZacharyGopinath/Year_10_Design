/*
var uNames = ['user1@test.com','user2@test.com'];
var pWord = ['pword1','pword2'];

function checkCred(u,p){
    if(u[5]=p[5]){
        console.log(u,p);
    }
    else{
        console.log('WRONG');
    }

}
checkCred('user1@test.com','1234')
*/

const uinput = document.getElementById('uinput');
const pinput = document.getElementById('pinput');
const dict = {
    'u1':'p1',
    'u2':'p2',
    'zgopinath':'password'
}

function submit(){
    for (var i = 0; i < Object.keys(dict).length ; i++){
        if (dict[uinput.value] === pinput.value){
            document.getElementById('result').innerHTML = 'TRUE!'
        }
        else{
            document.getElementById('result').innerHTML = 'FALSE!'
        }
    }
};
function submit(){
    /*
    //const initDate = document.getElementById('dateinput').value;
    const dateinput = new Date('01/03/2021');
    const month = dateinput.getMonth()
    const day = dateinput.getDay();
    const date = dateinput.getDate();
    const year = dateinput.getFullYear();
    const output = document.getElementById('output');
    */

   const months = {
    0:'January',
    1:'February',
    2:'March',
    3:'April',
    4:'May',
    5:'June',
    6:'July',
    7:'August',
    8:'September',
    9:'October',
    10:'Novermber',
    11:'December'
}

    //inputted date
    const d = new Date(document.getElementById('dateinput').value);

    //calculations for the 5 days before the date
    const dayone = new Date(document.getElementById('dateinput').value)
    dayone.setDate(d.getDate() - 4).toString();
    let monthone = d.getMonth();
    monthone = months[monthone]

    const daytwo = new Date(document.getElementById('dateinput').value)
    daytwo.setDate(d.getDate() - 3).toString();
    const daythree = new Date(document.getElementById('dateinput').value)
    daythree.setDate(d.getDate() - 2).toString();
    const dayfour = new Date(document.getElementById('dateinput').value)
    dayfour.setDate(d.getDate() - 1).toString();
    const dayfive = new Date(document.getElementById('dateinput').value)
    dayfive.setDate(d.getDate() - 0).toString();
   
    //dictionary to store the days, can be edited like dayone.getDay()
    const dict = {
        dayone:dayone,
        daytwo:daytwo,
        daythree:daythree,
        dayfour:dayfour,
        dayfive:dayfive
    }
    output.innerHTML = monthone + ' ' + dict.dayone.getDate() + ' ' + 'do this: ';
}
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerHTML
        .split('')
        .map((letter,index) => `<span>${letter}</span>`)
        .join('')
})

var name;
var email;


function storevalue(){
  
    name = document.getElementById('txt').value;
    email = document.getElementById('mail').value; 

   localStorage.setItem("fullname", name);
   localStorage.setItem("email", email);

}

var amt;
var year;
var rate = 0.085;
var month;
var emi;

function total_emi() {
    amt = parseInt(document.getElementById('amount').value);
    year = parseInt(document.getElementById('year').value);
    
    emi = parseInt(((amt) + (amt * rate * year)) / month);

    document.getElementById('result').innerHTML= "Rs" + " " + emi + " " + "/month";
}


// function openConfirm(){
    
//     window.location.assign('http://192.168.206.50:5500/confirm.html')
// } 


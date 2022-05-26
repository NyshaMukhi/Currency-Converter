let dollars;
let rupees;
function convert(){
    dollars= document.getElementById("dollarsinput").value;
    rupees=dollars*75;
    document.getElementById("rupees").innerHTML=rupees;
}
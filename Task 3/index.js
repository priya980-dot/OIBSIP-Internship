const celInp=document.getElementById("cel");
const fahInp=document.getElementById("fahrenheit");
const kelInp=document.getElementById("Kelvin");

const inps=document.getElementsByClassName("inputs");

for(let i=0;i<inps.length;i++){
    let input=inps[i];
input.addEventListener("input",function(e){
let value=parseFloat(e.target.value);
switch (e.target.name) {
    case "cel":
        fahInp.value=(value*1.8)+32;
        kelInp.value=value+273.15;
        break;
        case "fahrenheit":
            celInp.value=(value-32)/1.8;
            kelInp.value=((value-32)/1.8)+273.15;
            break;

            case "Kelvin":
                celInp.value=value-273.15;
                kelInp.value=((value-273.15)*1.8)+32;
        break;

    default:
        break;
}
});

    
}
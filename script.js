var pass = document.querySelector("#pass")
var mess = document.querySelector("#mess")
var stre = document.querySelector("#stren")

pass.addEventListener("input", function(){
    if(pass.value.length>0){
        mess.style.display = "block";
    }
    else{
        mess.style.display = "none";
    }

    if(pass.value.length<4){
        pass.style.borderColor = "red"
        mess.style.color = "red"
        stre.innerHTML = "weak"
    }
  else  if(pass.value.length>=4 && pass.value.length<8){
        stre.innerHTML = "medium"
        mess.style.color = "yellow"
        pass.style.borderColor = "yellow"
    }
    else{
        stre.innerHTML = "strong"
        mess.style.color = "green"
        pass.style.borderColor = "green"
    }
})
function changeFontSize(x){
  var p = document.getElementsByClassName("text");
  for (var i =0;i< p.length ; i++){
    p[i].style.fontSize = x +"px";
  }
  
}


//EX 2
function increaseFontSize(paragraph){  
  var pX = document.getElementById(paragraph);
  var a =pX.style.fontSize ;  
  if (parseInt(a)>29){    
    return;
  }else {
    a=pX.style.fontSize = parseInt(a)+1 +"px"; 
  }
}

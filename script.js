function myFunction(){
var x=document.getElementById("name").value;
var y=document.getElementById("email").value;
var z=document.getElementById("number").value;
var a=document.getElementById("most-like").value;
var b=document.getElementById("dropdown").value;
var text="";
if(z!==""){z=parseInt(z);if(z<18){text+="thank you for being with us, from such a junior age!!\n"}}
if(x.length<3){alert("name must have length ,greater than 2");}
else if((y.length<7) || (y.substring(y.length-4)!==".com")){alert("invalid email");}

else if(a.length>0 && b.length>0 ){text+="form submitted successfully";alert(text);}

}

function login(){
    var user, password, id;
    
    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;
    id = document.getElementById("numero").value;
    
    if(user == "juana" && password == "Juana12" && id=="0011",user=="Agustin" && password == "Agustin10" && id== "0022" ){
        window.location= "ventana1.html"
    }else{
      alert("los datos no son correctos")

    }
    }
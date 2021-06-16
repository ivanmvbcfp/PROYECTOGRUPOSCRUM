function enviar(){

    var correo = document.getElementById('email').value;
    document.cookie="correo=" + correo;
    console.log(document.cookie);
}
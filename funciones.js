// JavaScript Document
function validar(){ //Validar campos vacíos
	let nom=document.getElementById("nombre").value;
	let edad=document.getElementById("edad").value;
	let correo=document.getElementById("correo").value;
	let dir=document.getElementById("dir").value;
	let tel=document.getElementById("tel").value;
	let rfc=document.getElementById("rfc").value;
	
	if(nom=="" || edad=="" || correo=="" || dir=="" || tel=="" || rfc==""){
		window.alert("Falta llenar un campo...");
	}
	else{
		window.alert("Datos correctos...");
	}
}
function validar_edad(){
	let edad=document.getElementById("edad").value;
	if(isNaN(edad)){
		window.alert("Debes poner un número...");
	}
	else{
		edad=parseInt(edad);
		if(edad<18){
			window.alert("La edad debe ser mayor a 17...");
		}
	}
}
function validar_correo(){
			let correo=document.getElementById("correo").value;
			let exreg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(!(exreg.test(correo))){
				alert("Formato de correo incorrecto");
			}
		}
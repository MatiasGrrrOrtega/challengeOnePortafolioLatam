const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form .info');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	asunto: /^[a-zA-ZÀ-ÿ\s]{1,80}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mensaje:/^[a-zA-Z0-9À-ÿ\s]{1,1500}$/, // Letras y espacios, pueden llevar acentos.
}

let campos = {
	nombre: false,
	correo: false,
    asunto:false,
    mensaje:false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.nombre, e.target, 'name');
		break;
		case "email":
			validarCampo(expresiones.correo, e.target, 'email');
		break;
        case "affair":
			validarCampo(expresiones.asunto, e.target, 'affair');
		break;
        case "message":
			validarCampo(expresiones.mensaje, e.target, 'message');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).classList.remove('info--incorrect');
		document.getElementById(`${campo}`).classList.add('info--correct');
		campos.nombre = true;
        campos.correo = true;
        campos.asunto = true;
        campos.mensaje = true;
	} else {
		document.getElementById(`${campo}`).classList.add('info--incorrect');
		document.getElementById(`${campo}`).classList.add('info--correct');
        campos.nombre = false;
        campos.correo = false;
        campos.asunto = false;
        campos.mensaje = false;
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(campos.nombre && campos.correo && campos.asunto && campos.mensaje ) {
        form.reset();
        let mensaje = document.querySelector('.mensajeEnviado');
        mensaje.style.display = "block";
        setTimeout(()=>{        
            mensaje.style.display = "none";
        },3000);
        
        document.querySelectorAll('.info--correct').forEach((correct)=>{
            correct.classList.remove('info--correct');
        });
    }
});
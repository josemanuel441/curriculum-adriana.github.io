// curriculum.js

// ⚠️ Mostrar mensaje cuando se envía el formulario
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;

    // Verifica si algún campo está vacío
    if (nombre === "" || correo === "" || telefono === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    // Verifica si el teléfono contiene solo números
    if (isNaN(telefono)) {
        alert("El número de teléfono debe contener solo números.");
        return false;
    }

    // Saludo personalizado con funciones de cadena
    var mensaje = "Hola, " + nombre.toUpperCase() + "! 👋\n";
    mensaje += "Tu nombre tiene " + nombre.length + " caracteres.\n";
    mensaje += "Empieza con la letra '" + nombre.charAt(0) + "' y se ve así fragmentado: " + nombre.split("").join(" - ");
    
    alert(mensaje);
    return true;
}

// 🎓 Mostrar certificados dinámicamente usando un arreglo
function mostrarCertificados() {
    var certificados = [
        "Inteligencia Artificial",
        "Google IA",
        "HTML y CSS",
        "JavaScript"
    ];

    certificados.push("Python Básico");
    certificados.unshift("Computación Básica");

    var mensaje = "📜 Certificaciones disponibles:\n\n";

    for (var i = 0; i < certificados.length; i++) {
        mensaje += "- " + certificados[i] + "\n";
    }

    alert(mensaje);
}

// 🧰 Mostrar habilidades con métodos de arreglo
function mostrarHabilidades() {
    var habilidades = ["Python", "Java", "HTML", "CSS"];
    habilidades.push("Resolución de problemas");
    habilidades.reverse();

    var lista = habilidades.join(" ⚙️ ");
    alert("Habilidades técnicas:\n\n" + lista);
}

// 🧮 Calcular edad desde año de nacimiento
function calcularEdad() {
    var anio = prompt("¿En qué año naciste?");
    
    if (isNaN(anio)) {
        alert("⚠️ Ingresa un año válido.");
        return;
    }

    var actual = new Date().getFullYear();
    var edad = actual - anio;

    if (edad <= 0 || edad > 100) {
        alert("⚠️ Año inválido. Verifica.");
    } else {
        alert("Tienes aproximadamente " + edad + " años. 🧠");
    }
}

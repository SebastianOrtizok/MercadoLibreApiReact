// import App from './App.jsx'
const mysql = require("mysql");
 
 
 export function Login () {


  const connection = mysql.createConnection({
    host: "db4free.net",
    user: "sortizdevok",
    password: "esys991996",
    database: "impactotenis",
  });
  
  connection.connect((err) => {
    if (err) {
      console.error("Error al conectar a la base de datos:", err);
      return;
    }
    console.log("Conexión exitosa a la base de datos MySQL desde el frontend");
  
    // Ejemplo: Consulta para seleccionar todos los registros de una tabla llamada 'nombre_de_la_tabla'
    const query = "SELECT * FROM ML";
  
    connection.query(query, (err, results, fields) => {
      if (err) {
        console.error("Error al ejecutar la consulta:", err);
        return;
      }
  
      // Imprimir los resultados
      console.log("Resultados de la consulta:", results);
  
      // Puedes hacer más cosas con los resultados aquí
  
      // Cierra la conexión después de realizar las consultas necesarias
      connection.end();
    });
  });
  
  


// Función para manejar el envío del formulario desde el botón "Registrarse"
function enviarFormulario() {
//   // Obtener los valores del formulario
//   const nombre = document.getElementById("nombre").value;
//   const apellido = document.getElementById("apellido").value;
//   const email = document.getElementById("email").value;
//   const contrasena = document.getElementById("contrasena").value;
//   const confirmarContrasena = document.getElementById(
//     "confirmar_contrasena"
//   ).value;
//   const edad = document.getElementById("edad").value;
//   const genero = document.getElementById("genero").value;

//   // Validar que las contraseñas coincidan
//   if (contrasena !== confirmarContrasena) {
//     alert("Las contraseñas no coinciden. Por favor, inténtalo nuevamente.");
//     return false;
//   }

  // Crear un objeto con los datos ingresados
  // const registro = {
  //   nombre,
  //   apellido,
  //   email,
  //   contrasena,
  //   edad,
  //   genero,
  // };

  // Agregar el objeto al arreglo de registros
  // registro.push(registro);
  
  // window.location.href = "bienvenido.html?nombre=" + encodeURIComponent(nombre);
  // alert(nombre + "  ¡Registro exitoso! Los datos se han almacenado correctamente." );

  // Guardar los datos en localStorage
  // localStorage.setItem("registros", JSON.stringify(registro));

  // Limpiar el formulario después del registro exitoso

  // document.getElementById("registroForm").reset();

//   return false;
// }

// Función para manejar el inicio de sesión desde el botón "Iniciar Sesión"
function iniciarSesion() {
  console.log("iniciando secion")
//   event.preventDefault()
//   console.log(event.target[0].value)
// const email=event.target[0].value;
// const contrasena=event.target[1].value;
// console.log(email + contrasena)



}
  
  // Buscar si existe un registro con el email y la contraseña ingresados
  // const usuarioEncontrado = registro.find(
  //   (registro) => registro.email === email && registro.contrasena === contrasena
  // );

  // if (usuarioEncontrado) {
  //   alert("¡Inicio de sesión exitoso!");
  //   // Redireccionar al usuario a la página de bienvenida (bienvenido.html)
  //   window.location.href = "bienvenido.html";
  //   // <App />
  // } else {
  //   alert(
  //     "Email o contraseña incorrectos. Por favor, intenta nuevamente o regístrate si no tienes una cuenta."
  //   );
  //   // Aquí puedes redireccionar al usuario a la página de registro o realizar otras acciones necesarias
  // }

  // // Retorna "false" para evitar el envío del formulario por defecto
  // return false;

return (
  <>
      <div className="contenedor">
        <h1>Iniciar Sesión</h1>
        <section className="form">
          <form id="loginForm" onSubmit={iniciarSesion}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br />

            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required /><br />

            <input className="btn-enviar" type="submit" value="Iniciar Sesión" />
          </form>
        </section>
      </div>

      <p className="register">¿No tienes una cuenta? <a href="register.html">Regístrate aquí</a>.</p>
    </>
    
)
}}
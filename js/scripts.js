console.log("Hola soy Script.js");

$("#btn_iniciar_sesion").click(function () {
  $("#loginModal").modal("hide");
  //SWEET ALERT
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Login Exitoso",
    text: "¡Bienvenido a SmartBiblio, qué disfrute de su estancia!",
    showConfirmButton: true,
    confirmButtonText: "Cerrar",
    confirmButtonColor: "#dc3545", // rojo
    timer: 2000,
  }).then(() => {
    // al terminar el tiempo cerrar con then
    //cerrar modal
  });
});

$("#btn_registrarse").click(function () {
  $("#registerModal").modal("hide");
  //SWEET ALERT
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Registro Exitoso",
    text: "¡Bienvenido a SmartBiblio, qué disfrute de su estancia!",
    showConfirmButton: true,
    confirmButtonText: "Cerrar",
    confirmButtonColor: "#dc3545",
    timer: 2000,
  }).then(() => {
    // al terminar el tiempo cerrar con then
    //cerrar modal
  });
});

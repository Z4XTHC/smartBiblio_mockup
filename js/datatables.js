// TABLA DE GESTIÓN DE USUARIOS DESDE EL PANEL.
$(document).ready(function () {
  $("#usuariosTable").DataTable({
    lengthMenu: [5, 10, 15, 20],
    language: {
      search: "Buscar: ",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      zeroRecords: "No hay registros",
      infoEmpty: "No hay registros",
      infoFiltered: "(Encontrados _MAX_ de registros)",
      paginate: {
        first: "Primero",
        last: "Último",
        previous: "Anterior",
        next: "Siguiente",
      },
    },
  });

  $("#librosTable").DataTable({
    lengthMenu: [5, 10, 15, 20],
    language: {
      search: "Buscar: ",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      zeroRecords: "No hay registros",
      infoEmpty: "No hay registros",
      infoFiltered: "(Encontrados _MAX_ de registros)",
      paginate: {
        first: "Primero",
        last: "Último",
        previous: "Anterior",
        next: "Siguiente",
      },
    },
  });

  $("#sociosTable").DataTable({
    lengthMenu: [5, 10, 15, 20],
    language: {
      search: "Buscar: ",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      zeroRecords: "No hay registros",
      infoEmpty: "No hay registros",
      infoFiltered: "(Encontrados _MAX_ de registros)",
      paginate: {
        first: "Primero",
        last: "Último",
        previous: "Anterior",
        next: "Siguiente",
      },
    },
  });

  $("#generosTable").DataTable({
    lengthMenu: [5, 10, 15, 20],
    language: {
      search: "Buscar: ",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      zeroRecords: "No hay registros",
      infoEmpty: "No hay registros",
      infoFiltered: "(Encontrados _MAX_ de registros)",
      paginate: {
        first: "Primero",
        last: "Último",
        previous: "Anterior",
        next: "Siguiente",
      },
    },
  });

  $("#reservaTable").DataTable({
    lengthMenu: [5, 10, 15, 20],
    language: {
      search: "Buscar: ",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      zeroRecords: "No hay registros",
      infoEmpty: "No hay registros",
      infoFiltered: "(Encontrados _MAX_ de registros)",
      paginate: {
        first: "Primero",
        last: "Último",
        previous: "Anterior",
        next: "Siguiente",
      },
    },
  });
});

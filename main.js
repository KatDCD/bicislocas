function validateName () {
  /* Traer valores de formulario */
  const name = $("#name").val();

  /* Valido el largo del nombre */
  if (name.lenght > 3 && name.lenght < 8) {
    console.log (name);
  }
  else if {
    alert ("Este campo no puede estar vacío ni ser menor a 3 caracteres.")
  }
  validateLastname ()
}

function validateLastname () {
  /* Traer valores de formulario */
  const lastname = $("#lastname").val();

  /* Valido el largo del nombre */
  if (lastname.lenght > 3) {
    console.log (lastname);
  }
  else if {
    alert ("Este campo no puede estar vacío ni ser menor a 3 caracteres.")
  }

}

function email () {
  /* Traer valores de formulario */
  const email = $("#email").val();

  /* Valido el largo del nombre */
  if (email.lenght > 3) {
    console.log (email);
  }
  else {
    alert ("Este campo no puede estar vacío ni ser menor a 3 caracteres.")
  }
  
}
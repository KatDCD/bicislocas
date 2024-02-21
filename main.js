function validateForm() {
  const name = $("#name").val();
  if (name.length < 3 || name.length < 8) {
    alert("Nombre y apellido no puede ser menor a 3 caracteres ni mayor a 8 caracteres.");
  }
}

//|| lastname, lenght < 3 || lastname.lenght < 8)
// || name.lenght > 8
//const lastname = $("#lastname").val();
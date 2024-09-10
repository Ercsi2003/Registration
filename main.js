import 'bootstrap/dist/css/bootstrap.css'
import './style.css'



document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const speciesInput = document.getElementById("species");
  const ownerInput = document.getElementById("owner");
  const registerForm = document.getElementById("form");

  registerForm.addEventListener("submit", () => {
    const name = nameInput.value;
    const age = ageInput.value;
    const species = speciesInput.value;
    const owner = ownerInput.value;

    checkEmpty(name,age,species,owner);
  })
})

function checkEmpty(name,age,species,owner)  {
  if (name == "") {
    alert("'Name' was not given")
    
  }
  else if (age == "") {
    alert("'Age' was not given")
  }
  else if (species == "") {
    alert("'Species' was not given")
  }
  else if (owner == "") {
    alert("'Owner' was not given")
  }
}

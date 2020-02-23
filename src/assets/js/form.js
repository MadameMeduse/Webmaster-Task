function submitForm() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const phone = document.getElementById("phone").value;
  var phoneReg = /[0-9]{3}-[0-9]{3}-[0-9]{3}/;
  if (validationForm()) {
    // Calling validation function
    document.getElementById("form").action = "success.php"; // Setting form action to "success.php" page
    document.getElementById("form").submit(); // Submitting form
  }

  // Name and Email validation Function
  function validationForm() {
    if (name === "" || phone === "" || surname === "") {
      alert("Please fill all fields.");
      return false;
    } else if (!phone.match(phoneReg)) {
      alert("Invalid phone number");
      return false;
    } else {
      return true;
    }
  }
}

"use strict";

// The purpose of this file is to get contactName data and pass it into the second page.

function getInfo() {
  // Get the value
  var name = document.getElementById("contactName").value;
  var phone = document.getElementById("phone").value;
  var zipCode = document.getElementById("zipCode").value;
  var animalType = document.getElementById("animalType").value;
  // Place it in storage
  localStorage.setItem("infoValue", name);
  localStorage.setItem("infoValue1", phone);
  localStorage.setItem("infoValue2", zipCode);
  localStorage.setItem("infoValue3", animalType);

}

"use strict";

// The purpose of this file is to display the passed data from script_file1.
// Let's get the data from the other file and display it.
document.getElementById("info").innerHTML=localStorage.getItem("infoValue");
document.getElementById("info1").innerHTML=localStorage.getItem("infoValue1");
document.getElementById("info2").innerHTML=localStorage.getItem("infoValue2");
document.getElementById("info3").innerHTML=localStorage.getItem("infoValue3");

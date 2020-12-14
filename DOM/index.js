const variable_a = document.getElementById("text"); //returns a single item
const variable_b = document.getElementsByClassName("another_text"); //returns multiple items
const variable_c = document.getElementsByTagName("p"); //returns multiple items

//the exact same thing at the top, but using querySelectors
const variable_d = document.querySelector("#text");
const variable_e = document.querySelector(".another_text");
const variable_f = document.querySelector("p");

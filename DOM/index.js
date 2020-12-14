/**
 * 
 * 
 * document.getElementById(); //gets one element based on its ID
 * document.getElementsByTagName(); //gets elements based on tagName like h1, p or div
 * document.getElementsByClassName(); // gets elements base on their class names
 * document.querySelector(); // this is a shortand that can be used for any type of syntax
 * document.querySelectorAll();

 */

const variable_a = document.getElementById("text"); //returns single item
const variable_b = document.getElementsByClassName("another_text"); //returns multiple items
const variable_c = document.getElementsByTagName("p"); //returns multiple items

/**
 * a shorthand to use is the document.querySelector() which is the recommended one in this course
 *
 * to get an id with query selector, prefix it with a # (hash)
 * to get a class with query selector, prefix it with . (a dot)
 * to get a tag, just write it with no prefix
 *
 * NOTE: querySelector only returns 1 element, use querySelectorAll to get multiple items
 */

const variable_d = document.querySelector("#text");
const variable_e = document.querySelector(".another_text");
const variable_f = document.querySelector("p");

/**
 * querySelectorAll is just like querySelector but is used to get multiple elements
 */

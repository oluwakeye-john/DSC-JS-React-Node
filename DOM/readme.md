# The DOM

DOM is a popular concept in JavaScript which many have heard and used on time or the other.

The DOM is an acronym of Document Object Model and it is a way JavaScript interacts with your webpage.

A web page is a document and that is what is displayed in our browsers. The Document Object Model (DOM) represents that same document so it can be manipulated by code.
<br />

It represents the page so that programs can change the document structure, style, and content. The DOM represents the document(webpage) as a tree consisting of nodes and objects.

<br />
That way, our JavaScript can connect to the page.
<br /><br />

## Accessing the DOM

<br />

`document.getElementById();` gets one element based on its ID

`document.getElementsByTagName();` gets elements based on tagName like h1, p or div

`document.getElementsByClassName();` gets elements base on their class names

`document.querySelector();` // this is a shortand that can be used for any type of syntax

`document.querySelectorAll();` functions just like querySelector but is used to return multiple items

```js
const variable_a = document.getElementById("text"); //returns single item
const variable_b = document.getElementsByClassName("another_text"); //returns multiple items
const variable_c = document.getElementsByTagName("p"); //returns multiple items
```

A shorthand to use is the document.querySelector() which is the recommended one in this course

- to get an id with query selector, prefix it with a # (hash)

- to get a class with query selector, prefix it with . (a dot)
- to get a tag, just write it with no prefix

NOTE: querySelector only returns 1 element, use querySelectorAll to get multiple items

```js
const variable_d = document.querySelector("#text");
const variable_e = document.querySelector(".another_text");
const variable_f = document.querySelector("p");
```

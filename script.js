"use strict";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.append(el);
}

const form = document.forms.form_message;
const {message} = form;
const errorMessage = document.querySelector(".error-message");
const ul = document.getElementById("list");

form.onsubmit = (event) => {
    event.preventDefault();
    
    if (message.value.trim().length === 0) {
        console.log("Error");
        message.classList.add("error");
        errorMessage.innerHTML = "Message field is required";
        return;
    }

    const li = createNode("li");
    const button = createNode("button");

    li.classList.add("text-message");
    li.innerHTML = message.value;
    button.textContent = "Delete";
    append(ul, li);
    append(li, button);
    form.reset();
};

message.onfocus = () => {
    const isErrorField = message.classList.contains("error");
    
    if (isErrorField) {
        message.classList.remove("error");
        errorMessage.innerHTML = "";
    }
}

ul.addEventListener("click", (event) => {
    const isRemoveButton = event.target.nodeName === "BUTTON";

    if (isRemoveButton) {
        const messageBlock = event.target.closest(".text-message");
        messageBlock.remove();
    } 
});


class item {
    constructor(input,label){
        this.label= label;
        this.input = input;
    }

}
let firstName = new item(document.querySelector(".firstNameInput"), document.querySelector(".firstNameLabel"));
let lastName = new item(document.querySelector(".lastNameInput"),document.querySelector(".lastNameLabel"));
let email = new item (document.querySelector(".emailInput"), document.querySelector(".emailLabel"));
let password = new item(document.querySelector(".passwordInput"), document.querySelector(".passwordLabel"));





let emailRegex = /\w+[@]{1}\w+[.]\w+/;
function checkInputs(){
    

    if(firstName.input.value.length == 0){
        firstName.input.style.border = "solid hsl(0, 100%, 74%) 2px";
        firstName.label.style.visibility = "visible";
        firstName.input.style.backgroundSize = "30px";
    }
    else{
        firstName.input.style.border = "solid rgb(173, 173, 173) 1.5px";
        firstName.label.style.visibility = "hidden";
        firstName.input.style.backgroundSize = "0px";

    }
    if(lastName.input.value.length == 0){
        lastName.input.style.border = "solid hsl(0, 100%, 74%) 2px";
        lastName.label.style.visibility = "visible";
        lastName.input.style.backgroundSize = "30px";
    }
    else{
        lastName.input.style.border = "solid rgb(173, 173, 173) 1.5px";
        lastName.label.style.visibility = "hidden";
        lastName.input.style.backgroundSize = "0px";
    }
    if(emailRegex.test(email.input.value) == false){
        email.input.style.border = "solid hsl(0, 100%, 74%) 2px";
        email.input.placeholder = "email@example.com";
        email.label.style.visibility = "visible";
        email.input.style.backgroundSize = "30px";
    }
    else{
        email.input.style.border = "solid rgb(173, 173, 173) 1.5px";
        email.input.placeholder = "";
        email.label.style.visibility = "hidden";
        email.input.style.backgroundSize = "0px";
    }
    if(password.input.value.length == 0){
        password.input.style.border = "solid hsl(0, 100%, 74%) 2px";
        password.label.style.visibility = "visible";
        password.input.style.backgroundSize = "30px";
    }
    else{
        password.input.style.border = "solid rgb(173, 173, 173) 1.5px";
        password.label.style.visibility = "hidden";
        password.input.style.backgroundSize = "0px";
    }
}


/* 
    VALIDATE EMAIL 
*/

let email = document.querySelector("[type=email]");
let form = document.forms[0];

form.onsubmit = (e) => {
  let regex = /^([^\W]\w+([_|.|-]?\w+)*@\w+[_|.|-]?\w+\.\w{2,})\b/;

  //REMOVE THE ERROR MESSAGE IF EXIST
  document.querySelector(".error") !== null
    ? document.querySelector(".error").remove()
    : 0;
  if (email.value === "" || !email.value.match(regex)) {
    e.preventDefault();
    let spanError = document.createElement("span");
    spanError.classList.add("error", "placeholder-change");

    if (email.value === "") {
      spanError.textContent =
        "Whoops! It looks like you forgot to add your email";
    } else {
      spanError.textContent = "please provide a valid email address";
    }

    email.after(spanError);

    // CHANGE THE BORDER COLOR AND ADD PLACEHOLDER
    email.style["borderColor"] = "#da2f2f";
    email.placeholder = "example@email/com";
  }
};

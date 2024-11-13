const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input6 = document.querySelector(".input6");
const input7 = document.querySelector(".input7");
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
const error5 = document.querySelector(".error5");
const error6 = document.querySelector(".error6");
const button = document.querySelector(".button");
const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

button.addEventListener("click", function (e) {
  e.preventDefault();
  let valid = true;
  const input4 = document.querySelector(".input4").checked;
  const input5 = document.querySelector(".input5").checked;

  if (input1.value === "") {
    error1.classList.remove("hidden");
    input1.classList.add("active");
    valid = false;
  } else {
    error1.classList.add("hidden");
    input1.classList.remove("active");
  }

  if (input2.value === "") {
    error2.classList.remove("hidden");
    input2.classList.add("active");
    valid = false;
  } else {
    error2.classList.add("hidden");
    input2.classList.remove("active");
  }

  if (!pattern.test(input3.value)) {
    error3.classList.remove("hidden");
    input3.classList.add("active");
    valid = false;
  } else {
    error3.classList.add("hidden");
    input3.classList.remove("active");
  }

  if (!input4 && !input5) {
    error4.classList.remove("hidden");
    valid = false;
  } else {
    error4.classList.add("hidden");
  }

  if (input6.value === "") {
    error5.classList.remove("hidden");
    input6.classList.add("active");
    valid = false;
  } else {
    error5.classList.add("hidden");
    input6.classList.remove("active");
  }

  if (!input7.checked) {
    error6.classList.remove("hidden");
    valid = false;
  } else {
    error6.classList.add("hidden");
  }

  if (valid === true) {
    alert(`
          first name: ${input1.value}
          last name: ${input2.value}
          email address: ${input3.value}
          message: ${input6.value}
        
        `);
    window.location.reload();
  }
});

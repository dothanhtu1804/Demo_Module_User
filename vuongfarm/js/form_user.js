if (localStorage.getItem("token") !== null) {
  function hiddenSidebar() {
    document.querySelector(".menu_section").classList.toggle("toggle_link");
  }

  function addActive() {
    let header = document.querySelector(".body_menu_section");
    let btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        console.log(current);
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  }

  // function checkValidate() {
  //   let btn = document.querySelector(".btn_submit");

  //   function func() {

  //   }
  // }

  function dropdown_user() {
    document.getElementById("myDropdown").classList.toggle("show");
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  }

  function logout() {
    window.localStorage.removeItem("token");
    window.location.replace("./login.html");
  }

  function check_form() {
    let first_name = document.forms["user"].first_name.value;
    let last_name = document.forms["user"].last_name.value;
    let email = document.forms["user"].email.value;
    let address = document.forms["user"].address.value;
    let telephone = document.forms["user"].telephone.value;
    let city = document.forms["user"].city.value;

    console.log(first_name, last_name, email, address, telephone, city);
    if (
      typeof first_name === "undefined" ||
      first_name === null ||
      first_name === ""
    ) {
      showError(document.getElementById("first_name"), "Firstname can't be empty");
    } else{
      removeError(document.getElementById("first_name"))
    }

    if (
      typeof last_name === "undefined" ||
      last_name === null ||
      last_name === ""
    ) {
      showError(document.getElementById("last_name"), "Lastname can't be empty");
    }else{
      removeError(document.getElementById("last_name"))
    }

    if (
      typeof email === "undefined" ||
      email === null ||
      email === ""
    ) {
      showError(document.getElementById("email"), "Email can't be empty");
    }else{
      removeError(document.getElementById("email"))
    }

    if (
      typeof address === "undefined" ||
      address === null ||
      address === ""
    ) {
      showError(document.getElementById("address"), "Address can't be empty");
    }else{
      removeError(document.getElementById("address"))
    }

    if (
      typeof telephone === "undefined" ||
      telephone === null ||
      telephone === ""
    ) {
      showError(document.getElementById("telephone"), "Telephone can't be empty");
    }else{
      removeError(document.getElementById("telephone"))
    }

    if (
      typeof city === "undefined" ||
      city === null ||
      city === ""
    ) {
      showError(document.getElementById("city"), "City can't be empty");
    }else{
      removeError(document.getElementById("city"))
    }
  }

  const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.textContent = message;
  };

  const removeError = (input) => {
    const formField = input.parentElement;
    console.log(formField, input);
    formField.classList.remove("error");
    const error = formField.querySelector("small");
    error.textContent = '';
  }
  
} else {
  window.location.replace("./login.html");
}

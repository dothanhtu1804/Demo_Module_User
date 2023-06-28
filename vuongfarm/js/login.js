function login() {
  try {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(function (response) {
        console.log(response);
        if (response.status !== 200) {
          console.log("Lỗi, mã lỗi " + response.status);
          return;
        }
        // parse response data
        response.json().then((data) => {
          if (
            data.token != null ||
            data.token != undefined ||
            data.token != ""
          ) {
            localStorage.setItem("token", data.token);
            window.location.replace("./form_user.html");
          }
        });
      })
      .catch((err) => {
        console.log("Error :-S", err);
      });
  } catch (error) {
    console.log(error);
  }
}

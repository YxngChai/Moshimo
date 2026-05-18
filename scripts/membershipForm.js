const membershipRegister = `
<h1>Moshimo Membership</h1>
<input
            class="form-input"
            type="text"
            name="firstName"
            placeholder="first name"
            required />
          <input
            class="form-input"
            type="text"
            name="lastName"
            placeholder="last name"
            required />
          <input
            class="form-input"
            type="tel"
            name="phone"
            placeholder="phone"
            maxlength="11"
            required />
          <input
            class="form-input"
            type="date"
            id="birthdate"
            min="2008-05-15"
            placeholder="dd/mm/yyyy" />
          <input
            class="form-input"
            type="email"
            name="email"
            placeholder="email"
            required />
          <input
            class="form-input"
            type="password"
            name="password"
            placeholder="password"
            required />
          <div class="login-buttons">
            <button class="login-btn">Log in</button>
            <input
              class="signup-btn"
              type="submit"
              name="Signup"
              value="Signup" />
          </div>
`;

const membershipLogin = `
            <h1>Moshimo Membership</h1>
            <input class="form-input" type="email" name="email" placeholder="email"required/>
          <input class="form-input" type="password" name="password" placeholder="password" required/>
          <div class="login-buttons">
            <input class="login-btn" type="submit" name="login" value="Login" />
            <button class="signup-btn">Sign Up</button> </div>
`;

const correctEmail = "moshimomaster@moshimo.co.uk";
const correctPassword = "moshimoshi";

const form = document.querySelector(".membership-form");

form.innerHTML = membershipLogin;

let loginBtn = document.querySelector(".login-btn");
let signupBtn = document.querySelector(".signup-btn");

form.addEventListener("click", (e) => {
  if (e.target.matches(".login-btn") && e.target.tagName !== "INPUT") {
    form.innerHTML = membershipLogin;
  }
  if (e.target.matches(".signup-btn") && e.target.tagName !== "INPUT") {
    form.innerHTML = membershipRegister;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const userEmail = formData.get("email");
  const userPassword = formData.get("password");

  if (userEmail === correctEmail && userPassword === correctPassword) {
    console.log("Enter Member Area");
  } else {
    const buttons = document.querySelector(".login-buttons");
    const errorMsg = document.querySelector(".error-msg");

    if (!errorMsg) {
      const wrongDetails = buttons.insertAdjacentHTML(
        "beforebegin",
        `<p class="error-msg">incorrect username or password</p>`,
      );
    }
  }
});

function checkingCredentials() {
  console.log("check");
  const submitter = document.querySelector("input[value=Login]");

  console.log(formData);

  const buttons = document.querySelector(".login-buttons");
  const errorMsg = document.querySelector(".error-msg");

  if (!errorMsg) {
    buttons.insertAdjacentHTML(
      "beforebegin",
      `<p class="error-msg">incorrect username or password</p>`,
    );
  }
}

// if (form.querySelector(".login-btn[type='submit']")) {
//   checkingCredentials(username, password);
// }
// if (form.querySelector(".signup-btn[type='submit']")) {
//   registerUser(username, password);
// }

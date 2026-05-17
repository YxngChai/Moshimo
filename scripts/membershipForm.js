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
              value="Sign Up" />
          </div>
`;

const membershipLogin = `
            <h1>Moshimo Membership</h1>
            <input class="form-input" type="email" name="username" placeholder="email"required/>
          <input class="form-input" type="password" name="password" placeholder="password" required/>
          <div class="login-buttons">
            <input class="login-btn" type="submit" name="login" value="Log in" />
            <button class="signup-btn">Sign Up</button> </div>
`;

const form = document.querySelector(".membership-form");

form.innerHTML = membershipLogin;

let loginBtn = document.querySelector(".login-btn");
let signupBtn = document.querySelector(".signup-btn");

form.addEventListener("click", (e) => {
  if (e.target.matches(".login-btn")) {
    if (e.target.tagName === "INPUT") {
      checkingCredentials();
    } else {
      form.innerHTML = membershipLogin;
    }
  }
  if (e.target.matches(".signup-btn")) {
    if (e.target.tagName === "INPUT") {
      checkingCredentials();
    } else {
      form.innerHTML = membershipRegister;
    }
  }
});

function checkingCredentials() {
  console.log("Please wait");
}

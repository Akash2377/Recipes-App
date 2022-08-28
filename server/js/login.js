const checkLogin = setInterval(() => {
  let temp = localStorage.getItem("KeyUserFood");
  if (temp == "true") {
    document.getElementById("LoginBtn").style.display = "none";
    document.getElementById("LogoutBtn").style.display = "block";
    document.getElementById("NameUserP").style.display = "block";
  } else {
    document.getElementById("LoginBtn").style.display = "block";
    document.getElementById("LogoutBtn").style.display = "none";
    document.getElementById("NameUserP").style.display = "none";
  }
}, 1000);
const changeDisplay = () => {
  document.getElementById("signin").style.display = "none";
  document.getElementById("signUp").style.display = "none";
};
const changeDisplayB = () => {
  document.getElementById("signin").style.display = "block";
};
document.getElementById("signinForm").addEventListener("submit", CheckData);
async function CheckData(event) {
  event.preventDefault();
  let numberUser = document.getElementById("numberInput").value;
  try {
    let res = await fetch("http://localhost:3000/user");
    let data = await res.json();
    console.log(data);
    let flag = false;
    data.forEach((element) => {
      if (element.number == numberUser) {
        flag = true;
        document.getElementById("NameUserP").innerText = element.name;
      }
    });
    if (flag) {
      showOTP();
    } else {
      Signuppage();
    }
  } catch (error) {
    console.log(error);
  }
}
const showOTP = () => {
  // alert("OTP :3568");
  document.getElementById("continueOTP").style.display = "none";
  document.getElementById("passwordOTP").style.display = "block";
  document.getElementById("sumbmitUser").style.display = "block";
  let btn = document.getElementById("sumbmitUser");
  document.getElementById("formOTP").addEventListener("submit", submitDataOTP);
};
function submitDataOTP(event) {
  event.preventDefault();
  document.getElementById("LoginBtn").style.display = "none";
  document.getElementById("LogoutBtn").style.display = "block";
  document.getElementById("NameUserP").style.display = "block";
  document.getElementById("passwordOTP").style.display = "none";
  document.getElementById("signin").style.display = "none";
  document.getElementById("sumbmitUser").style.display = "none";
  document.getElementById("continueOTP").style.display = "block";
  localStorage.setItem("KeyUserFood", "true");
}
const Signuppage = () => {
  document.getElementById("signin").style.display = "none";
  document.getElementById("signUp").style.display = "block";
  document
    .getElementById("signUpForm")
    .addEventListener("submit", SaveDataJson);
};
async function SaveDataJson(event) {
  event.preventDefault();
  fetch("http://localhost:3000/user", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("nameUser").value,
      number: document.getElementById("NumberSignup").value,
      email: document.getElementById("emailUser").value,
    }),
    headers: { "content-type": "application/json" },
  });
  document.getElementById("signin").style.display = "block";
  document.getElementById("signUp").style.display = "none";
}
const LogoutFromUser = () => {
  localStorage.setItem("KeyUserFood", "false");
  document.getElementById("LoginBtn").style.display = "block";
  document.getElementById("LogoutBtn").style.display = "none";
  document.getElementById("NameUserP").style.display = "none";
};

let defaultbtn = document.querySelector(".defaultbtn");
let custombtn = document.querySelector(".custombtn");
let custompath = document.querySelector(".custompath");
let path = document.querySelector(".path");

let regex = /[a-zA-Z0-9\.\ \,/;/:\'\"\!\@\#/-/_/+/=]+$/;

custombtn.addEventListener("click", () => {
   defaultbtn.click();
});

defaultbtn.addEventListener("change", () => {
   if (defaultbtn.value != "") {
      custompath.style.display = "block";
   }
   else {
      custompath.style.display = "none";
   }
   path.innerText = defaultbtn.value.match(regex);
});
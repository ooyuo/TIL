// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector("select");
const COUNTRY_LS = "country";

function handleChangedOptions() {
  let country = select.options[select.selectedIndex].text;
  localStorage.setItem(COUNTRY_LS, country);
  console.log(localStorage.getItem(COUNTRY_LS));
}

function init() {
  select.addEventListener("change", handleChangedOptions);
}

init();

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


/*
Nico code
import "./styles.css";

const select = document.querySelector(".js-select");

function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

function loadCountries() {
  const selected = localStorage.getItem("country");
  if (selected) {
    const option = document.querySelector(`option[value="${selected}"]`);
    option.selected = true;
  }
}

loadCountries();
select.addEventListener("change", handleChange);

*/

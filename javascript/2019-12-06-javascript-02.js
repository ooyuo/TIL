import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const dDay = document.querySelector(".dDay");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2019-12-24:00:00:00+0900");
  const now = new Date();
  const thatDay = xmasDay - now;

  const day = Math.floor(thatDay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((thatDay / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((thatDay / (1000 * 60)) % 60);
  const seconds = Math.floor((thatDay / 1000) % 60);

  dDay.innerText = `${updateUnits(day)}d ${updateUnits(hours)}h ${updateUnits(
    minutes
  )}m ${updateUnits(seconds)}s`;
}

function updateUnits(date) {
  return date < 10 ? `0${date}` : date;
}

function init() {
  setInterval(getTime, 1000);
}

init();

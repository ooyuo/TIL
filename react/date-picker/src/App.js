import "./App.css";

class DatePicker {
  monthData = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  #calendarDate = {
    data: "",
    date: 0,
    month: 0,
    year: 0,
  };

  selectedDate = {
    data: "",
    date: 0,
    month: 0,
    year: 0,
  };

  datePickerEl;
  dateInputEl;
  calendarMonthEl;
  montnContentEl;
  nextBtnEl;
  prevBtnEl;
  calendarDatesEl;

  constructor() {
    this.initCalendarDate();
    this.initSelectedDate();
    this.assignElement();
    this.setDateInput();
    this.addEvent();
  }

  initSelectedDate() {
    this.selectedDate = { ...this.#calendarDate };
  }
  initCalendarDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    this.#calendarDate = {
      today,
      year,
      month,
      date,
    };
  }
  assignElement() {
    this.datePickerEl = document.getElementById("date-picker");
    this.dateInputEl = this.datePickerEl.querySelector("#date-input");
    this.calendarEl = this.datePickerEl.querySelector(".calendar");
    this.calendarMonthEl = this.calendarEl.querySelector(".month");
    this.monthContentEl = this.calendarMonthEl.querySelector(".content");
    this.nextBtnEl = this.calendarMonthEl.querySelector("#next");
    this.prevBtnEl = this.calendarMonthEl.querySelector("#prev");
    this.calendarDatesEl = this.calendarEl.querySelector("#dates");
  }
}
new DatePicker();
function App() {
  return (
    <div className="date-picker" id="date-picker">
      <div className="date-input" id="date-input">
        <div className="calendar">
          <div className="month">
            <div className="arrows" id="prev">
              &lt;
            </div>
            <div className="mth" id="content"></div>
            <div className="arrows" id="next">
              &gt;
            </div>
          </div>
          <div className="days">
            <div className="day">SUN</div>
            <div className="day">MON</div>
            <div className="day">TUE</div>
            <div className="day">WED</div>
            <div className="day">THU</div>
            <div className="day">FRI</div>
            <div className="day">SAT</div>
          </div>
          <div className="dates" id="dates"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

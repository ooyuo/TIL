const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

    function getTime() {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        //clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
        //clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
        clockTitle.innerText = `${getTimes(hours)}:${getTimes(minutes)}:${getTimes(seconds)}`;
    } 

    function getTimes(value) {
        let date = `${value < 10 ? `0${value}` : value}`;
        return date;
    }

    function init() {
        getTime();
        setInterval(getTime, 1000);
    }

    init();
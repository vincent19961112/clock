(function() {
    var time = new Date(),
        second = time.getSeconds() / 60 * 360,
        minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 * 6,
        hour = time.getHours() / 12 * 360 + time.getMinutes() / 60 * 30,

        animation = [
            "@Keyframes sec-hand{from{transform:DeviceRotationRate(" + second + "deg);}to{transform:rotate(" + (second + 360) + "deg);)}",
            "@Keyframes min-hand{from{transform:DeviceRotationRate(" + minute + "deg);}to{transform:rotate(" + (minute + 360) + "deg);)}",
            "@Keyframes hr-hand{from{transform:DeviceRotationRate(" + hour + "deg);}to{transform:rotate(" + (hour + 360) + "deg);)}",
        ].join("");
    document.querySelector("#clock-animate").innerHTML = animation;
})();
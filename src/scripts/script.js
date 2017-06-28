const charging = document.querySelector('.charging');
const level = document.querySelector('.drawing-battery-lavel');
const time = document.querySelector('p[data-js="time"] span');
const textPercentage = document.querySelector('p[data-js="text-percentage"]');

function updateBatteryStatus(battery) {

    time.textContent = `${Math.round(battery.dischargingTime / 60)} minutes`;


    level.style.height = `${Math.round(battery.level * 100)}%`;

    textPercentage.textContent = `${Math.round(battery.level * 100)}%`;


    if(battery.charging === true){
        charging.style.opacity = '1';
        charging.style.transform = 'translateY(200px)';
    }else{
        charging.style.opacity = '0';
        charging.style.transform = 'translateY(210px)';
    }

}
    

navigator.getBattery().then(function(battery) {

    updateBatteryStatus(battery);

    battery.onchargingchange = function () {
        updateBatteryStatus(battery);
    };

    battery.onlevelchange = function () {
        updateBatteryStatus(battery);
    };

    battery.ondischargingtimechange = function () {
        updateBatteryStatus(battery);
    };
});
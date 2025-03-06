 // CSS类名：clock
 // 使用：<div id=“clock”></div>
 
 /*
window.onload = () =>
{
    const clockElement = document.getElementById('clock');
    function updateClock() {
        let now = new Date();

        let hours   = String(now.getHours()).padStart(2,'0');
        let minutes = String(now.getMinutes()).padStart(2,'0');  
        let seconds = String(now.getSeconds()).padStart(2,'0');

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        setTimeout(updateClock, 1000);
    }
    updateClock();
};
*/

const clock = document.getElementById("clock");
function updateUnixTime()
{
    const unixTimestamp = Math.floor(Date.now() / 1000);
    clock.textContent = unixTimestamp; // .toLocaleString();
}
updateUnixTime(); setInterval(updateUnixTime, 1000);

// 添加悬浮显示人类可读时间
// clock.title = "UNIX Timestamp (seconds since 1970-01-01 UTC)";

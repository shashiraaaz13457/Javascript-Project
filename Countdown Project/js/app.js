// Making the date Dynamic Now
const endDate = "21 June 2024 06:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
// For Counter
const clock = () => {
    const end = new Date(endDate); // Converting endDate into milliSeconds i.e. end.
    const now = new Date();
    // console.log(end,now);
    const diff = (end - now)/1000; // Give you diff in milliSeconds that's why converting in seconds (dividing it by 1000).

    if(diff < 0) return;

    //Convert it into Days
    const days = Math.floor(diff / 3600/24)  // It's giving me the quotient..
    inputs[0].value = days;

    const hours = Math.floor(diff/3600)%24 // It's giving me the remainder..
    inputs[1].value = hours;

    const minutes = Math.floor(diff/60)%60 // Now here we are again finding the remainder..(diff/60) -> minutes me h and when we modulo it by 60 then we get the remaining minutes
    inputs[2].value = minutes;

    const seconds = Math.floor(diff%60)//Difference is already in seconds so taking modulo with 60 will give the remaining seconds.
    inputs[3].value = seconds;
}
//initial call..
clock();

//Mujhe haar ek second pe call krwana h function ko na ki refresh ho tabhi change ho isliye hame setInterval use krna pdega..

setInterval(
    () => {
        clock() //Clock naam ke function ko call krna h haar ek sec pe..
    },
    1000 //1sec
)
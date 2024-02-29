function displayTime()
{
   let current = new Date();

   let hours = current.getHours();
   let mins = current.getMinutes();
   let sec = current.getSeconds();


   document.getElementById("hrs").value = hours;
   document.getElementById("min").value = mins;
   document.getElementById("sec").value = sec;

}

setInterval(()=>{displayTime()} , 1000 )


const eventDate = "2023 08 18 , 22:15:55" ;
//** program starts here ,  don't change this parts*/
const eventStamp = new Date(eventDate).getTime();
const currentStamp = new Date().getTime() ;
const dateBox = document.querySelectorAll(".clock-fields span");
const titleBox = document.querySelector(".text-box-item h2");
let minusTimes = (eventStamp - currentStamp)/1000 ;
let day , hours , minute , second , countDown;
//**  */
if(minusTimes >= 0){
    titleBox.innerText = `Event will start at " ${eventDate} "` ;
    countDown = setInterval(()=>{
        minusTimes = minusTimes - 1 ;
        calculateTheTime(minusTimes);
    },1000) ;
}else{
    titleBox.innerText = `` ;
    addActiveClass();
}

function calculateTheTime (timeStampInput){
    let timeStamp = timeStampInput ;
     day = timeStamp/(24*60*60);
    if(day >= 1){
        day = Number(Math.floor(day))
        timeStamp = timeStamp - (day*60*60*24) ;
    }else{
        day = 0
    }
     hours = Number(Math.floor(timeStamp/(60*60))) ;
    timeStamp = timeStamp - (60*60*hours) ;
     minute = Number(Math.floor(timeStamp/60)) ;
     second = Number(Math.round(timeStamp % 60)) ;
    const dateArray = [day , hours , minute , second];
    dateArray.forEach((item,index)=>{
        dateBox[index].innerText = item ;
    });

if(day == 0 && hours == 0 && minute == 0 && second == 0){
        clearInterval(countDown);
        addActiveClass();
    }
}

function addActiveClass(){
    dateBox.forEach(
        (item,index) => {
            item.innerText = 0;
            item.parentElement.classList.add("active")
        }
        )
}

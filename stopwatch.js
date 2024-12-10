let timerdisplay=document.querySelector('.timerdisplay');
let stopbtn=document.getElementById('stop');
let startbtn=document.getElementById('start');
let resetbtn=document.getElementById('reset');


let msec = 00;
let secs = 00;
let mins = 00;

let timerid=null;

startbtn.addEventListener('click',function(){
      if(timerid !== null){
        clearInterval(timerid);
      }
     timerid = setInterval(startimer , 5);
});

stopbtn.addEventListener('click',function(){
    clearInterval(timerid);
});

resetbtn.addEventListener('click',function(){
    clearInterval(timerid);
    timerdisplay.innerHTML=` 00:00:00 `;
    msec = secs= min = 00;
});

function startimer(){
     msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs == 60){
            secs=0;
            mins++;

        }
    }
    
    let msecstr= msec < 10 ? `0${msec}` : msec;
    let secsstr= secs < 10 ? `0${secs}` : secs;
    let minstr= mins < 10 ? `0${mins}` : mins;

       timerdisplay.innerHTML=`${minstr}:${secsstr}:${msecstr}`;
     


//    if( msec<10){
//      str=`0${msec}`;
//    }
// else{
//   str=msec;
// }

}


function makeBubble(){
   let clutter = "";
   for ( let i = 1; i <= 168; i++){
      let random = Math.floor(Math.random() * 10)
      clutter += `<div class="bubble">${random}</div>`;
   }
   document.querySelector(".panel-bottom").innerHTML = clutter;
}

function runTime(){
   let timer = 60;
   let timeInterval = setInterval(function(){
      if(timer>0){
         timer--;
         document.getElementById('timer').textContent = timer;
      }else{
         clearInterval(timeInterval);
      }
   },1000)
}

function getNewHit(){
   let randomHit = Math.floor(Math.random() * 10);
   document.querySelector('#hit').textContent = randomHit;
}

function increaseScore (){
   let score = 2;
   score += 10;
   document.querySelector('#score').textContent = score;
}

increaseScore();
getNewHit();
runTime();
makeBubble();














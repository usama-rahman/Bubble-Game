let randomHit ;
let timer = 50;
let score = 0;

function makeBubble(){
   var clutter = "";
   for ( let i = 1; i <= 189; i++){
      let random = Math.floor(Math.random() * 10)
      clutter += `<div class="bubble">${random}</div>`;
   }
   document.querySelector(".panel-bottom").innerHTML = clutter;
}

// runtime

function runTime(){
   let timeInterval = setInterval(function(){
      if(timer>0){
         timer--;
         document.getElementById('timer').textContent = timer;
      }else{
         clearInterval(timeInterval);
         document.querySelector(".panel-bottom").innerHTML = `<h1>Game Over</h1>`;
      }
   },1000)
}

// getNewHit

function getNewHit(){
   randomHit = Math.floor(Math.random() * 10);
   document.querySelector('#hit').textContent = randomHit;
}

// increaseScore

function increaseScore (){
   score += 10;
   document.querySelector('#score').textContent = score;
}

const panelBottom = document.querySelector(".panel-bottom");

panelBottom.addEventListener('click',function(det){
   const clickedNum = Number(det.target.textContent);
   if(randomHit === clickedNum){
      increaseScore();  
      getNewHit();
      makeBubble(); 
   }
})

getNewHit();
makeBubble(); 
runTime();














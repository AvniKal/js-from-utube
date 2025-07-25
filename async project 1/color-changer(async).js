// generate a random colour

const randomColor= function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]; 
    }
    return color;
}

let intervalID;
const startChangingColor = function(){
    if(!intervalID){
      intervalID=setInterval(function(){
           document.body.style.backgroundColor=randomColor();
      },1000)   }
      
}

const stopChangingColor= function(){
      clearInterval(intervalID)
      intervalID=null;
      
}



document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)
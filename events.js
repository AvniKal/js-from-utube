document.getElementById('owl').onclick=function(){
    alert("owl clicked")
}

// attachEvent()
// jOuery- on


document.getElementById('owl').addEventListener('click',function(){
    alert("owl clicked again")
})

document.getElementById('owl').addEventListener('click',function(e){
    console.log(e)    // pointer event
},false) // event public
// type, timestamp , defaultPrevented
// target. toElement , srcElement , currrentTarget,
// clientX. , clientY , screenX , screenY
// altkey, ctrlkey, shiftkey , keyCode

document.getElementById('owl').addEventListener('click',function(e){
    console.log(e)    // pointer event
},true)     // event capturing
// event propogation 


document.getElementById('.images').addEventListener('click',function(e){
    console.log("clicked inside the ul")  
},false)

document.getElementById('.images').addEventListener('click',function(e){
    console.log("owl clicked")    
},false)

// public propogation m inside sei outside hota h
// which is called bubbling
// owl clicked
// clicked inside the ul

document.getElementById('.images').addEventListener('click',function(e){
    console.log("clicked inside the ul")  
},true)

document.getElementById('.images').addEventListener('click',function(e){
    console.log("owl clicked")    
},true)
// capturing mei outside to inside
// clicked inside the ul
// owl clicked



document.getElementById('.images').addEventListener('click',function(e){
    console.log("clicked inside the ul")  
},false)

document.getElementById('.images').addEventListener('click',function(e){
    console.log("owl clicked") 
    e.stopPropagation() // to stop bubbling  
},false)
// output
// owl clicked
// uske upar propagate nhi hoga

// false is default

document.getElementById('google').addEventListener('click',function(e){
     console.log("google clicked")
     e.preventDefault();  // ab googlw web page nhi khulega
},false)







document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    let removeIt=e.target.parentNode
    removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt)

    if(e.target.tagName=='IMG'){
        console.log(e.target.id);
        let removeIT=e.target.parentNode;
        removeIT.remove();
    }
})




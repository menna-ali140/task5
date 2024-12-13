 
 /*document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#red").onclick=function(){
        document.querySelector("#result").style.color="red";
    }
    document.querySelector("#blue").onclick=function(){
        document.querySelector("#result").style.color="blue";
    }
    document.querySelector("#green").onclick=function(){
        document.querySelector("#result").style.color="green";
    }
})
    */
document.addEventListener("DOMContentLoaded",function(){

document.querySelectorAll("button").forEach(function(menna){
    menna.onclick=function(event){
        document.querySelector("#result").style.color=event.target.id;
    }
})



})

var tot = document.getElementById("total");
var mnt = document.getElementsByClassName("montant");
var del=document.getElementById("delete");
var childs= document.getElementsByClassName("card");

var mnt1=document.getElementById("mnt1");
var mnt2=document.getElementById("mnt2");
var mnt3=document.getElementById("mnt3");

function remove(){
    for (let i = 0; i <= childs.length; i++) {
        if(mnt.innerText>0 && tot.innerText>0){
        tot.innerHTML=parseInt(tot.innerHTML)- parseInt(mnt.innerText);}
       return childs[i].remove();
       
    }
}
var qte1=document.getElementById("qte1");
var qte2=document.getElementById("qte2");
var qte3=document.getElementById("qte3");

var mnt1=document.getElementById("mnt1");
var mnt2=document.getElementById("mnt2");
var mnt3=document.getElementById("mnt3");

var inc= document.getElementById("incriment");
var dec= document.getElementById("decriment");
var tot=document.getElementById("total");

inc.addEventListener("click", incrimenter1());
dec.addEventListener("click", decrimenter1());
inc.addEventListener("click", incrimenter2());
dec.addEventListener("click", decrimenter2());
inc.addEventListener("click", incrimenter3());
dec.addEventListener("click", decrimenter3());

function incrimenter1(){
    qte1.innerHTML=parseInt(qte1.innerHTML)+1;
    mnt1.innerHTML= parseInt(mnt1.innerHTML)+250;
    tot.innerHTML=parseInt(tot.innerHTML)+250;
}
function incrimenter2(){
    qte2.innerHTML=parseInt(qte2.innerHTML)+1;
    mnt2.innerHTML= parseInt(mnt2.innerHTML)+250;
    tot.innerHTML=parseInt(tot.innerHTML)+250;

}
function incrimenter3(){
    qte3.innerHTML=parseInt(qte3.innerHTML)+1;
    mnt3.innerHTML= parseInt(mnt3.innerHTML)+250;
    tot.innerHTML=parseInt(tot.innerHTML)+250;

}
function decrimenter1() {
    
    if(mnt1.innerHTML>0 && tot.innerText>0){
        qte1.innerHTML= parseInt(qte1.innerHTML)-1;
         mnt1.innerHTML=parseInt(mnt1.innerHTML)-250 ;
        tot.innerHTML= parseInt (tot.innerHTML)-250;
    }
     else 
        {
            return mnt1.innerHTML; 
        }
    
}
function decrimenter2() {
    
    if(mnt2.innerHTML>0 && tot.innerText>0){
        qte2.innerHTML= parseInt(qte2.innerHTML)-1;
         mnt2.innerHTML=parseInt(mnt2.innerHTML)-250 ;
        tot.innerHTML= parseInt (tot.innerHTML)-250;
    }
     else 
        {
            return mnt2.innerHTML; 
        }
    
}
function decrimenter3() {
    
    if(mnt3.innerHTML>0 && tot.innerText>0){
        qte3.innerHTML= parseInt(qte3.innerHTML)-1;
         mnt3.innerHTML=parseInt(mnt3.innerHTML)-250 ;
        tot.innerHTML= parseInt (tot.innerHTML)-250;
    }
     else 
        {
            return mnt3.innerHTML; 
        }
    
}
var heart=document.getElementById("heart");
heart.addEventListener("click", changecolor());
function changecolor(heart) {
    if(heart.style.color === "red"){
        return  heart.style.color="black";
    }
     else 
        {
            return heart.style.color ="red"; 
        }
    
}

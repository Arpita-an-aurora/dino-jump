let scored=0;
let cross=true;
audi= new Audio ('jumping.mp3');
ov= new Audio('dinosound.wav');
document.onkeydown= function(e) {
    // console.log(e.key);
    if (e.key=="ArrowUp"){
        dino=document.querySelector('.dino');
        dino.classList.add('dinoAni');
        
        audi.play();
        setTimeout(()=>{
            dino.classList.remove('dinoAni');
            audi.pause();
        },1000);
    }   
    
    else if (e.key=="ArrowLeft"){
        dino=document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.transform="scaleX(-1)";
        dino.style.left=dinoX-112+"px";
    }   
    else if (e.key=="ArrowRight"){
        dino=document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.transform="scaleX(1)";
        dino.style.left=dinoX+112+"px";
    }   
}

setInterval(()=>{
    dino=document.querySelector('.dino');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(oy-dy);
    console.log(offsetX,offsetY);
    if (offsetX<140 && offsetY<90){
        cross=false;
        
        gameover=document.querySelector('.over');
        gameover.style.visibility="visible";
        obstacle=document.querySelector(".obstacle");
        obstacle.classList.remove("obsAni");
        if (gameover.style.visibility=="visible"){
            audi.pause();
            ov.play();
        }
        

    }
    else if(offsetX<145 && cross){
        score=document.querySelector(".score");
        scored+=1;
        score.innerHTML="Your Score : "+scored;
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=anidur - 0.2;
            obstacle.style.animationDuration=newDur+'s';
        },1000);
    }
},100);


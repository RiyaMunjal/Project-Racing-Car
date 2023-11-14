var bluecar=document.getElementById("bluecar");
var racingcar=document.getElementById("racingcar");
var game=document.getElementById("game");
var score=document.getElementById("score");
var result=document.getElementById("result");
var jumpsound=document.getElementById("jumpsound");
var btn=document.getElementById("btn");
var carcollidesound=document.getElementById("carcollidesound");

var count=0;

bluecar.addEventListener("animationiteration", function(){
    var random=((Math.floor(Math.random()*3) ) *130);
    bluecar.style.left=random+"px";
    count++;
});


window.addEventListener("keydown", function(e){
    if(e.keyCode===39){

    var leftval=parseInt(window.getComputedStyle(racingcar).getPropertyValue("left"));
    if(leftval<260) {racingcar.style.left=(leftval+130)+"px";
    jumpsound.play();}
    }

    if(e.keyCode===37){

        var leftval=parseInt(window.getComputedStyle(racingcar).getPropertyValue("left"));
        if(leftval>0){ racingcar.style.left=(leftval-130)+"px";
        jumpsound.play();}
    }

    }
)
//gameover

setInterval(function gameover(){
    var bluecarleft=parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var bluecartop=parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var racingcarleft=parseInt(window.getComputedStyle(racingcar).getPropertyValue("left"));
    if(bluecarleft===racingcarleft && bluecartop>250 && bluecartop<450){
        carcollidesound.play();
        game.style.display="none";
        result.style.display="block";
        score.innerHTML=`score : ${count}`
        
        count=0;
    }
}, 10);



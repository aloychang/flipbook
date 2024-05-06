window.onload=function(){
    changeSpan();
}
var arr=[
    "我能从一千个人中，听到你的脚步声，因为那九百九十九个人的脚步是踏在地上，而你的脚步是踏在我的心上。",
    "人世间有百媚千红，惟独你是我情之所钟。",
    "美能激发人的感情，爱情净化人的心灵。",
    "迎着阳光开放的花朵才美丽，伴着革命理想的爱情才甜蜜。",
    "爱情就像两个拉橡皮筋的人，受伤的总是不愿放手的那一个！",
    "不要让自己被三件事所控制：过去，别人和金钱。",
    "只有你不想放的，没有你放不下的。",
    "我拉着你的手向左走，而你却执意要向右。",
    "当你真正去做些什么的时候，往往也是很多事都无法回头的时候。",
    "想遗忘那些在时光里褪色变成空白的思念，让它们随着空气消失在天地之间。"];
function changeSpan(){
    // 0-9随机数
    var randNum =  Math.floor(Math.random() * 10);
    console.log(randNum);
    var obj=document.getElementById("messSpan");
    obj.className="myfont animate__animated animate__zoomInLeft animate__delay-2s";
    obj.innerHTML=arr[randNum];
    
    setTimeout(function(){
        changeSpanClose();
    },6000);

    setTimeout(function(){
        changeSpan();
    },8000);
}

function changeSpanClose(){
    var obj=document.getElementById("messSpan");
    obj.className="myfont animate__animated animate__flipOutX";
    
    
    setTimeout(function(){
        obj.innerHTML="";
    },1000);

}
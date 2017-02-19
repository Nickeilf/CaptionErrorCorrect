//global var
window.URL = window.URL || window.webkitURL;
var ANIMATION_TIME = 200;

var videoFileURL;
var captionFileURL;
var logFileURL;

//select button function
function selectFile(key){
    var text = key+"Text";
    var choser = key+"Source";
    var file = document.getElementById(choser).files[0].name;
    document.getElementById(text).value = file;
}

//submit button function
function submitFile(){
    videoFileURL = window.URL.createObjectURL(document.getElementById('videoSource').files[0]);
    captionFileURL = window.URL.createObjectURL(document.getElementById('captionSource').files[0]);
    logFileURL = window.URL.createObjectURL(document.getElementById('logSource').files[0]);
    
    if(videoFileURL==""||captionFileURL==""||logFileURL==""){
        alert("未选择完成");
    }else{
        switchDisplay("#selector","#checker");
    }
}

//using class/ID to switch display of this two obj
function switchDisplay(outObj,inObj){
    $(outObj).fadeOut(ANIMATION_TIME);
    checkerInit();
    setTimeout(function(){$(inObj).fadeIn(ANIMATION_TIME)},ANIMATION_TIME);        
}

//init checker
function checkerInit(){
    var videoBlock = document.getElementById("targetVideo");
    videoBlock.src=videoFileURL;
    var imgBlock = document.getElementById("caption");
    imgBlock.src=captionFileURL;
    document.getElementById("videoTitle").innerHTML = document.getElementById("videoText").value;
    document.getElementById("captionTitle").innerHTML = document.getElementById("captionText").value;
    document.getElementById("logTitle").innerHTML = document.getElementById("logText").value;
    readCaption();
    readFile();
}

//reset button function
function reset() {
    switchDisplay("#checker","#selector");
    cleanVar();
}


//reset global var
function cleanVar(){
    
}
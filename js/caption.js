/*
全局变量
*/
window.URL = window.URL || window.webkitURL;

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
        $("#selector").fadeOut(300);
        checkerInit();
        setTimeout(function(){$("#checker").fadeIn(300)},300);
    }
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
}

//reset button function
function reset() {
    $("#checker").fadeIn(300);
    setTimeout(function(){$("#selector").fadeOut(300)},300);
    cleanVar();
}


/*
        重设全局变量
*/
function cleanVar(){
    
}
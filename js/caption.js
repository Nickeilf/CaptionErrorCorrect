/*
全局变量
*/
window.URL = window.URL || window.webkitURL;

var videoFileURL;
var captionFileURL;
var logFileURL;

function selectFile(key){
    var text = key+"Text";
    var choser = key+"Source";
    var file = document.getElementById(choser).files[0].name;
    document.getElementById(text).value = file;
}

function submitFile(){
    videoFileURL = window.URL.createObjectURL(document.getElementById('videoSource').files[0]);
    captionFileURL = window.URL.createObjectURL(document.getElementById('captionSource').files[0]);
    logFileURL = window.URL.createObjectURL(document.getElementById('logSource').files[0]);
    
    if(videoFileURL==""||captionFileURL==""||logFileURL==""){
        alert("未选择完成");
    }else{
        $("#selector").fadeOut(300);
        var videoBlock = document.getElementById("targetVideo");
        videoBlock.src=videoFileURL;
        videoBlock.onload = function(){
            window.URL.revokeObjectURL(this.src);
        };
        var imgBlock = document.getElementById("caption");
        imgBlock.src=captionFileURL;
        imgBlock.onload = function(){
            window.URL.revokeObjectURL(this.src);
        }
        setTimeout(function(){$("#checker").fadeIn(300)},300);
    }
}

function reset() {
    $("#checker").fadeIn(300);
    setTimeout(function(){$("#selector").fadeOut(300)},300);
    /*
        重设全局变量
    */
}
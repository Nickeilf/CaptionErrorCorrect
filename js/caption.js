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
    if(outObj!="#checker"){
    checkerInit();
}
    setTimeout(function(){$(inObj).fadeIn(ANIMATION_TIME)},ANIMATION_TIME);        
}

//init checker
function checkerInit(){
    //info init
    var videoBlock = document.getElementById("targetVideo");
    videoBlock.src=videoFileURL;
    var imgBlock = document.getElementById("caption");
    imgBlock.src=captionFileURL;
    document.getElementById("videoTitle").innerHTML = document.getElementById("videoText").value;
    document.getElementById("captionTitle").innerHTML = document.getElementById("captionText").value;
    document.getElementById("logTitle").innerHTML = document.getElementById("logText").value;
    readCaption();
    readFile();
    var array = getLog();
    for(var i=0;i<array.length;i++){
        var newRow = document.createElement("tr");
        newRow.innerHTML = $("#row-exmp").html();
        newRow.onmouseover = rowHover(this);
        newRow.onmouseout = rowOut(this);
        $("#log-table").append(newRow);
//        array[i][0]
    }
}


//row hover effect
function rowHover(obj){
    $(obj).find(".time").css("display","none");
    $(obj).find(".edit").css("display","inline");
    $(obj).find(".jump").css("display","inline");
}

function rowOut(obj){
    $(obj).find(".time").css("display","inline");
    $(obj).find(".edit").css("display","none");   
    $(obj).find(".jump").css("display","none");
}

//reset button function
function reset() {
    switchDisplay("#checker","#selector");
    cleanVar();
}


//reset global var
function cleanVar(){
    
}
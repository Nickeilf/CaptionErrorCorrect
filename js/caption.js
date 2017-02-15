function selectFile(key){
    var text = key+"Text";
    var choser = key+"Source";
    document.getElementById(text).value = document.getElementById(choser).value;
}

function submitFile(){
    var video = document.getElementById("videoText").value;
    var caption = document.getElementById("captionText").value;
    var log = document.getElementById("logText").value;
    
    
    if(log==""||caption==""||log==""){
        alert("未选择完成");
    }else{
    $("#selector").fadeOut(300);
    setTimeout(function(){$("#checker").fadeIn(300)},300);
    }
}
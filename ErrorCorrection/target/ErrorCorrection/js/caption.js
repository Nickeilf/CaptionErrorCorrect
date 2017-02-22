//global var
window.URL = window.URL || window.webkitURL;
var ANIMATION_TIME = 200;

var videoFileURL;
var captionFileURL;
var logFileURL;
var nowEdit;
<<<<<<< Updated upstream

//select button function
function selectFile(key){
    var text = key+"Text";
    var choser = key+"Source";
=======
var array;

//select button function
function selectFile(key) {
    var text = key + "Text";
    var choser = key + "Source";
>>>>>>> Stashed changes
    var file = document.getElementById(choser).files[0].name;
    document.getElementById(text).value = file;
}

//submit button function
<<<<<<< Updated upstream
function submitFile(){
    videoFileURL = window.URL.createObjectURL(document.getElementById('videoSource').files[0]);
    captionFileURL = window.URL.createObjectURL(document.getElementById('captionSource').files[0]);
    logFileURL = window.URL.createObjectURL(document.getElementById('logSource').files[0]);
    var caption = $("#captionSource").val();
    var log = $("#logSource").val();

    alert(0);
    $('form').ajaxSubmit({
        type:"post",
        url:"upload",
=======
function submitFile() {
    videoFileURL = window.URL.createObjectURL(document.getElementById('videoSource').files[0]);
    captionFileURL = window.URL.createObjectURL(document.getElementById('captionSource').files[0]);
    logFileURL = window.URL.createObjectURL(document.getElementById('logSource').files[0]);
    var caption = $('#captionSource').val();
    var log = $('#logSource').val();

    $('#upload').ajaxSubmit({
        type:"post",
        url:"/upload",
>>>>>>> Stashed changes
        async: false,
        data: {
            "caption":caption,
            "log":log
<<<<<<< Updated upstream

        },
        success:function(result){
            alert(result);
=======
        },
        success:function(result){
            alert(0);
            array = result;
>>>>>>> Stashed changes
        },
        error:function () {
            alert("wrong");
        }
    });
<<<<<<< Updated upstream
    alert(1);

    
    if(videoFileURL==""||captionFileURL==""||logFileURL==""){
        alert("未选择完成");
    }else{
        window.onbeforeunload = function(event) { return confirm("您还没有保存操作，确定离开吗？"); };
        switchDisplay("#selector","#checker");
=======

    if (videoFileURL == "" || captionFileURL == "" || logFileURL == "") {
        alert("未选择完成");
    } else {
        window.onbeforeunload = function (event) {
            return confirm("您还没有保存操作，确定离开吗？");
        };
        switchDisplay("#selector", "#checker");
>>>>>>> Stashed changes
    }
}

//using class/ID to switch display of this two obj
<<<<<<< Updated upstream
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
=======
function switchDisplay(outObj, inObj) {
    $(outObj).fadeOut(ANIMATION_TIME);
    if (outObj != "#checker") {
        checkerInit();
    }
    setTimeout(function () {
        $(inObj).fadeIn(ANIMATION_TIME)
    }, ANIMATION_TIME);
}

//init checker
function checkerInit() {
    //info init
    var videoBlock = document.getElementById("targetVideo");
    videoBlock.src = videoFileURL;
    var imgBlock = document.getElementById("caption");
    imgBlock.src = captionFileURL;
>>>>>>> Stashed changes
    document.getElementById("videoTitle").innerHTML = document.getElementById("videoText").value;
    document.getElementById("captionTitle").innerHTML = document.getElementById("captionText").value;
    document.getElementById("logTitle").innerHTML = document.getElementById("logText").value;

<<<<<<< Updated upstream
    var array = [["0.02","我是一条大海豚","大海豚","75%"],["100.02","我是一条大海豚","我是","75%"],["120.02","我是一条大海豚","海豚","75%"],["60.02","aaabbaa","bb","75%"]];
    // readFile();
    // readCaption();
    //
    // var array = getLog();

    for(var i=0;i<array.length;i++){
        var newRow = document.createElement("tr");
        newRow.innerHTML = $("#row-exmp").html();
        newRow.onmouseover = function(){rowHover(this);};
        newRow.onmouseout = function(){rowOut(this);};
        newRow.className = "log-row";
        newRow.id = i;
        
        //time
        var itg = Math.round(array[i][0]);
        var time;
        if(itg%60 < 10){
            time = (itg/60).toFixed(0) + ":0" + itg%60;
        }else{
            time = (itg/60).toFixed(0) + ":" + itg%60;
        }
        newRow.getElementsByClassName("time")[0].innerHTML = time;
        
        //content
        var highLight = array[i][2];
        var nonehighLight = array[i][1].split(highLight);
        newRow.getElementsByClassName("log-content")[0].innerHTML = nonehighLight[0]+"<span class='mark'>" + highLight + "</span>" + nonehighLight[1];
        
=======
    for (var i = 0; i < array.length; i++) {
        var newRow = document.createElement("tr");
        newRow.innerHTML = $("#row-exmp").html();
        newRow.onmouseover = function () {
            rowHover(this);
        };
        newRow.onmouseout = function () {
            rowOut(this);
        };
        newRow.className = "log-row";
        newRow.id = i;

        //time
        var itg = Math.round(array[i][0]);
        var time;
        if (itg % 60 < 10) {
            time = (itg / 60).toFixed(0) + ":0" + itg % 60;
        } else {
            time = (itg / 60).toFixed(0) + ":" + itg % 60;
        }
        newRow.getElementsByClassName("time")[0].innerHTML = time;

        // array=[["2.00","aabbaa","bb","75%"]];

        //content
        var highLight = array[i][2];
        var nonehighLight = array[i][1].split(highLight);
        newRow.getElementsByClassName("log-content")[0].innerHTML = nonehighLight[0] + "<span class='mark'>" + highLight + "</span>" + nonehighLight[1];

>>>>>>> Stashed changes
        //ratio
        newRow.getElementsByClassName("ratio")[0].innerHTML = array[i][3];
        $("#log-table").append(newRow);
    }
}


//row hover effect
<<<<<<< Updated upstream
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

function jumpTo(obj){
    var video = document.getElementById("targetVideo");
    var time = obj.previousSibling.innerHTML;    
    var timeArray = time.split(":");
    var min = parseInt(timeArray[0]*60);
    var sec = parseInt(timeArray[1]);
    video.currentTime = min+sec;
    video.play();
}

function closeModal(){
=======
function rowHover(obj) {
    $(obj).find(".time").css("display", "none");
    $(obj).find(".edit").css("display", "inline");
    $(obj).find(".jump").css("display", "inline");
}

function rowOut(obj) {
    $(obj).find(".time").css("display", "inline");
    $(obj).find(".edit").css("display", "none");
    $(obj).find(".jump").css("display", "none");
}

function jumpTo(obj) {
    var video = document.getElementById("targetVideo");
    var time = obj.previousSibling.innerHTML;
    var timeArray = time.split(":");
    var min = parseInt(timeArray[0] * 60);
    var sec = parseInt(timeArray[1]);
    video.currentTime = min + sec;
    video.play();
}

function closeModal() {
>>>>>>> Stashed changes
    $("#editModal").fadeOut(ANIMATION_TIME);
    $("#editTextfield").val("");
}

<<<<<<< Updated upstream
function editModal(obj){
    var caption = obj.parentNode.parentNode.getElementsByClassName("log-content")[0].innerHTML;
    if(caption.indexOf("</span>") != -1){
        
    var plainText = caption.split("<span class=\"mark\">");
    var secondText = plainText[1].split("</span>");
    plainText[1] = secondText[0];
    plainText[2] = secondText[1];
    
    document.getElementById("editTextfield").value = plainText[0]+plainText[1]+plainText[2];
    }else{
        document.getElementById("editTextfield").value = caption;
    }
    
=======
function editModal(obj) {
    var caption = obj.parentNode.parentNode.getElementsByClassName("log-content")[0].innerHTML;
    if (caption.indexOf("</span>") != -1) {

        var plainText = caption.split("<span class=\"mark\">");
        var secondText = plainText[1].split("</span>");
        plainText[1] = secondText[0];
        plainText[2] = secondText[1];

        document.getElementById("editTextfield").value = plainText[0] + plainText[1] + plainText[2];
    } else {
        document.getElementById("editTextfield").value = caption;
    }

>>>>>>> Stashed changes
    $("#editModal").fadeIn(ANIMATION_TIME);
    nowEdit = obj.parentNode.parentNode.id;
}

<<<<<<< Updated upstream
function modalSave(){
    document.getElementById(nowEdit).getElementsByClassName("log-content")[0].innerHTML = document.getElementById("editTextfield").value;
    closeModal();
}

function saveAll(){
    
=======
function modalSave() {
    var newContent = document.getElementById("editTextfield").value;
    document.getElementById(nowEdit).getElementsByClassName("log-content")[0].innerHTML = newContent;
    array[nowEdit][1] = newContent;
    closeModal();
}

function saveAll() {
    //后端存好文件，传文件名，设置a标签内容
    var fileName = $("#captionTitle").html();

    $.ajax({
       type:"post",
        async:false,
        data:{
            "fileName": fileName
        },
        success:function (result) {
            //设置a标签的href和download属性
            document.getElementById("saveAs").click();
        },
        error:function () {
            alert("保存文件失败");
        }
    });

}

function cancel(obj) {
    $(obj).parent().parent().fadeOut(ANIMATION_TIME);
>>>>>>> Stashed changes
}

//reset button function
function reset() {
<<<<<<< Updated upstream
    window.onbeforeunload = function(event) {};
    switchDisplay("#checker","#selector");
=======
    window.onbeforeunload = function (event) {
    };
    switchDisplay("#checker", "#selector");
>>>>>>> Stashed changes
    cleanVar();
}


//reset global var
<<<<<<< Updated upstream
function cleanVar(){
    
=======
function cleanVar() {

>>>>>>> Stashed changes
}

//global var
window.URL = window.URL || window.webkitURL;
var ANIMATION_TIME = 200;

var videoFileURL;
var captionFileURL;
var logFileURL;
var nowEdit;

//select button function
function selectFile(key) {
    var text = key + "Text";
    var choser = key + "Source";
    var file = document.getElementById(choser).files[0].name;
    document.getElementById(text).value = file;
}

//submit button function
function submitFile() {
    videoFileURL = window.URL.createObjectURL(document.getElementById('videoSource').files[0]);
    captionFileURL = window.URL.createObjectURL(document.getElementById('captionSource').files[0]);
    logFileURL = window.URL.createObjectURL(document.getElementById('logSource').files[0]);
    var caption = $('#captionSource').val();
    var log = $('#logSource').val();
    alert(caption);


    // alert(typeof caption);

    $('#upload').ajaxSubmit({
        type:"post",
        url:"/upload",
        async: false,
        data: {
            "caption":caption,
            "log":log
        },
        success:function(result){
            alert(result);
        },
        error:function () {
            alert("wrong");
        }
    });

    if (videoFileURL == "" || captionFileURL == "" || logFileURL == "") {
        alert("未选择完成");
    } else {
        window.onbeforeunload = function (event) {
            return confirm("您还没有保存操作，确定离开吗？");
        };
        switchDisplay("#selector", "#checker");
    }
}

//using class/ID to switch display of this two obj
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
    document.getElementById("videoTitle").innerHTML = document.getElementById("videoText").value;
    document.getElementById("captionTitle").innerHTML = document.getElementById("captionText").value;
    document.getElementById("logTitle").innerHTML = document.getElementById("logText").value;

    var array = [["0.02", "我是一条大海豚", "大海豚", "75%"], ["100.02", "我是一条大海豚", "我是", "75%"], ["120.02", "我是一条大海豚", "海豚", "75%"], ["60.02", "aaabbaa", "bb", "75%"]];
    // readFile();
    // readCaption();
    //
    // var array = getLog();

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

        //content
        var highLight = array[i][2];
        var nonehighLight = array[i][1].split(highLight);
        newRow.getElementsByClassName("log-content")[0].innerHTML = nonehighLight[0] + "<span class='mark'>" + highLight + "</span>" + nonehighLight[1];

        //ratio
        newRow.getElementsByClassName("ratio")[0].innerHTML = array[i][3];
        $("#log-table").append(newRow);
    }
}


//row hover effect
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
    $("#editModal").fadeOut(ANIMATION_TIME);
    $("#editTextfield").val("");
}

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

    $("#editModal").fadeIn(ANIMATION_TIME);
    nowEdit = obj.parentNode.parentNode.id;
}

function modalSave() {
    document.getElementById(nowEdit).getElementsByClassName("log-content")[0].innerHTML = document.getElementById("editTextfield").value;
    closeModal();
}

function saveAll() {

}

//reset button function
function reset() {
    window.onbeforeunload = function (event) {
    };
    switchDisplay("#checker", "#selector");
    cleanVar();
}


//reset global var
function cleanVar() {

}

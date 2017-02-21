/**
 * Created by nick on 2017/2/19.
 */

var log;
var caption;


function getLog(){
    var array=[];
    for(var i =0;i<log.length;i++){
        var subArray=[];

        var logInfo=log[i].split("|");
        subArray.push(logInfo[1]);
        var content=findCaptionContent(logInfo[2]);
        subArray.push(content[0]);
        subArray.push(content[1]);
        subArray.push(logInfo[3]);

        array.push(subArray);
    }

    var result=document.getElementById("result");
    result.innerHTML+=array;

    return array;
}

function findCaptionContent(location){
    var xy=location.split("-");

    var x=xy[0];
    var y=xy[1];

    var line =caption[x-1];


    var lineItem=line.split("    ");

    var x = lineItem.join("");



    var a=[];
    a.push(x);
    a.push(lineItem[y-1]);


    return a;

}




function readCaption(){
    var file = document.getElementById("captionSource").files[0];
    var reader = new FileReader();
    //将文件以文本形式读入页面
    reader.readAsText(file);
    reader.onload=function(f){

        caption=this.result;
        processCaption();
    }
}

function processCaption(){

    var line = caption.split("\n");
    var caps = new Array;
    for(var l=0;l<line.length;l++){
        var x="-->";
        if(line[l].indexOf(x)!=-1){
            caps.push(line[l+1]);
        }
    }
    caption=caps;
}


function readFile() {
    var file = document.getElementById("logSource").files[0];
    var reader = new FileReader();
    //将文件以文本形式读入页面
    reader.readAsText(file);
    reader.onload=function(f){

        log=this.result.split("\n");
    }

}
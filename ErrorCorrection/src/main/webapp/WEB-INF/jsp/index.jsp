<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Caption Check</title>
    <link rel="stylesheet" href="css/cssreset.css">
    <link rel="stylesheet" href="css/common.css">
</head>
<body>
<div id="editModal" class="none">
    <div class="modal-block">
        <input type="button" class="modal-close" value="X" onclick="closeModal()">
        <input type="text" class="textfield" id="editTextfield">
        <input type="button" class="select-button" onclick="modalSave()" value="确认">
    </div>
</div>

<div class="selector" id="selector">
    <h2 class="title">字幕纠错</h2>
    <form action="/upload.action" method="post" enctype="multipart/form-data"
          onsubmit="return false;">
        <div class="inner-form">
            <p class="input-title">选取视频源</p>
            <input type="text" class="textfield" id="videoText">
            <input type="button" class="select-button" onclick="document.getElementById('videoSource').click()"
                   value="选取文件">
            <input class="none file" type="file" id="videoSource" onchange="selectFile('video')">
        </div>
        <div class="inner-form">
            <p class="input-title">选取字幕源</p>
            <input type="text" class="textfield" id="captionText">
            <input type="button" class="select-button" onclick="document.getElementById('captionSource').click()"
                   value="选取文件">
            <input class="none file" type="file" id="captionSource" onchange="selectFile('caption')">
        </div>
        <div class="inner-form">
            <p class="input-title">选取标定日志</p>
            <input type="text" class="textfield" id="logText">
            <input type="button" class="select-button" onclick="document.getElementById('logSource').click()"
                   value="选取文件">
            <input class="none file" type="file" id="logSource" onchange="selectFile('log')">
        </div>
        <button class="submit" onclick="submitFile()">确定</button>
    </form>
</div>
<div class="checker none" id="checker">
    <div class="left">
        <div class="info">
            <p class="info-item" id="videoTitle">字幕.mp4</p>
            <p class="info-item" id="captionTitle">英文.vtt</p>
            <p class="info-item" id="logTitle">标定日志.txt</p>
            <input type="button" class="switch-button" value="更换" onclick="reset()"/>
        </div>
        <video width="800px" id="targetVideo" controls>
            <track id="caption" label="chi" kind="captions" src="" default="chi"/>
        </video>
    </div>
    <div class="right">
        <div class="table-header">
            <p class="header" style="margin-right:5px;">时间</p>
            <p class="header" style="margin-right:95px;">错误内容</p>
            <p class="header">标定率</p>
        </div>
        <div class="table-body">
            <table id="log-table">
                <tr class="log-row none" id="row-exmp" onmouseover="rowHover(this)" onmouseout="rowOut(this)">
                    <td class="log-time"><span class="time">0:02</span><input type="button" class="jump none" value="跳转"
                                                                              onclick="jumpTo(this)"></td>
                    <td class="log-content">这是一条很大的海豚</td>
                    <td class="log-ratio"><span class="ratio">67.7%</span><input type="button" class="edit none"
                                                                                 value="修改" onclick="editModal(this)">
                    </td>
                </tr>
            </table>
        </div>
        <input type="button" class="save-button" value="保存所有更改" onclick="saveAll()">
    </div>
    <div style="clear:both"></div>
</div>
<script src="js/readFile.js"></script>
<script src="js/jquery-1.10.2.min.js"></script>
<script src="http://malsup.github.io/jquery.form.js"></script>
<script src="js/caption.js"></script>

</body>
</html>
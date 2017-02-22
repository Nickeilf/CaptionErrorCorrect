<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>单文件 上传 </title>


    <%--<!-- 无阻塞消息提示框 -->--%>
    <%--<link href="../css/toaster.css" rel="stylesheet">--%>

    <%--<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->--%>
    <%--<!--[if lt IE 9]>--%>
    <%--<script src="../js/ie8-responsive-file-warning.js"></script><![endif]-->--%>
    <%--<script src="../js/ie-emulation-modes-warning.js"></script>--%>

    <%--<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->--%>
    <%--<!--[if lt IE 9]>--%>
    <%--<script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>--%>
    <%--<script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>--%>
    <%--<![endif]-->--%>

</head>
<body>

<%--<div style="margin: 0 auto;margin-top: 100px; ">--%>
<%----%>
<%--<form action="../oneUpload.action" method="post" enctype="multipart/form-data">--%>
<%--<p>--%>
<%--<span>文件：</span>--%>
<%--<input type="file" name="oneFile">--%>
<%--</p>--%>
<%--<p>--%>
<%--<input type="submit">--%>
<%--</p>--%>
<%--</form>--%>
<%----%>
<%--</div>--%>

<form id="form_file" method="post" action="../oneUpload.action" enctype="multipart/form-data">
    <span id="upload_File">上传文件</span>

    <input type="file" name="oneFile" id="file_input" onchange="uploadFile()">
</form>



<%-- 无阻塞提示框 --%>
<div id="toaster_close">
    <div id="toaster">
        <div id="pic_div" class="green_pic"></div>
        <div id="remind" class="green_word">提示消息</div>
    </div>
</div>

<script>

    function uploadFile() {

        var imageFile = $('input[name=oneFile]').val();
        $('form').ajaxSubmit({
            type: 'post', // 提交方式 get/post
            url: 'oneUpload', // 需要提交的 url
            data: {
                "oneFile": imageFile
            },
            success: function (result) { // data 保存提交后返回的数据，一般为 json 数据
                if (result == "SUCCESS") {
                    alert("success")
                } else {
                    alert("文件上传失败")
                }
            },
            error: function () {
                alert("获取数据失败")
            }
        });

    }
</script>

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="http://malsup.github.io/jquery.form.js"></script>

</body>
</html>
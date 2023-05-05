$(document).ready(function(){
    function KiemTraTK(){
        var mauKT = /^[a-zA-Z0-9_-]{6,}$/
        if($("#username").val() == ""){
            $("#tbTK").html("Bắt buộc nhập !")
            return false;
        }
        if(!mauKT.test($("#username").val())){
            $("#tbTK").html("Bạn phải nhập ít nhất 6 ký tự")
            return false;
        }
        $("#tbTK").html("")
        return true;
    }
    $("#username").blur(KiemTraTK)

})
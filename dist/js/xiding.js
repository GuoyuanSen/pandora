// 吸顶效果
function ceiling(obj) {
    // console.log(1)
    var ot = obj.offsetTop;
    document.onscroll = function () {
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        /*
         * 在这里我给obj添加一个自定义属性。className可能会影响原有的class
         * 三元运算使代码更简洁
         */
        obj.setAttribute("data-fixed",st >= ot?"fixed":"");
    }
}

//吸顶
$(function(){
    $('.zindex').click(function(){
        $('html , body').animate({scrollTop: 0},'slow');
    });
});

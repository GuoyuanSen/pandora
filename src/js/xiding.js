// 吸顶效果
function ceiling(obj) {
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
// var NB = document.getElementById("xijing")
// window.onscroll = function(){
		
//     var scrollTop = document.body.scrollTop || 
//     document.documentElement.scrollTop;
//     if(scrollTop >= 0){
//         NB.style.position = "fixed"
//         NB.style.top = 0;
//         NB.style.left = 0

//     }else{
//         NB.style.position = "absolute"
//         NB.style.top = 0 + "px";
        
//     }


// }
$.ajax("data.json",{
})
.then(function(res){  
    readerPage(res)
     console.log(res)
},function(){
    console.log("失败")
})

function readerPage(res){
    var html = "";
    for(var i = 0 ; i < res.length; i ++){
        html += `
        <div class="sex">
             <a href="javascript:void(0)">
                <img src="${res[i].imagesUrl}">
                <p id="viewbutton" class="viewbutton" luxury-id=${res[i].id} href="#">快速查看</p>
                <p class="sea" >${res[i].title}</p>
                <span>${res[i].price}</span>
                </a>
            </div>
        `
        $(".wrap").html(html)

    }
}
//详情页跳转
// console.log($(".wrap"))
$(".wrap").on("click",".viewbutton",function(e){
    var e=e||window.event;
    var target=e.target||e.srcElement;
   var id=$(target).attr("luxury-id")
   $.cookie("Boss-id",id)
   console.log( $.cookie("Boss-id"))
   location.href="Details.html"
})
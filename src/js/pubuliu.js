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
             <a href="#">
                <img src="${res[i].imagesUrl}">
                <a id="viewbutton" href="#">快速查看</a>
                <p class="sea" >${res[i].title}</p>
                <span>${res[i].price}</span></a>
            </div>
        `
        $(".wrap").html(html)

    }
}
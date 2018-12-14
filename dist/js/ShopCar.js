

function  addCar(){
    $(".hand").on("click",function(){
      
        if($.cookie("Boss-id")){
         var id =$.cookie("Boss-id")
         var goods = {};
         if(!localStorage.nb){
             var life=[];
             goods.id = id;
             goods.num = 1
             life.push(goods);
            //  console.log(goods)
            localStorage.nb= JSON.stringify(life)//只能存字符串
         }else{
              var goods = JSON.parse(localStorage.nb);
              for( var i = 0 ; i <goods.length;i++){
                  if(goods[i].id === id){
                      goods[i].num = 1+ goods[i].num;
                      localStorage.nb = JSON.stringify(goods)
                  }
              }
         }
        }
    })
}
addCar()

//shop 
$.ajax("data.json")
.then(function(res){
    console.log(res)
    readerPage2(res)

}),function(){
    console.log("失败")
}

function readerPage2(res){
    var shuzu =JSON.parse(localStorage.nb) 
    var html = ""
    for( var i= 0 ; i<shuzu.length; i++ ){
        for (var j = 0 ; j<res.length;j++){
            if(shuzu[i].id === res[j].id){
                html+=`
            
                <ul>
                    <li class="clearfix">
                        <img src=${res[i].imagesUrl} style="height:50px" alt="">
                        <span>${res[i].title}</span>
                        <i>-</i>
                        <em>1</em>
                        <i>+</i>
                        <p>单价：<em>${res[i].price}</em></p>
                    </li> 
                    
                </ul>
                <button class="clear">清空购物车</button>
             
                `
         
            }
        }
    }
    document.querySelector(".car_list").innerHTML=html
    
}
$(".car_list").on("click",".clear",function(){
    localStorage.clear("nb")
})
$("#cart").mouseenter(function(){
    $(".car_list").css({
        "display":"block"
    })
})
$(".car_list").mouseleave(function(){
    $(".car_list").css({
        "display":"none"
    })
})

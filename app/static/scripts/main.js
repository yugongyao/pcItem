
$.ajax({
  url: homeBannerApi,
  success: function(data){
    console.log('请求成功');
    console.log(data);
    console.log(data.list);
    var list=data.list;
    list.forEach((item,index,list) => {
      $('.list').append(`<li>用户id为:${item.id};图片:<img src="${item.picUrl}" alt="">;</li>`);
    });
  }, 
  fail: function(){
    console.log('请求失败');
  }
});


$.ajax({
  url: goodsDetailApi,
  success: function(data){
    console.log('请求成功');
    console.log(data);
  },
  fail: function(){
    console.log('请求失败');
  }
})
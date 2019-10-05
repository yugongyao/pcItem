$(function(){
  var $new=$('.new-jian');
  var $inner=$('.text-inner')

  // 点击出现消失
  $.each($new,function (index,value) { 
    $new.eq(index).click(function (e) {
      $inner.eq(index).toggle(500);
      $new.eq(index).toggleClass('icon-jian');
      $new.eq(index).toggleClass('icon-jia');
    })  
  });
})
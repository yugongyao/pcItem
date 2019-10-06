$(function () {
  var $tree = $('.side-tree');
  var $menu = $('.tree-menu');
  var $arrow = $('.arrow');
  var $blue=$('.b-style');
  var $hover=$('.side-hover');
  var parIndex=0;
  // 侧栏点击出现消失
  $.each($tree,function (index,value) { 
    $tree.eq(index).click(function (e) {
      $menu.eq(index).toggle(500);
      $arrow.eq(index).toggleClass('arrow2');
    })  
  });
  $.each($hover,function (index,value) { 
    $hover.eq(index).click(function (e) {
      $blue.eq(parIndex).removeClass('line');
      $blue.eq(index).addClass('line');
      parIndex=index;
    })  
  });
})

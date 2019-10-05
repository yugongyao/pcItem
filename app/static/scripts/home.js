$(function () {
  var $tree = $('.side-tree');
  var $menu = $('.tree-menu');
  var $arrow = $('.arrow');
  var $blue=$('.b-style');
 
  // 侧栏点击出现消失
  $.each($tree,function (index,value) { 
    $tree.eq(index).click(function (e) {
      $menu.eq(index).toggle(500);
      $arrow.eq(index).toggleClass('arrow2');
    })  
  });
})

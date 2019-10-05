$(function(){
  var $p=$('.status');
  var $span=$('.status span')
  var $table=$('.table-inner')
  var $tr1=$('.table-01 tr')
  var $tr2=$('.table-02 tr')
  var $tr3=$('.table-03 tr')
  var parIndex=0;
  //点击切换
  $.each($p,function(index,value){
    $p.eq(index).click(function(){
      $p.eq(parIndex).removeClass('show');
      $p.eq(index).addClass('show');
      $table.eq(parIndex).addClass('table-fade');
      $table.eq(index).removeClass('table-fade');
      parIndex=index;
    })
  })

  //改变数字
  $span.eq(0).text('('+($tr1.length-1)+')');
  $span.eq(1).text('('+($tr2.length-1)+')');
  $span.eq(2).text('('+($tr3.length-1)+')');


})
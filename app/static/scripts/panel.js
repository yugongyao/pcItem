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
  //=========localStorage========
  var storage = {
    //存储
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    //取出数据
    get(key) {
      return JSON.parse(localStorage.getItem(key));
    },
    // 删除数据
    remove(key) {
      localStorage.removeItem(key);
    }
  }
  // 文章数
  var $h3=$('.inner-wen h3');
  var artNum=storage.get('artNum');
  // console.log(artNum);
  $h3.text(artNum);

  //最新文章
  var $newArt=$('.table-new');
  var getArticle = storage.get('article');
  if (getArticle) {
    getArticle.forEach(function (item, index, array) {
      var arrN = array[index];
      var $newTr = $('<tr class="new-tr"></tr>');
      var innerVal = `<td>${arrN[0]}</td><td>已发布</td><td>${arrN[4]}</td>`;
      $newArt.append($newTr);
      $newTr.html(innerVal);
    })
  }

})
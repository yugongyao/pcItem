$(function(){
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
  var $list=$('.list');
  var getArticle = storage.get('article');
  if (getArticle) {
    getArticle.forEach(function (item, index, array) {
      var arrIn = array[index];
      var $newTr = $('<li class="main-li"></>');
      var innerVal = `<h3>${arrIn[1]}</h3>
      <div class="spans clearfix"><span>${arrIn[3]}</span><span>${arrIn[2]}</span><span>评论</span><span>访问</span><span>${arrIn[4]}</span></div>
      <p>${arrIn[0]}</p>`;
      $list.append($newTr);
      $newTr.html(innerVal);
    })
  }
})
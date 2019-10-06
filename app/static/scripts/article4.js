$(function () {
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
  var $title = $('.label-title');
  var $url = $('.label-url');
  var $label = $('.btn-label');
  var $inner = $('.table-inner')
  // 获取本地存储
  var getLabel = storage.get('label');
  if (getLabel) {
    var arr1 = getLabel;
  } else {
    arr1 = [];
  }
  $label.click(function () {
    var titVal = $title.val();
    var urlVal = $url.val();
    // 存储输入的内容
    var arrVal = [titVal, urlVal]
    arr1.push(arrVal);
    // 设置存储
    storage.set('label', arr1)
    location.reload();
  })
  // 获取本地存储
  // var getPaging=storage.get('paging');
  // 遍历第一层数组
  if ( getLabel) {
    getLabel.forEach(function (item, index, array) {
      // 遍历第二层数组
      var arrIn = array[index];
      var $newTr = $('<tr class="right-tr"></tr>');
      var innerVal = `<td>${arrIn[0]}</td><td>${arrIn[1]}</td><td><button type="button" class="btn btn-danger btn-xs btn-delete">永久删除</button></td>`;
      // 添加tr
      $inner.append($newTr);
      $newTr.html(innerVal);

    })
  }
  //遍历所有tr
  var $allTr = $('.right-tr');
  var $allTd=$('.right-tr:nth-of-type(5)') 
  var $btnDel = $('.btn-delete');
  console.log($btnDel);
  console.log($allTr);
  $.each($btnDel, function (index, value) {
    $btnDel.eq(index).click(function(){
      // 删除tr
      arr1.splice(index,1);
      storage.set('label', arr1)
      location.reload();
    })
  });

})
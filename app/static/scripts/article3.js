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
  var $title = $('.paging-title');
  var $url = $('.paging-url');
  var $describe = $('.paging-describe');
  var $paging = $('.btn-paging');
  var $inner = $('.table-inner')
  // 获取本地存储
  var getPaging = storage.get('paging');
  if (getPaging) {
    var arr = getPaging;
  } else {
    var arr = [];
  }
  $paging.click(function () {
    var titVal = $title.val();
    var urlVal = $url.val();
    var describeVal = $describe.val();
    // 存储输入的内容
    var arrVal = [titVal, urlVal, describeVal]
    arr.push(arrVal);
    // 设置存储
    storage.set('paging', arr)
    location.reload();
  })
  // 获取本地存储
  // var getPaging=storage.get('paging');
  // 遍历第一层数组
  if (getPaging) {
    getPaging.forEach(function (item, index, array) {
      // 遍历第二层数组
      var arrIn = array[index];
      var $newTr = $('<tr class="right-tr"></tr>');
      var innerVal = `<td>${arrIn[0]}</td><td>${arrIn[1]}</td><td>${arrIn[2]}</td><td>1</td><td><button type="button" class="btn btn-danger btn-xs btn-delete">永久删除</button></td>`;
      // 添加tr
      $inner.append($newTr);
      $newTr.html(innerVal);

    })
  }
  //遍历所有tr
  var $allTr = $('.right-tr');
  var $btnDel = $('.btn-delete');
  // console.log($btnDel);
  // console.log($allTr);
  $.each($btnDel, function (index, value) {
    $btnDel.eq(index).click(function(){
      // 删除tr
      arr.splice(index,1);
      storage.set('paging', arr)
      location.reload();
    })
  });



})
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
  // ========================文章=============================
  var $table1 = $('.table-01');

  // 获取本地存储article

  // 添加新列
  var getArticle = storage.get('article');
  var arr3 = getArticle;
  // console.log(arr3);

  if (getArticle) {
    getArticle.forEach(function (item, index, array) {
      var arrIn = array[index];
      var $newTr = $('<tr class="main-tr"></tr>');
      var innerVal = `<td>${arrIn[1]}</td><td>${arrIn[2]}</td>
<td>${arrIn[3]}</td><td>14</td><td>14</td><td>${arrIn[4]}</td><td class="btn-td"><button type="button" class="btn btn-danger btn-xs btn-main">丢弃</button></td>`;
      $table1.append($newTr);
      $newTr.html(innerVal);
    })
  }

  //删除列
  var $allTr = $('.main-tr');
  var $btnDel = $('.btn-main');
  var $allTd = $('.btn-td');
  // console.log($btnDel);
  // console.log($allTr);
  // 获取article-del
  var getArtDel = storage.get('article-del');
  if (getArtDel) {
    var arr4 = getArtDel;
  } else {
    var arr4 = [];
  }

  $.each($btnDel, function (index, value) {

    // $btnDel.eq(index).click(function(){
    //   // 删除tr
    //   arr3.splice(index,1);
    //   // var arrDel=arr3.splice(index,1);
    //   storage.set('article', arr3);
    //   // arr4.push(arrDel);
    //   // storage.set('article-del', arr4);
    //   location.reload();
    // })
    $allTd.eq(index).on('click', 'button', function () {
      // 删除tr
      var arrDel = arr3.splice(index, 1);
      storage.set('article', arr3);
      arr4.push(arrDel[0]);
      storage.set('article-del', arr4);
      location.reload();
    })
  });
  // storage.remove('article-del');
  //============================回收站======================
  var $table3 = $('.table-03');
  // 获取本地存储article-del

  // 添加新列
  var getArticle = storage.get('article-del');
  var arr4=getArticle;
  console.log(arr4);
    if (getArtDel) {
      getArtDel.forEach(function (item, index, array) {
        var arrIn2 = array[index];
        var $newTr2 = $('<tr class="main2-tr"></tr>');
        var innerVal2 = `<td>${arrIn2[1]}</td><td>${arrIn2[2]}</td>
  <td>${arrIn2[3]}</td><td>14</td><td>14</td><td>${arrIn2[4]}</td><td class="btn1-td"><button type="button" class="btn btn-info btn-xs btn-back">还原</button>  <button type="button" class="btn btn-danger btn-xs btn-forever">永久丢弃</button></td>`;
        $table3.append($newTr2);
        $newTr2.html(innerVal2);
      })
    }
  var $btnBack=$('.btn-back');
  var $btnFor=$('.btn-forever');
  console.log($btnBack);
  console.log($btnFor);
  //永久删除
  $.each($btnFor, function (index, value) {
    $btnFor.eq(index).click(function(){
      // 删除tr
      arr4.splice(index,1);
      storage.set('article-del', arr4);
      location.reload();
    })
  })
  // 还原
  $.each($btnBack, function (index, value) {
    $btnBack.eq(index).click(function(){
      // 还原
      var back=arr4.splice(index,1);
      storage.set('article-del', arr4);
      arr3.push(back[0]);
      storage.set('article', arr3);
      location.reload();
    })
  })


})
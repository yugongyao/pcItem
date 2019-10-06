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
  var $label = $('.label1');
  var $classify = $('.classify');
  var getPaging = storage.get('paging');
  var getLabel = storage.get('label');
  // 给标签添加元素
  getLabel.forEach(function (item, index, array) {
    var arrLabel = array[index][0];
    var $newOption = $(' <option></option>');
    $label.append($newOption);
    $newOption.text(arrLabel)
  })
  // 给分类添加元素
  getPaging.forEach(function (item, index, array) {
    var arrPaging = array[index][0];
    var $newOption = $(' <option></option>');
    $classify.append($newOption);
    $newOption.text(arrPaging)
  })
  //获取值,设置localStorage

  var $text = $('.text-area');

  var $title = $('.main-title');

  // 获取本地存储
  var getArticle = storage.get('article');
  if (getArticle) {
    var arr2 = getArticle;
  } else {
    arr2 = [];
  }
  var $issueBtn = $('.btn-issue');

  $issueBtn.click(function () {
    // 文章内容
    var articleVal = $text.val();
    //标题
    var titleVal = $title.val();
    // 选择的标签
    var labelText = $(".label1 option:selected").text();
    // 选择的分类
    var classifyText = $(".classify option:selected").text();
    //时间
    var d = new Date();
    var time=d.toLocaleString();

    var arrVal = [articleVal, titleVal, labelText, classifyText,time];
    arr2.push(arrVal);
    storage.set('article', arr2);
    alert('成功发布'+titleVal);
  })

})
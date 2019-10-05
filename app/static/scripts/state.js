function state(){
  function getCookie(key){
      var arr1 = document.cookie.split('; ');
      for (var i = 0; i < arr1.length; i++){
          var arr2 = arr1[i].split('=');//["user1","xiaowang"]
          if (arr2[0] === key) {
              return unescape(arr2[1]);
          }
      }
      return null;
  }
  var str="state";
  var user="user"
//   console.log(user);
  
  if (getCookie(str)==1) {
      $('.userId').html(getCookie(user));
  }
  
}
state();
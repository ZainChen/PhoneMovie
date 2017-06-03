//========自定义Js功能================
var lg = "en";  //当前系统语言
console.log(window.location.hash);  //获取当前页面 href 属性中在井号“#”后面的分段
function RefreshTime() {
  var urld = window.location.hash;  //获取当前页面 href 属性中在井号“#”后面的分段(用来判断只触发当前页面的js事件,防止有获取不到的其它页面的id报错)
  //=====分享按钮功能实现=====
  if(urld == "#/page/user") {  //只在user.html页面获取相应id,防止报错
    var uis = document.getElementById("user-info-share");
    uis.onclick = function() {
      var uimg = document.getElementById("user-info-img");
      if(uis.innerText == "Share ") {
        uis.innerHTML = "Zain Chen <i class='glyphicon glyphicon-tower'></i>";
        uimg.src = "./image/user/ZainChen2.png";
      } else if(uis.innerText == "共享 ") {
        uis.innerHTML = "陈志银 <i class='glyphicon glyphicon-tower'></i>";
        uimg.src = "./image/user/ZainChen2.png";
      } else if(uis.innerText == "Zain Chen ") {
        uis.innerHTML = "Share <i class='glyphicon glyphicon-cloud-upload'></i>";
        uimg.src = "./image/user/ZainChen1.png";
      }
       else if(uis.innerText == "陈志银 ") {
        uis.innerHTML = "共享 <i class='glyphicon glyphicon-cloud-upload'></i>";
        uimg.src = "./image/user/ZainChen1.png";
      }
    }
  }
  //===语言切换功能实现===
  SystemLanguage(lg);  //自动实时刷新系统语言(这种切换方法会有1s的延迟,如果实时刷新太快可能会使服务器崩溃)
  //---json数据语言切换---
  function DataLanguage(e) {  //不用自动实时刷新
    df = "data_"+e+".json";
  }
  //------切换语言按钮功能实现----------
  if(urld == "#/page/user") {  //(该功能只在user.html页面执行)
    //-----切换中文语言按钮功能-------
    var sch = document.getElementById("set-ch");
    sch.onmouseover = function() {
      if(sch.innerText == "Ch") {
        sch.style.cursor = "pointer";
      }
    }
    sch.onclick = function() {
      DataLanguage("ch");  //json数据语言切换成中文
      SystemLanguage("ch");
    }
    //-----切换英文语言按钮功能-------
    var sen = document.getElementById("set-en");
    sen.onmouseover = function() {
      if(sen.innerText == "英") {
        sen.style.cursor = "pointer";
      }
    }
    sen.onclick = function() {
      DataLanguage("en");  //json数据语言切换成英文
      SystemLanguage("en");
    }
  }
}
// setTimeout(RefreshTime, 100);  //延迟1秒执行RefreshTime()函数,如果不延迟就获取不到需要的ID,可能因为页面标签数据读取有点慢
setInterval(RefreshTime, 1000);  //上面的延迟执行无法解决页面跳转后不能执行功能问题,用这个不停地调用函数,0.01s调用一次可解决此问题
// window.onload = Refresh;


//---系统语言切换函数(这种切换方法会有1s的延迟,如果实时刷新太快可能会使服务器崩溃)---
function SystemLanguage(e) {
  var urld = window.location.hash;  //获取当前页面 href 属性中在井号“#”后面的分段(用来判断只触发当前页面的js事件,防止有获取不到的其它页面的id报错)
  if(e == "en") {
    lg = "en";
    //如果跳转到home页面或seek或user页面就更改页脚footer语言
    if(urld == "#/page/home" || urld == "#/page/seek" || urld == "#/page/user") {
      var fhome = document.getElementById("footer-home");
      fhome.innerHTML = "<i class='glyphicon glyphicon-home'></i>Home";
      var fseek = document.getElementById("footer-seek");
      fseek.innerHTML = "<i class='glyphicon glyphicon-search'></i>Seek";
      var fuser = document.getElementById("footer-user");
      fuser.innerHTML = "<i class='glyphicon glyphicon-user'></i>User";
    }
    //只将user.html页面切换成英文
    if(urld == "#/page/user") {
      var sch = document.getElementById("set-ch");
      sch.innerText = "Ch";
      sch.style.cursor = "pointer";
      sch.style.boxShadow = "inset 0 0 0px #000";
      var sen = document.getElementById("set-en");
      sen.innerText = "En";
      sen.style.cursor = "";
      sen.style.boxShadow = "inset 0 0 100px #000";
      var uheader = document.getElementById("user-header");
      uheader.innerHTML = "User <i class='glyphicon glyphicon-tint'></i>";
      var unh2 = document.getElementById("user-name-h2");
      unh2.innerHTML = "Zain Chen";
      var uedit = document.getElementById("user-edit");
      uedit.innerHTML = "Edit profile <i class='glyphicon glyphicon-edit'></i>";
      var uish = document.getElementById("user-info-share");
      if(uish.innerText == "共享 " || uish.innerText == "Share ") {
        uish.innerHTML = "Share <i class='glyphicon glyphicon-cloud-upload'>";
      } else if(uish.innerText == "陈志银 " || uish.innerText == "Zain Chen ") {
        uish.innerHTML = "Zain Chen <i class='glyphicon glyphicon-tower'>";
      }
      var ulset = document.getElementById("user-lset");
      ulset.innerHTML = "Language Set <i class='glyphicon glyphicon-cog'>";
    }
  } else {
    lg = "ch";
    //如果跳转到home页面或seek或user页面就更改页脚footer语言
    if(urld == "#/page/home" || urld == "#/page/seek" || urld == "#/page/user") {
      var fhome = document.getElementById("footer-home");
      fhome.innerHTML = "<i class='glyphicon glyphicon-home'></i>首页";
      var fseek = document.getElementById("footer-seek");
      fseek.innerHTML = "<i class='glyphicon glyphicon-search'></i>搜索";
      var fuser = document.getElementById("footer-user");
      fuser.innerHTML = "<i class='glyphicon glyphicon-user'></i>用户";
    }
    //只将user.html页面切换成中文
    if(urld == "#/page/user") {
      var sch = document.getElementById("set-ch");
      sch.innerText = "中";
      sch.style.cursor = "";
      sch.style.boxShadow = "inset 0 0 100px #000";
      var sen = document.getElementById("set-en");
      sen.innerText = "英";
      sen.style.cursor = "pointer";
      sen.style.boxShadow = "inset 0 0 0px #000";
      var uheader = document.getElementById("user-header");
      uheader.innerHTML = "用户 <i class='glyphicon glyphicon-tint'></i>";
      var unh2 = document.getElementById("user-name-h2");
      unh2.innerHTML = "陈志银";
      var uedit = document.getElementById("user-edit");
      uedit.innerHTML = "编辑资料 <i class='glyphicon glyphicon-edit'></i>";
      var uish = document.getElementById("user-info-share");
      if(uish.innerText == "共享 " || uish.innerText == "Share ") {
        uish.innerHTML = "共享 <i class='glyphicon glyphicon-cloud-upload'>";
      } else if(uish.innerText == "陈志银 " || uish.innerText == "Zain Chen ") {
        uish.innerHTML = "陈志银 <i class='glyphicon glyphicon-tower'>";
      }
      var ulset = document.getElementById("user-lset");
      ulset.innerHTML = "选择语言 <i class='glyphicon glyphicon-cog'>";
    }
  }
}
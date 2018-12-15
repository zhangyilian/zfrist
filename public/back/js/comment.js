// 需求：在第一个ajax发送的时候,开启进度条
//在全部的ajax回来的时候，关闭进度条
//注册了全局事件，所有的ajax只要开始就会开启进度条
//ajax全局事件
$(document).ajaxStart(function () {
    NProgress.start();
  });
  
  //所有的ajax只要结束，延迟500毫秒，结束进度条
  $(document).ajaxStop(function () {
    //   模拟网络延迟
    setTimeout(function () {
      NProgress.done();
    }, 500);
  
  });
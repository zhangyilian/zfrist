








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
  //
  $(function(){
  //注册完成公共功能
  //功能1 左侧二级导航切换效果
   $('.lt_aside .category').click(function(){
    $('.lt_aside .child').stop().slideToggle();
    
    
   })



  //功能2 左侧菜单切换效果
$('.icon_left').click(function(){
  $('.lt_aside').toggleClass('hidemenu');
  $('.lt_main').toggleClass('hidemenu');
  $('.box').toggleClass('hidemenu');

})


//给右侧按钮，添加点击事件，让模态框显示
$('.icon_right').click(function(){
  // 让模态框显示
  $('#myModal').modal('show')
})
//功能3 退出功能
$('#logoutBtn').click(function(){
 $.ajax({
   type:'get',
   url:'/employee/employeeLogout',
   dataType:'json',
   success:function(res){
    //  console.log(res);
    if(res.success){
      //销毁登录状态成功
      location.href = 'login.html';
    }
     
   }

 })


})


  })
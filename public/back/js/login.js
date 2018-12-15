$(function() {

    /*
     * 1. 进行表单校验配置
     *    校验要求:
     *        (1) 用户名不能为空, 长度为2-6位
     *        (2) 密码不能为空, 长度为6-12位
     * */
    $('#form').bootstrapValidator({
  
      // 配置图标
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',         // 校验成功
        invalid: 'glyphicon glyphicon-remove',   // 校验失败
        validating: 'glyphicon glyphicon-refresh'  // 校验中
      },
  
      // 配置校验字段    需要先给input框配置 name
      fields: {
        username: {
          // 配置校验规则
          validators: {
            // 配置一个非空
            notEmpty: {
              message: "用户名不能为空"
            },
            // 长度校验
            stringLength: {
              min: 2,
              max: 6,
              message: "用户名长度必须是2-6位"
            },
            //callback 专门用来定制回调的提示内容
            callback:{
                 message:'用户不存在'
            }

          }
        },
  
        password: {
          // 配置校验规则
          validators: {
            // 非空校验
            notEmpty: {
              message: "密码不能为空"
            },
            // 长度校验
            stringLength:{
              min: 6,
              max: 12,
              message: "密码长度必须是6-12位"
            },
            callback:{
              message:'密码错误'
         }
          }
        }
      }
  
    });
    /*
    看文档
    2.注册表单校验事件，校验成功是会触发
      在事件中阻止默认的提交（会跳转），通过ajax提交（异步）
    */
   $("#form").on('success.form.bv', function (e) {
    //  阻止默认提交
    e.preventDefault();
    //通过ajax提交
    $.ajax({
      url:"/employee/employeeLogin",
      type:'post',
      data:$("#form").serialize(),
      dataType:'json',
      success:function(res){
        //  console.log(info);
        if(res.error==1000){
        // alert('用户名有误')
        //调用实例的更新校验方法 updateStatus 将校验状态更新失败
        //参数1：字段名（）username
        //参数2：校验状态
        $("#form").data('bootstrapValidator').updateStatus('username','INVALID','callback')

        
        };
        if(res.error==1001){
          $("#form").data('bootstrapValidator').updateStatus('username','INVALID','callback')
        }
        if (res.success) {
          //成功跳转到首页
          location.href = "index.html"
        }
         
      }

    })
    
});
/*
3.表单重置功能
$("#form").data('bootstrapValidator');  //获取表单校验实例
resetForm() 没有传参或者传false ,只会重置状态
resetForm(true) 内容和校验状态都要重置
由于reset 按钮，本身就可以重置内容，所以都可以

*/
//获取对象(属性选择器)
$('[type = "reset"]').click(function(){
  //重置校验状态
  $("#form").data('bootstrapValidator').resetForm()


})



  })

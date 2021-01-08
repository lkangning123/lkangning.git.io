$(function () {
    // 切换登录方式
    $('.title>.title-item').click(function () {
        $(this).css('color','#f10180')  // 把当前点击选项的颜色变成#f10180
        .siblings()  // 选择当前的div的兄弟
        .css('color','#666')  // 把兄弟的颜色改成#666
        .parent()  // title
        .next()   // content-body
        .children()   // tab-panel
        .children()   // tab-panel的所有孩子
        .removeClass('active')  // 移除active类名
        .eq($(this).index())  // 找到索引和点击的那个div对应的那一个
        .addClass('active')   // 添加类名active
    })
    // 显示或隐藏更多
    $('.tab-third-more-button>.tab-third-more-expand').click(function () {
        $(this)
        // toggleClass：有就删除，没有就添加
        .toggleClass('active')  // 点击隐藏当前元素
        .siblings()
        .toggleClass('active') // 显示兄弟元素
        .parents('.tab-third-main')  // tab-third-main
        .next()  // tab-third-more
        .toggleClass('tab-third-more active')
    })
    // 手机号
    $('#phone').focus(function() {
        $('.phone-tip').html('请输请输入手机号');
    })
    
    $('#phone').blur(function () {
        if($('#phone').val()==''){
            $('.phone-tip').html('请输请输入手机号');
        }else{
            $('.phone-tip').html('');
        }
    })
    // 密码
    $('#password').focus(function () {
        $('.password-tip').html('请输请输入密码');
    })
    
    $('#password').blur(function () {
        if($('#phone').val()==''){
            $('.password-tip').html('请输请输入密码');
        }else{
            $('.password-tip').html('');
        }
    })
    
    // 登录
    
    function setUser(){
        localStorage.setItem('phone',$('#phone').val());
    }
    $('#button').click(function(){
        $.ajax({
            url:"./api/login.json",
            data:{
                phone:$('#phone').val(),
                password:$('#password').val()
            },
            dataType:"json",
            success:function(){
                if(localStorage.getItem($('#phone').val())==$('#password').val()){
                    console.log($('#phone').val())
                    location.href = "./index.html";
                    setUser();
                }
            }
        })
    })
})
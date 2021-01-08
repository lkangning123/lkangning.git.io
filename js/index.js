$(function () {
    // 点击lightart-wrap-box，brand-item跳转到详情页
    $('.lightart-wrap-box').click(function () {
        window.open('./detail.html')
    });
    $('.brand-item').click(function () {
        window.open('./detail.html')
    });
    // 轮播图
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }, // 可选选项，自动滑动

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
    mySwiper.pagination.$el.addClass('banner-icon');  //为分页器增加样式



    /* 
        需求分析：
            1 获取当前时间到早上十点和晚上八点三个钟内的倒计时
            2 在倒计时的时间里，shop-title的背景是https://a.vpimg2.com/upload/dop/2019/05/23/85/clock1.png
              其余时间是https://a.vpimg4.com/upload/dop/2019/05/23/58/today_DDp.png
            3 根据时分秒显示对应的图片，比如0小时，显示0.png
    */

    var time = new Date();
    var timer = new Date();
    // 早上七点到十点，下午五点到晚上八点设置
    if ((7 <= time.getHours() && time.getHours() < 10) || (17 <= time.getHours() && time.getHours() < 20)) {
        $('.shop-coundown-cont').css('display', 'block');
        $('.coundown-img').attr('src', 'https://a.vpimg2.com/upload/dop/2019/05/23/85/clock1.png');
        showTime();
    } else {
        $('.shop-coundown-cont').css('display', 'none');
        $('.coundown-img').attr('src', 'https://a.vpimg4.com/upload/dop/2019/05/23/58/today_DDp.png');
    }

    // 设置倒计时最终的时间
    // 如果当前时间小于10点，就把倒计时的最终时间设置为10点
    // 如果当前时间大于10点，就把倒计时的最终时间设置为20点
    if (time.getHours() < 10) {
        timer.setHours(10);
        timer.setMinutes(0);
        timer.setSeconds(0);
    } else {
        timer.setHours(20);
        timer.setMinutes(0);
        timer.setSeconds(0);
    }

    // 获取倒计时最终时间的时间戳
    timer = timer.getTime();
    // 设置间隔定时器
    setInterval(showTime, 1000);

    function showTime() {
        // 获取当前时间
        var Nowtime = new Date().getTime();
        var leftTime = timer - Nowtime;  // 获取剩余时间的毫秒数
        //时
        var h = parseInt(leftTime / 1000 / 60 / 60);
        $('#countDown_hour').html('0' + h);
        // 分
        var m = parseInt((leftTime - h * 1000 * 60 * 60) / (1000 * 60));
        if (m < 10) {
            $('#countDown_min').html('0' + m);
        } else {
            $('#countDown_min').html(m);
        }
        //秒
        var s = parseInt((leftTime - (h * 60 * 60 * 1000 + m * 60 * 1000)) / 1000);
        if (s < 10) {
            $('#countDown_sec').html('0' + s);
        } else {
            $('#countDown_sec').html(s);
        }
    }

    // 楼层跳跃

    //要求
    //1 当页面滚动到女装品牌距离顶部的高度时，楼层显示
    //2 点击楼层里面的a,页面滚动到相应楼层
    //3 当页面滚动时,当前被滚到的楼层的a标签获取curr类名

    // 获取元素
    var nav = $('#index-nav-wrap');
    var aNav = nav.find('a');  //find() 方法返回被选元素的后代元素
    var product = $('#shop-sort .band-wrap'); //获取所有类型品牌
    $(window).scroll(function () {
        // 可视化窗口高度
        var winH = $(window).height();
        // 鼠标滚动的距离
        var mouseTop = $(window).scrollTop();

        if (mouseTop >= $('#shop-sort').offset().top) {
            $('.index-nav-sort').css('display', 'block');
            product.each(function () {
                if (mouseTop > $(this).offset().top + $(this).height()) {
                    aNav.removeClass('curr');
                    aNav.eq($(this).index()).addClass('curr');
                }
            })
        } else {
            $('.index-nav-sort').css('display', 'none');
        }
        aNav.click(function () {
            var t = product.eq($(this).index()).offset().top;
            $('body,html').animate({
                "scrollTop": t
            }, 10);
            $(this).addClass('curr').siblings().removeClass('curr');
        })
    })

    // 登录之后一跳转index就要展示该用户的用户名，隐藏请登录和注册这两个li
    function getUser() {
        var item = localStorage.getItem('phone');
        return JSON.parse(item);
    }
    showUser()
    function showUser() {
        var user = getUser();
        if (user > 0) {
            $('.user-phone').empty();
            $('.user-phone').show();
            $('.wp-user').hide();
            $('.register-user').hide();

            $('#head_log').append(`
                <li class="user-phone">
                    <a href="javascript:;">你好,${user}</a>
                </li>`)
        } else {
            $('.user-phone').hide();
            $('.wp-user').show();
            $('.register-user').show();
        }
    }
})
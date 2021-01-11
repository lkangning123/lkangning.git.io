$(function () {
    // 接收本地存储里面的值，并把值赋给相应的标签
    function show() {
        $('.pic-slider-items img').attr('src', localStorage.getItem('img'));
        $('.pib-title-detail').attr('title', localStorage.getItem('name'));
        $('.pib-title-detail').html(localStorage.getItem('name'));
        $('.sp-price').html(localStorage.getItem('price'));
        $('.marketPrice').html(localStorage.getItem('originalPrice'));
        $('.sp-discount').html(localStorage.getItem('discount'));
        $('.finalPrice_price').html(localStorage.getItem('price'));
    }
    show()
    $('.ui-quantity').on('click', 'a', function () {
        if (this.className == 'num-add') {
            // 第一个加号把值隐式转换成number类型
            $('.num-input').html(+$('.num-input').html() + 1);
            $('.num-reduce').removeClass('z-disable');
        } else {
            $('.num-input').html($('.num-input').html() - 1);
            if ($('.num-input').html() < 2) {
                $('.num-reduce').addClass('z-disable');
                $('.num-input').html(1);
            }
        }
    })
    // 点击抢购按钮，获取数据，并用数组的形式存储到本地中
    function getCart() {
        var list = localStorage.getItem('cart') || "[]"; //字符串
        return JSON.parse(list);
    }
    function setCart(arr) {
        localStorage.setItem('cart', JSON.stringify(arr))
    }
    $('.i-button').click(function () {
        var product = {
            num: $('.num-input').html(),
            img: $('.pic-slider-items img').attr('src'),
            name: $('.pib-title-detail').html(),
            price: $('.sp-price').html()
        }
        // 先获取原来的商品列表数组
        var productList = getCart();
        // 把新商品添加进去
        productList.push(product);//如果有同name商品，不能直接push，要把num增加
        // 存回本地存储
        setCart(productList)
        location.href = "./cart.html";
    })
})


$(function(){
 // 公共方法
 function getCart(){
    var list = localStorage.getItem('cart')||"[]"; //字符串
    return JSON.parse(list);
}
function setCart(arr){
    localStorage.setItem('cart',JSON.stringify(arr))
}
// 1 购物车页面一打开就要展示该用户的购物车商品列表
showList()
function showList(){
    var productList = getCart();
    if(productList.length<1){
        $('.cart-wrapper').hide();
        $('.m-cart-tips').show();
        return;
    }
    $('.cart-wrapper').show();
    $('tbody').empty();
    $('.m-cart-tips').hide();
    $.each(productList,function(index,item){
        console.log(productList)
        $('tbody').append(`<tr class="J_goods_item z-order-checked">
                <td class="product-item">
                    <div class="m-product">
                        <div class="u-checkbox J_checkbox z-checkbox-checked">
                            <input name="supplier_id" type="checkbox" checked="checked"
                                class="J_supplier" id="orders_checkbox_1">
                            <label for="orders_checkbox_1" class="simulate"></label>
                        </div>
                        <div class="product-pic product-pic-trigger J_tooltips_trigger">
                            <a href="./detail.html">
                                <img width="74" height="74"
                                    alt="${item.name}"
                                    src="${item.img}">
                            </a>
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">
                                <a href="./detail.html"
                                    title="${item.name}">${item.name}</a>
                            </h3>
                            <p class="product-size">尺码：S</p>
                        </div>
                    </div>
                </td>
                <td class="price-item">
                    <div class="m-price">
                        <span class="u-yen">¥</span>
                        <span class="u-price">${item.price}</span>
                    </div>
                </td>
                <td class="quantity-item">
                    <!-- 数量组件 -->
                    <div title="请选择购买数量" class="amount-num">
                        <span class="amount-reduce z-disable">-</span>
                        <em class="J_cart_num">1</em>
                        <span class="amount-add">+</span>
                    </div>
                </td>
                <td class="actions-item">
                    <div class="m-order-del">
                        <a class="order-button-del" href="javascript:;">删除</a>
                        <div class="ui-tooltips">
                            <div class="ui-tooltips-arrow">
                                <span class="arrow arrow-out">◆</span>
                                <span class="arrow">◆</span>
                            </div>
                            <div class="ui-tooltips-content">
                                <p class="tooltips-text">
                                    删除需要重新使用优惠券并重选赠品哦~要删除吗？</p>
                                <div class="ui-tooltips-command">
                                    <a href="javascript:;" class="ui-btn-mini ui-btn-del">删除</a>
                                    <a href="javascript:;"
                                        class="ui-btn-mini ui-btn-default">先留着</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>`)
    })
}

// 2 用户点击+或者-可以修改当前商品的数量
$('tbody').on('click', 'span', function () {
    console.log()
    if ($(this).attr('class') == 'amount-add') {
        console.log(34343)
        // 第一个加号把值隐式转换成number类型
        $(this).prev('.J_cart_num').html(+$(this).prev('.J_cart_num').html() + 1);
        $(this).prevAll('.amount-reduce').removeClass('z-disable');
    } else if ($(this).attr('class') == 'amount-reduce') {
        console.log($(this).next('.J_cart_num').html() - 1)
        $(this).next('.J_cart_num').html($(this).next('.J_cart_num').html() - 1);
        if ($(this).next('.J_cart_num').html() < 2) {
            $(this).addClass('z-disable');
            $(this).next('.J_cart_num').html(1);
        }
    }
})
// 3 用户点击删除可以删除当前商品,删除完成后要重新渲染table/h2

// 4 点击选中，结算价格
})
// 从product.json里面把数据拿出来渲染到页面
$(function () {
    (async function getData() {
        // 发送ajax请求，获取数据
        var data = await $.ajax({
            url: './api/product.json',
            method: 'get',
            data: {
                key: ""
            },
            dataType: "json",
        })

        var contentStr = ""
        for (var i = 0; i <= data.length - 1; i++) {
            var shop = data[i];

            contentStr += `<div class="goods-item">
                <a href = "./detail.html" >
                    <div class="goods-item-top">
                        <img class="goods-item_img" src="${shop.img}">
                    </div>
                    <div class="goods-item-bottom">
                        <div class="goods-item_price">
                            <div class="goods-item_main-price">
                                <div class="goods-item_price-label">
                                     <span class="goods-item_price-label-text">特卖价</span>
                                </div>
                                <span class="goods-item_sale-price-zi">¥</span>
                                <div class="goods-item_sale-price">${shop.price}</div>
                                <div class="goods-item_market-price"><span>¥</span>${shop.originalPrice}
                            </div>
                                <div class="goods-item_discount">${shop.discount}折</div>
                            </div>
                        </div>
                        <div class="goods-item_name">${shop.name}</div>
                        <ul class="goods-item_pms-tag-wrap">
                            <li class="goods-item_pms-tag">
                                <img class="goods-item_pms-tag-flag" src="http://h2.appsimg.com/a.appsimg.com/upcb/2019/07/22/79/1563800953710.png">
                                 <span>唯品国际</span>
                            </li>
                        </ul>
                    </div>
                </a>
            </div>`;
        }
        $('.product-list').append(contentStr);
        // 点击.goods-item把值拿出来存储到本地
        $('.product-list').on('click', '.goods-item', function () {
            localStorage.setItem('img', $(this).find('.goods-item_img').attr('src'));
            localStorage.setItem('price', $(this).find('.goods-item_sale-price').html());
            localStorage.setItem('originalPrice', $(this).find('.goods-item_market-price').html());
            localStorage.setItem('discount', $(this).find('.goods-item_discount').html());
            localStorage.setItem('name', $(this).find('.goods-item_name').html());
            // 跳转到详情页
            location.href='./detail.html';
        })
    })()
})
<div class="container">
        <header>
            <div class="header-content">
                <h4>Welcome to Luxury</h4>
                <h1>Trân trọng mỗi khoảnh khắc</h1>
                <p>Mỗi người đàn ông cần một chiếc đồng hồ tốt, chắc chắn.
                    Đồng hồ yêu thích của tôi là Rolex của Tổng thống.
                    Tôi sở hữu nhiều đồng hồ, nhưng cái này thường là cái trên cổ tay của tôi.</p>
                <button class="more">Xem thêm</button>
                <button class="cart">Đặt hàng</button>
            </div>
            <div class="banner">
                <img src="Image/imge-banner.jpg" alt="">
                <!-- <div class="points">
                    <div class="point-active"></div>
                    <div class="point"></div>
                    <div class="point"></div>
                    <div class="point"></div>
                </div> -->
            </div>
        </header>
        <article>
            <center>
                <section class="promotion">
                    <div class="free-shipping">
                        <i class="fas fa-shipping-fast"></i>
                        <div class="free-shipping">
                            <h4>Miễn phí giao hàng</h4>
                            <p> Khi đặt hàng trên toàn quốc</p>
                        </div>
                    </div>
                    <div class="support">
                        <i class="fas fa-life-ring"></i>
                        <div>
                            <h4>Hỗ trợ 24/7</h4>
                            <p> Liên hệ bất kỳ lúc nào</p>
                        </div>
                    </div>
                    <div class="safe">
                        <i class="fas fa-shield-alt"></i>
                        <div>
                            <h4>Thanh toán an toàn</h4>
                            <p>Thanh toán nhanh chóng</p>
                        </div>
                    </div>
                </section>
            </center>
            <section class="watch-brand">
                <h1>Đồng hồ hiệu</h1>
                <div class="brands">
                    <img src="Image/img-watch-brand1.png" alt="">
                    <img src="Image/img-watch-brand2.png" alt="">
                    <img src="Image/img-watch-brand3.png" alt="">
                    <img src="Image/img-watch-brand4.png" alt="">
                    <img src="Image/img-watch-brand5.png" alt="">
                </div>
                <center>
                    <button onclick="pre()" class="left"><i class="fas fa-arrow-left"></i></button>
                    <button onclick="next()" class="right"><i class="fas fa-arrow-right"></i></button>
                </center>
                <script>
                    function next() {
                        var slide = document.getElementsByClassName('brands')[0].children;
                        for (let i = 0; i < document.getElementsByClassName('brands')[0].children.length; i++) {
                            document.getElementsByClassName('brands')[0].children[i].style.animation = "";
                        }
                        setTimeout(function () {
                            for (let i = 0; i < document.getElementsByClassName('brands')[0].children.length; i++) {
                                document.getElementsByClassName('brands')[0].children[i].style.animation = "move-img-next 0.5s ease-in-out 1 forwards";
                            }
                            document.getElementsByClassName('brands')[0].appendChild(slide[0]);
                        }, 200);
                    }
                    function pre() {
                        var slide = document.getElementsByClassName('brands')[0].children;
                        for (let i = 0; i < document.getElementsByClassName('brands')[0].children.length; i++) {
                            document.getElementsByClassName('brands')[0].children[i].style.animation = "";
                        }
                        setTimeout(function () {
                            for (let i = 0; i < document.getElementsByClassName('brands')[0].children.length; i++) {
                                document.getElementsByClassName('brands')[0].children[i].style.animation = "move-img-pre 0.5s ease-in-out 1 forwards";
                            }
                            document.getElementsByClassName('brands')[0].prepend(slide[slide.length - 1]);
                        }, 200);
                    }
                </script>
                <script src="Homepage.js"></script>
            </section>
            <section class="products-catalog">
                <div class="parent-catalog">
                    <h1>Mới</h1>
                    <div class="catalogs">
                        <p onclick="products_new()">Mới</p>
                        <p onclick="products_hot()">Thịnh hành</p>
                        <p onclick="products_bestsale()">Bán chạy</p>
                        <p onclick="products_sale()">Khuyến mãi</p>
                    </div>
                </div>
                <div class="products">
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product1.png" alt="">
                            </center>
                            <div class="product-icons">
                                <i class="fa fa-shopping-cart cart"></i>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Omega Constellation</p>
                            <div class="ratting">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">452,088,000đ</p>
                            <button>Giỏ hàng</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product2.png" alt="">
                            </center>
                            <div class="product-icons">
                                <i class="fa fa-shopping-cart cart"></i>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Versace V-Tribute</p>
                            <div class="ratting">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">30,350,000đ</p>
                            <button>Giỏ hàng</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product3.png" alt="">
                            </center>
                            <div class="product-icons">
                                <i class="fa fa-shopping-cart cart"></i>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Omega Constellation </p>
                            <div class="ratting">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">535,626,000đ</p>
                            <button>Giỏ hàng</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product1.png" alt="">
                            </center>
                            <div class="product-icons">
                                <i class="fa fa-shopping-cart cart"></i>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Omega Constellation</p>
                            <div class="ratting">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">452,088,000đ</p>
                            <button>Giỏ hàng</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product2.png" alt="">
                            </center>
                            <div class="product-icons">
                                <i class="fa fa-shopping-cart cart"></i>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Versace V-Tribute</p>
                            <div class="ratting">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">30,350,000đ</p>
                            <button>Giỏ hàng</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product3.png" alt="">
                            </center>
                            <div class="product-icons">
                                <i class="fa fa-shopping-cart cart"></i>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Omega Constellation </p>
                            <div class="ratting">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">535,626,000đ</p>
                            <button>Giỏ hàng</button>
                        </div>
                    </div>
                </div>
                <center>
                    <button onclick="pre1()" class="left"><i class="fas fa-arrow-left"></i></button>
                    <button onclick="next1()" class="right"><i class="fas fa-arrow-right"></i></button>
                </center>
            </section>
            <section class="slogan">
                <img class="img-hight" src="Image/Image-slogan1.jpg" alt="">
                <img class="img-low" src="Image/Image-slogan2.jpg" alt="">
                <div class="slogan-bg">
                    <h1 class="slogan-text">Hãy có khoảng thời gian tuyệt vời với chiếc đồng hồ hoàn hảo</h1>
                </div>
            </section>
            <section class="list-products">
                <div class="top-rate">
                    <h1>Đánh giá cao</h1>
                    <div class="item-product">
                        <div class="item-img">
                            <img src="Image/img-bestsale2.jpg" alt="">
                        </div>
                        <div class="item-info">
                            <p class="name-item">Omega Constellation</p>
                            <p class="price-item">$3300</p>
                        </div>
                    </div>
                    <div class="item-product">
                        <div class="item-img">
                            <img src="Image/img-bestsale3.jpg" alt="">
                        </div>
                        <div class="item-info">
                            <p class="name-item">FREDERIQUE CONSTANT</p>
                            <p class="price-item">$4200 <span>$4500</span></p>
                        </div>
                    </div>
                    <div class="item-product">
                        <div class="item-img">
                            <img src="Image/img-bestsale4.jpg" alt="">
                        </div>
                        <div class="item-info">
                            <p class="name-item">IWC BIG PILOT'S</p>
                            <p class="price-item">$2200</p>
                        </div>
                    </div>
                </div>
                <div class="luxury">
                    <h1>Cao cấp</h1>
                    <div class="item-product">
                        <div class="item-img">
                            <img src="Image/img-hot4.jpg" alt="">
                        </div>
                        <div class="item-info">
                            <p class="name-item">STUHRLING ORIGINAL</p>
                            <p class="price-item">$15000</p>
                        </div>
                    </div>
                    <div class="item-product">
                        <div class="item-img">
                            <img src="Image/img-hot2.jpg" alt="">
                        </div>
                        <div class="item-info">
                            <p class="name-item">CALVIN KLEIN INFINITE</p>
                            <p class="price-item">$17500</p>
                        </div>
                    </div>
                    <div class="item-product">
                        <div class="item-img">
                            <img src="Image/img-hot6.jpg" alt="">
                        </div>
                        <div class="item-info">
                            <p class="name-item">HAMILTON JAZZMASTER</p>
                            <p class="price-item">$14300</p>
                        </div>
                    </div>
                </div>
                <div class="noibat">
                    <h1>Nổi bật</h1>
                    <div class="item-product">
                        <div class="item-img">
                            <img src="Image/img-new6.jpg" alt="">
                        </div>
                        <div class="item-info">
                            <p class="name-item">Omega Constellation</p>
                            <p class="price-item">$3500 <span>$4000</span></p>
                        </div>
                    </div>
                    <div class="item-product">
                        <div class="item-img">
                            <img src="Image/img-new5.jpg" alt="">
                        </div>
                        <div class="item-info">
                            <p class="name-item">FREDERIQUE CONSTANT</p>
                            <p class="price-item">$5200</p>
                        </div>
                    </div>
                    <div class="item-product">
                        <div class="item-img">
                            <img src="Image/img-new2.jpg" alt="">
                        </div>
                        <div class="item-info">
                            <p class="name-item">CALVIN KLEIN INFINITE</p>
                            <p class="price-item">$6400 <span>$6600</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <script>
                function next1() {
                    var slide = document.getElementsByClassName('products')[0].children;
                    for (let i = 0; i < document.getElementsByClassName('products')[0].children.length; i++) {
                        document.getElementsByClassName('products')[0].children[i].style.animation = "";
                    }
                    setTimeout(function () {
                        for (let i = 0; i < document.getElementsByClassName('products')[0].children.length; i++) {
                            document.getElementsByClassName('products')[0].children[i].style.animation = "move-img-next 0.5s ease-in-out 1 forwards";
                        }
                        document.getElementsByClassName('products')[0].appendChild(slide[0]);
                    }, 200);
                }
                function pre1() {
                    var slide = document.getElementsByClassName('products')[0].children;
                    for (let i = 0; i < document.getElementsByClassName('products')[0].children.length; i++) {
                        document.getElementsByClassName('products')[0].children[i].style.animation = "";
                    }
                    setTimeout(function () {
                        for (let i = 0; i < document.getElementsByClassName('products')[0].children.length; i++) {
                            document.getElementsByClassName('products')[0].children[i].style.animation = "move-img-pre 0.5s ease-in-out 1 forwards";
                        }
                        document.getElementsByClassName('products')[0].prepend(slide[slide.length - 1]);
                    }, 200);
                }
            </script>
            
            
            <section class="watch-knowledge">
                <h1>Kiến thức đồng hồ</h1>
                <div class="knowledge">
                    <div class="knowledge-main">
                        <img src="Image/img-knowledge-main.jpg" alt="">
                        <h1>Đồng hồ mạ vàng có bền không</h1>
                        <p>Hiện nay các dòng đồng hồ mạ vàng đang rất được <br>
                            sang trọng cho người đeo thu hút hơn.</p>
                    </div>
                    <div class="knowledge-sub1">
                        <img src="Image/img-knowledge1.jpg" alt="">
                        <div class="text-knowledge">
                            <h1>Open Heart Là Gì? </h1>
                            <p>Mẫu đồng hồ Open Heart đang được rất nhiều người quan tâm.
                                Để hiểu rõ hơn đồng hồ</p>
                        </div>
                        <button>Xem thêm</button>
                    </div>
                    <div class="knowledge-sub2">
                        <img src="Image/img-knowledge2.jpg" alt="">
                        <div class="text-knowledge">
                            <h1>Cho người mới bắt đầu</h1>
                            <p>Nếu bạn muốn tìm mua chiếc đồng hồ đầu tiên nhưng không biết bắt đầu từ đâu? </p>
                        </div>
                        <button>Xem thêm</button>
                    </div>
                    <div class="knowledge-sub3">
                        <img src="Image/img-knowledge3.jpg" alt="">
                        <div class="text-knowledge">
                            <h1>Đồng hồ thế giới</h1>
                            <p>Đồng hồ GMT là gì? Cùng khám phá các thuật ngữ về đồng
                                Worldtimer, đồng hồ GMT</p>
                        </div>
                        <button>Xem thêm</button>
                    </div>
                </div>
            </section>
            <h1 class="title-news">Tin tức</h1>
            <center>
                <section class="news">
                    <div class="box-news1">
                        <img src="Image/image-news5.png" alt="">
                        <div class="content-news1">
                            <h1>
                                Bulova
                            </h1>
                            <span>Bulova ra mắt đồng hồ</span>
                            <p>Bulova Classic Wilton GMT mới công bố vừa qua mang đến</p>
                        </div>
                    </div>
                    <div class="box-news2">
                        <div class="content-news2">
                            <h1>
                                Gucci
                            </h1>
                            <span>BST Đồng Hồ Gucci</span>
                            <p>Bulova Classic Wilton GMT mới <br> công bố vừa qua mang đến</p>
                        </div>
                        <img src="Image/image-new4.png" alt="">
                    </div>
                    <div class="box-news3">
                        <div class="content-news3">
                            <h1>
                                Versace
                            </h1>
                            <span>Top 10 Dòng Đồng Hồ Versace</span>
                            <p>Versace là một trong những thương hiệu thời <br> trang cao cấp bậc nhất thế giới</p>
                        </div>
                        <img src="Image/image-news2.png" alt="">
                    </div>
                    <div class="box-news4">
                        <div class="content-news4">
                            <h1>
                                Bvlgari
                            </h1>
                            <span>6 Thương Hiệu Đồng Hồ Ý</span>
                            <p>Thương hiệu đồng hồ Ý <br> hoàn toàn mới</p>
                        </div>
                        <img src="Image/image-news6.png" alt="">

                    </div>
                </section>
            </center>
        </article>
    </div>
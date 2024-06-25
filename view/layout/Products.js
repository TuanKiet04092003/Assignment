function male(a) {
    console.log('aaaaaaa');
    var but = document.getElementsByClassName('search-suggestion-all')[0].children;
    console.log(but.length);
    for (let i = 0; i < but.length; i++) {
        but[i].style.backgroundColor = 'white';
        but[i].style.color = ' #B83E34';
    }
    a.style.backgroundColor = '#B83E34';
    a.style.color = 'white';
    document.getElementsByClassName('Page-products-big')[0].innerHTML=`
    <h1>Đồng hồ nam</h1>
                <div class="man-watch">
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product1.png" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Omega Constellation</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">452,088,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product2.png" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Versace V-Tribute</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">30,350,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product3.png" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Omega Constellation </p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">535,626,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                </div>
    
    `;
}
function female(a) {
    console.log('aaaaaaa');
    var but = document.getElementsByClassName('search-suggestion-all')[0].children;
    console.log(but.length);
    for (let i = 0; i < but.length; i++) {
        but[i].style.backgroundColor = 'white';
        but[i].style.color = ' #B83E34';
    }
    a.style.backgroundColor = '#B83E34';
    a.style.color = 'white';
    document.getElementsByClassName('Page-products-big')[0].innerHTML=`
    <h1>Đồng hồ nữ</h1>
                <div class="man-watch">
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-female1.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Fossil Harwell</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">6,084,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-female2.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Versace Eon Red</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">26,275,920đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-female3.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Vacheron Constantin</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">545,706,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                </div>
    
    `;
}
function couple(a) {
    console.log('aaaaaaa');
    var but = document.getElementsByClassName('search-suggestion-all')[0].children;
    console.log(but.length);
    for (let i = 0; i < but.length; i++) {
        but[i].style.backgroundColor = 'white';
        but[i].style.color = ' #B83E34';
    }
    a.style.backgroundColor = '#B83E34';
    a.style.color = 'white';
    document.getElementsByClassName('Page-products-big')[0].innerHTML=`
    <h1>Đồng hồ đôi</h1>
                <div class="man-watch">
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-couple1.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Fossil BQ2643SET</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">8,604,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-couple2.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Fossil BQ2661SET</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">7,335,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-couple3.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Fossil His and Her</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">70,626,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                </div>
    
    `;
}
function search_all(a) {
    console.log('aaaaaaa');
    var but = document.getElementsByClassName('search-suggestion-all')[0].children;
    console.log(but.length);
    for (let i = 0; i < but.length; i++) {
        but[i].style.backgroundColor = 'white';
        but[i].style.color = ' #B83E34';
    }
    a.style.backgroundColor = '#B83E34';
    a.style.color = 'white';
    document.getElementsByClassName('Page-products-big')[0].innerHTML=`
    <h1>Đồng hồ nam</h1>
                <div class="man-watch">
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product1.png" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Omega Constellation</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">452,088,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product2.png" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Versace V-Tribute</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">30,350,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/Product3.png" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Omega Constellation </p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">535,626,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                </div>
                <h1>Đồng hồ nữ</h1>
                <div class="man-watch">
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-female1.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Fossil Harwell</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">6,084,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-female2.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Versace Eon Red</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">26,275,920đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-female3.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Vacheron Constantin</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">545,706,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                </div>
                <h1>Đồng hồ đôi</h1>
                <div class="man-watch">
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-couple1.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Fossil BQ2643SET</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">8,604,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-couple2.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Fossil BQ2661SET</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">7,335,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image-product">
                            <center>
                                <img src="Image/img-couple3.jpg" alt="">
                            </center>
                            <div class="product-icons">
                                <a href="Cart.html"><i onclick="getInfoCart(this)"
                                        class="fa fa-shopping-cart cart"></i></a>
                                <i class="fas fa-heart heart"></i>
                                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
                            </div>
                        </div>
                        <div class="content-product">
                            <p class="name-product">Fossil His and Her</p>
                            <div class="rating">
                                <i class="fa fa-star star1"></i>
                                <i class="fa fa-star star2"></i>
                                <i class="fa fa-star star3"></i>
                                <i class="fa fa-star star4"></i>
                                <i class="fa fa-star star5"></i>
                            </div>
                            <p class="price-product">70,626,000đ</p>
                            <button>Mua</button>
                        </div>
                    </div>
                </div>
    
    `;
}
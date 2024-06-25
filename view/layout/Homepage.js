var login = localStorage.getItem('login');
if (login == 'true') {
    document.getElementsByClassName('nav-icons')[0].children[2].innerHTML = `<a href="taikhoan.html"><img src="Image/Image-customer.jpg" alt=""></a>`;
    document.getElementsByClassName('nav-icons')[0].children[2].href = '#';

}
function signout(){
    var subMenu=document.getElementsByClassName('sub-menu-signout')[0];
    if (subMenu.style.display === 'none') {
        subMenu.style.display = 'flex';
    } else {
        subMenu.style.display = 'none';
    }
}
function signoutLogin(){
    localStorage.setItem('login',false);
}
document.getElementsByClassName('parent-catalog')[0].children[0].innerHTML='Mới';
    var catalog=document.getElementsByClassName('parent-catalog')[0].children[1].children;
    for(let i=0;i<catalog.length;i++){
        catalog[i].style.color='gray';
    }
    catalog[0].style.color='black';
    var products=document.getElementsByClassName('products-catalog')[0].children[1];
    console.log(products);
    products.innerHTML='';
    var namestart=['FREDERIQUE CONSTANT','IWC BIG PILOT’S','STUHRLING ORIGINAL','CALVIN KLEIN INFINITE','FREDERIQUE CONSTANT','HAMILTON JAZZMASTER'];
    var price=[2500,1300,3300,6000,4500,7200];
    var strproducts='';
    for(let i=0;i<6;i++){
        strproducts+=`<div class="product">
        <div class="image-product">
            <center>
                <img src="Image/img-new${i+1}.jpg" alt="">
            </center>
            <div class="product-icons">
                <i class="fa fa-shopping-cart cart"></i>
                <i class="fas fa-heart heart"></i>
                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
            </div>
        </div>
        <div class="content-product">
            <p class="name-product">${namestart[i]}</p>
            <div class="ratting">
                <i class="fa fa-star star1"></i>
                <i class="fa fa-star star2"></i>
                <i class="fa fa-star star3"></i>
                <i class="fa fa-star star4"></i>
                <i class="fa fa-star star5"></i>
            </div>
            <p class="price-product">$${price[i]}.00</p>
            <button>Giỏ hàng</button>
        </div>
    </div>`;
    }
    products.innerHTML=strproducts;
function products_new(){
    document.getElementsByClassName('parent-catalog')[0].children[0].innerHTML='Mới';
    var catalog=document.getElementsByClassName('parent-catalog')[0].children[1].children;
    for(let i=0;i<catalog.length;i++){
        catalog[i].style.color='gray';
    }
    catalog[0].style.color='black';
    var products=document.getElementsByClassName('products-catalog')[0].children[1];
    console.log(products);
    products.innerHTML='';
    var name=['FREDERIQUE CONSTANT','IWC BIG PILOT’S','STUHRLING ORIGINAL','CALVIN KLEIN INFINITE','FREDERIQUE CONSTANT','HAMILTON JAZZMASTER'];
    var price=[2500,1300,3300,6000,4500,7200];
    var strproducts='';
    for(let i=0;i<6;i++){
        strproducts+=`<div class="product">
        <div class="image-product">
            <center>
                <img src="Image/img-new${i+1}.jpg" alt="">
            </center>
            <div class="product-icons">
                <i class="fa fa-shopping-cart cart"></i>
                <i class="fas fa-heart heart"></i>
                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
            </div>
        </div>
        <div class="content-product">
            <p class="name-product">${name[i]}</p>
            <div class="ratting">
                <i class="fa fa-star star1"></i>
                <i class="fa fa-star star2"></i>
                <i class="fa fa-star star3"></i>
                <i class="fa fa-star star4"></i>
                <i class="fa fa-star star5"></i>
            </div>
            <p class="price-product">$${price[i]}.00</p>
            <button>Giỏ hàng</button>
        </div>
    </div>`;
    }
    products.innerHTML=strproducts;
}
function products_hot(){
    document.getElementsByClassName('parent-catalog')[0].children[0].innerHTML='Thịnh hành';
    var catalog=document.getElementsByClassName('parent-catalog')[0].children[1].children;
    for(let i=0;i<catalog.length;i++){
        catalog[i].style.color='gray';
    }
    catalog[1].style.color='black';
    var products=document.getElementsByClassName('products-catalog')[0].children[1];
    console.log(products);
    products.innerHTML='';
    var name=['FREDERIQUE CONSTANT','IWC BIG PILOT’S','STUHRLING ORIGINAL','CALVIN KLEIN INFINITE','FREDERIQUE CONSTANT','HAMILTON JAZZMASTER'];
    var price=[3000,2300,1500,5600,4700,6200];
    var strproducts='';
    for(let i=0;i<6;i++){
        strproducts+=`<div class="product">
        <div class="image-product">
            <center>
                <img src="Image/img-hot${i+1}.jpg" alt="">
            </center>
            <div class="product-icons">
                <i class="fa fa-shopping-cart cart"></i>
                <i class="fas fa-heart heart"></i>
                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
            </div>
        </div>
        <div class="content-product">
            <p class="name-product">${name[i]}</p>
            <div class="ratting">
                <i class="fa fa-star star1"></i>
                <i class="fa fa-star star2"></i>
                <i class="fa fa-star star3"></i>
                <i class="fa fa-star star4"></i>
                <i class="fa fa-star star5"></i>
            </div>
            <p class="price-product">$${price[i]}.00</p>
            <button>Giỏ hàng</button>
        </div>
    </div>`;
    }
    products.innerHTML=strproducts;
}
function products_bestsale(){
    document.getElementsByClassName('parent-catalog')[0].children[0].innerHTML='Bán chạy';
    var catalog=document.getElementsByClassName('parent-catalog')[0].children[1].children;
    for(let i=0;i<catalog.length;i++){
        catalog[i].style.color='gray';
    }
    catalog[2].style.color='black';
    var products=document.getElementsByClassName('products-catalog')[0].children[1];
    console.log(products);
    products.innerHTML='';
    var name=['FREDERIQUE CONSTANT','IWC BIG PILOT’S','STUHRLING ORIGINAL','CALVIN KLEIN INFINITE','FREDERIQUE CONSTANT','HAMILTON JAZZMASTER'];
    var price=[6500,12000,7300,2600,4800,2900];
    var strproducts='';
    for(let i=0;i<6;i++){
        strproducts+=`<div class="product">
        <div class="image-product">
            <center>
                <img src="Image/img-bestsale${i+1}.jpg" alt="">
            </center>
            <div class="product-icons">
                <i class="fa fa-shopping-cart cart"></i>
                <i class="fas fa-heart heart"></i>
                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
            </div>
        </div>
        <div class="content-product">
            <p class="name-product">${name[i]}</p>
            <div class="ratting">
                <i class="fa fa-star star1"></i>
                <i class="fa fa-star star2"></i>
                <i class="fa fa-star star3"></i>
                <i class="fa fa-star star4"></i>
                <i class="fa fa-star star5"></i>
            </div>
            <p class="price-product">$${price[i]}.00</p>
            <button>Giỏ hàng</button>
        </div>
    </div>`;
    }
    products.innerHTML=strproducts;
}
function products_sale(){
    document.getElementsByClassName('parent-catalog')[0].children[0].innerHTML='Khuyến mãi';
    var catalog=document.getElementsByClassName('parent-catalog')[0].children[1].children;
    for(let i=0;i<catalog.length;i++){
        catalog[i].style.color='gray';
    }
    catalog[3].style.color='black';
    var products=document.getElementsByClassName('products-catalog')[0].children[1];
    console.log(products);
    products.innerHTML='';
    var name=['FREDERIQUE CONSTANT','IWC BIG PILOT’S','STUHRLING ORIGINAL','CALVIN KLEIN INFINITE','FREDERIQUE CONSTANT','HAMILTON JAZZMASTER'];
    var price=[1400,1600,2000,1700,2500,3000];
    var price_old=[1500,1800,1900,3000,3300]
    var strproducts='';
    for(let i=0;i<6;i++){
        strproducts+=`<div class="product">
        <div class="image-product">
            <center>
                <img src="Image/img-new${i+1}.jpg" alt="">
            </center>
            <div class="product-icons">
                <i class="fa fa-shopping-cart cart"></i>
                <i class="fas fa-heart heart"></i>
                <a href="Detail.html"><i onclick="getInfoDetail(this)" class="fas fa-info info"></i></a>
            </div>
        </div>
        <div class="content-product">
            <p class="name-product">${name[i]}</p>

            <div class="ratting">
                <i class="fa fa-star star1"></i>
                <i class="fa fa-star star2"></i>
                <i class="fa fa-star star3"></i>
                <i class="fa fa-star star4"></i>
                <i class="fa fa-star star5"></i>
            </div>
            <p class="price-product">$${price[i]}.00<span>$${price_old[i]}.00</span></p>
            <button>Giỏ hàng</button>
        </div>
    </div>`;
    }
    products.innerHTML=strproducts;
}



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Homepage.css">
    <link rel="shortcut icon" href="/view/layout/Image/Logo.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />

    <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
        rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Alice:regular" rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
        rel="stylesheet">

    <title>Homepage</title>
</head>

<body>
    <nav>
        <img src="/view/layout/Image/Logo.png" height="60px">
        <div class="menu">
            <a href="Index.html">Trang chủ</a>
            <a href="#">Thương hiệu</a>
            <a href="Products.html">Sản phẩm</a>
            <a href="donhang.html">Đơn hàng</a>
            <a href="Contact.html">Liên hệ</a>
        </div>
        <div class="nav-icons">
            <a href="#"><i class="fa fa-search"></i></a>
            <a href="Cart.html"><i class="fa fa-shopping-cart"></i></a>
            <a href="Login.html"><i class="fa fa-user"></i></a>
            <i class="fas fa-bars icon-sub-menu" onclick="appear()"></i>
        </div>
    </nav>
    <div class="sub-menu">
        <a href="Index.html">Trang chủ</a>
        <a href="#">Thương hiệu</a>
        <a href="Products.html">Sản phẩm</a>
        <a href="donhang.html">Đơn hàng</a>
        <a href="Contact.html">Liên hệ</a>
    </div>
    <div class="sub-menu-signout">
        <a href="#">Quản lý</a>
        <a href="#">Lịch sử</a>
        <a onclick="signoutLogin()" href="Index.html">Đăng suất</a>
    </div>
    <script>
        var subMenu = document.getElementsByClassName('sub-menu')[0];
        function appear() {
            if (subMenu.style.display === 'none') {
                subMenu.style.display = 'block';
            } else {
                subMenu.style.display = 'none';
            }
        }

    </script>
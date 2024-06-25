<?php

   ob_start();

   include_once "model/connectdb.php";
   include_once "model/product.php";

  // connectdb();

  
//   echo var_dump($dssp);


   include_once "view/header.php";

   // index.php?pg=products&idcatalog=1&kyw=cavat

   if(isset($_GET['pg'])&&($_GET['pg']!="")){
      $pg=$_GET['pg'];
      switch ($pg) {
         case 'shop':
            include_once "view/shop.php";
            break;
         case 'productdetail':
            if(isset($_GET['idproduct'])&&($_GET['idproduct']>0)){
               $idproduct=$_GET['idproduct'];
               $detail=getproductdetail($idproduct);
               $idcatalog=getidcatalog($idproduct);
               $related=getrelatedproduct($idproduct,$idcatalog);
               include_once "view/productdetail.php";
            }else{
               header('location: index.php');
            }
            
            break;
         case 'blog':
            include_once "view/blog.php";
            break;
         case 'aboutus':
            include_once "view/aboutus.php";
            break;
         case 'contactus':
            include_once "view/contactus.php";
            break;
         
         default:
            $newproduct=getproducthome();
            $saleproduct=getproducthome_promo();
            $viewproduct=getproducthome_view();
            include_once "view/home.php";
            break;
      }
   }else{
      $newproduct=getproducthome();
      $saleproduct=getproducthome_promo();
      $viewproduct=getproducthome_view();
      include_once "view/home.php";
   }

   

   include_once "view/footer.php";
?>
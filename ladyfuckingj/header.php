<!DOCTYPE html>
<html lang="<?php bloginfo('language') ?>">

<head>
    <meta charset="<?php bloginfo('charset') ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Egercsehi Általános Iskola</title>
    <?php
    wp_head();
    ?>
</head>

<body>
    <div class="container">
        <header class="header">
            <div class="header-text">
                <h1>EGERCSEHI ZRÍNYI ILONA</h1>
                <h2>ÁLTALÁNOS ISKOLA</h2>
            </div>
            <div class="mobile-header">
                 <svg>
                     <use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite4.svg#icon-menu3' ?>">
                 </svg>
            </div>
        </header>
        <div class="header-navbar">
            <div class="header-navbar_collection">
                <div class="header-navbar_collection--box" id="home">
                    <svg>
                            <use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-home' ?>"></use>
                        </svg>
                    <span>Kezdőlap</span>
                </div>

                <div class="header-navbar_collection--box" id="school">
                    <svg>
                            <use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-office' ?>"></use>
                        </svg>
                    <span>Iskolánk</span>
                </div>

                <div class="header-navbar_collection--box" id="documents">
                   <svg>
                            <use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-profile' ?>"></use>
                        </svg>
                    <span>Dokumentumok</span>
                </div>

                <div class="header-navbar_collection--box" id="events">
                    <svg>
                            <use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-file-text' ?>"></use>
                        </svg>
                    <span>Rendezvények</span>
                </div>

                <div class="header-navbar_collection--box" id="comp">
                    <svg>
                            <use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-pencil' ?>"></use>
                        </svg>
                    <span>Pályázatok</span>
                </div>

                <div class="header-navbar_collection--box" id="contact">
                    <svg>
                            <use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-mobile' ?>"></use>
                        </svg>
                    <span>Elérhetőség</span>
                </div>


                <!-- <a href="fuckyou.html"><svg><use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-office' ?>"></use></svg>Iskolánk</a>
                <a href="fuckyou.html"><svg><use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-profile' ?>"></use></svg>Dokumentumok</a>
                <a href="fuckyou.html"><svg><use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-file-text' ?>"></use></svg>Rendezvények</a>
                <a href="fuckyou.html"><svg><use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-pencil' ?>"></use></svg>Pályázatok</a>
                <a href="fuckyou.html"><svg><use xlink:href="<?php echo get_template_directory_uri() . '/assets/image/sprite.svg#icon-mobile' ?>"></use></svg>Elérhetőség</a> -->
            </div>
        </div>
    
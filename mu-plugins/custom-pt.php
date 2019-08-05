<?php
function custom_posts_types(){
    //Our school
    register_post_type('school',array(
        'show_in_rest'=>true,
        'supports'=>array('title','editor','thumbnail'),
        'menu_icon'=>'dashicons-welcome-learn-more',
        'public'=>true,
        'labels'=>array(
            'name'=>'Our school',
            'add_new_item'=>'Add new schoolinfo',
            'edit_item'=>"Edit schoolinfo",
            'all_items'=>'All schoolinfos',
            'singular_name'=>'Schoolinfo'
        )
        ));

        //Documents

        register_post_type('documents',array(
            'show_in_rest'=>true,
            'supports'=>array('title','editor','thumbnail'),
            'menu_icon'=>'dashicons-format-aside',
            'public' =>true,
            'labels'=>array(
                'name'=>'Documents',
                'add_new_item'=>'Add new Document',
                'edit_item'=>"Edit Document",
                'all_items'=>'All Documents',
                'singular_name'=>'Documents'

            )
        ));
        //Events
        register_post_type('events',array(
            'show_in_rest'=>true,
            'supports'=>array('title','editor','thumbnail'),
            'menu_icon'=>'dashicons-calendar-alt',
            'public' =>true,
            'labels'=>array(
                'name'=>'Event',
                'add_new_item'=>'Add new Event',
                'edit_item'=>"Edit Event",
                'all_items'=>'All Events',
                'singular_name'=>'Event'

            )
        ));

        //Competetion

        register_post_type('comp',array(
            'show_in_rest'=>true,
            'supports'=>array('title','editor','thumbnail'),
            'menu_icon'=>'dashicons-welcome-write-blog',
            'public' =>true,
            'labels'=>array(
                'name'=>'Competetion',
                'add_new_item'=>'Add new Competetion',
                'edit_item'=>"Edit Competetion",
                'all_items'=>'All Competetions',
                'singular_name'=>'Competetion'

            )
        ));

        //Contact
        register_post_type('contact',array(
            'show_in_rest'=>true,
            'supports'=>array('title','editor','thumbnail'),
            'menu_icon'=>'dashicons-phone',
            'public'=>true,
            'labels'=>array(
                'name'=>'Contact',
                'add_new_item'=>'Add new Contact',
                'edit_item'=>"Edit Contact",
                'all_items'=>'All Contacts',
                'singular_name'=>"Contact"
            )
        ));
       //News
       register_post_type('news',array(
        'show_in_rest'=>true,
        'supports'=>array('title','editor','thumbnail'),
        'menu_icon'=>'dashicons-megaphone',
        'public'=>true,
        'labels'=>array(
            'name'=>'New',
            'add_new_item'=>'Add new New',
            'edit_item'=>"Edit New",
            'all_items'=>'All News',
            'singular_name'=>"News"
        )
    ));
    //Student
    register_post_type('student',array(
        'show_in_rest'=>true,
        'supports'=>array('title','editor','thumbnail'),
        'menu_icon'=>'dashicons-info',
        'public'=>true,
        'labels'=>array(
            'name'=>'Student',
            'add_new_item'=>'Add new Student',
            'edit_item'=>"Edit Student",
            'all_items'=>'All Students',
            'singular_name'=>"Student"
        )
    ));
    //Gallery
    register_post_type('gallery',array(
        'show_in_rest'=>true,
        'supports'=>array('title','editor','thumbnail'),
        'menu_icon'=>'dashicons-format-image',
        'public'=>true,
        'labels'=>array(
            'name'=>'Picture',
            'add_new_item'=>'Add new Picture',
            'edit_item'=>"Edit Picture",
            'all_items'=>'All Pictures',
            'singular_name'=>"Picture"
        )
    ));
    //Sub-comp
    register_post_type('subcomp',array(
        'show_in_rest'=>true,
        'supports'=>array('title','editor','thumbnail'),
        'menu_icon'=>'dashicons-media-document',
        'public'=>true,
        'labels'=>array(
            'name'=>'Sub-Competetion',
            'add_new_item'=>'Add new Sub',
            'edit_item'=>"Edit Subs",
            'all_items'=>'All Subs',
            'singular_name'=>"Sub-Competetion"
        )
    ));

    //Home
    register_post_type('home',array(
        'show_in_rest'=>true,
        'supports'=>array('title','editor','thumbnail'),
        'menu_icon'=>'dashicons-admin-home',
        'public'=>true,
        'labels'=>array(
            'name'=>'Home',
            'add_new_item'=>'Add new home',
            'edit_item'=>"Edit home",
            'all_items'=>'All home',
            'singular_name'=>"Home"
        )
    ));

}

add_action('init','custom_posts_types');
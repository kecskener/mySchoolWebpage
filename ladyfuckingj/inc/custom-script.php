<?php
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

add_action('wp_enqueue_scripts','custom_script');
add_theme_support( 'post-thumbnails' );

function custom_script(){
    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/main.css');
    wp_enqueue_style('font-style', '//fonts.googleapis.com/css?family=Lato&display=swap');
    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main-bundle.js', array('jquery'), null, true);
    wp_dequeue_style('wp-block-library');
    wp_localize_script('main-js', 'refData', array(
        'root_url' => get_site_url(),
        'nonce' => wp_create_nonce('wp_rest')
    ));
}

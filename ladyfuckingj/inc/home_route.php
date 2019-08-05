<?
function register_home(){
   register_rest_route('ref/v2','home',array(
        'methods'=>'GET',
        'callback'=>'ourhome'
    ));
}
function ourhome(){
    $home=new WP_Query(array(
        'post_type'=>'home'
    ));
    $result=array(
        'home'=>array()
    );
    while($home->have_posts()){
        $home->the_post();
        array_push($result['home'],array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'content' => get_the_content(),
            'image' => wp_get_attachment_url(get_post_thumbnail_ID(get_the_ID()))
        ));
    }
    return $result;
}
add_action('rest_api_init','register_home');
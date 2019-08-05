<?
function register_gallery(){
    register_rest_route('ref/v2','gallery',array(
        'methods'=>'GET',
        'callback'=>'ourgallery'
    ));
}
function ourgallery($data){
    $gallery=new WP_Query(array(
        'post_type'=>'gallery'
    ));
    $result=array(
        'gallery'=>array()
    );
    while($gallery->have_posts()){
        $gallery->the_post();
        array_push($result['gallery'],array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'content' => get_the_content(),
            'image' => wp_get_attachment_url(get_post_thumbnail_ID(get_the_ID()))
        ));
    }
    return $result;
}
add_action('rest_api_init','register_gallery');
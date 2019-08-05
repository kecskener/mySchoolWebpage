<?
function register_subcomp(){
    register_rest_route('ref/v2','subcomp',array(
        'methods'=>'GET',
        'callback'=>'subcomp'
    ));
}
function subcomp(){
    $comp=new WP_Query(array(
        'post_type'=>'subcomp'
    ));
    $result=array(
        'subcomp'=>array()
    );
    while($comp->have_posts()){
        $comp->the_post();
        array_push($result['subcomp'],array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'content' => get_the_content(),
            'image' => wp_get_attachment_url(get_post_thumbnail_ID(get_the_ID()))
        ));
    }
    return $result;
}
add_action('rest_api_init','register_subcomp');
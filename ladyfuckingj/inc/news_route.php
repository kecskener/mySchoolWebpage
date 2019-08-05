<?
function register_news(){
    register_rest_route('ref/v2','news',array(
        'methods'=>'GET',
        'callback'=>'ournews'
    ));
}
function ournews($data){
    $news=new WP_Query(array(
        'post_type'=>'news'
    ));
    $result=array(
        'news'=>array()
    );
    while($news->have_posts()){
        $news->the_post();
        array_push($result['news'],array(
            'id' => get_the_ID(),
            'title'=>get_the_title(),
            'content'=>get_the_content()
        ));
    }
    return $result;
}
add_action('rest_api_init','register_news');
<?
function register_events(){
    register_rest_route('ref/v2','events',array(
        'methods'=>'GET',
        'callback'=>'get_events'
    ));
}
function get_events($data){
    $events=new WP_Query(array(
        'post_type'=>'events'
    ));
    $result=array(
        'events'=>array()
    );
    while($events->have_posts()){
        $events->the_post();
        array_push($result['events'],array(
            'id' => get_the_ID(),
            'title'=>get_the_title(),
            'content'=>get_the_content()
        ));
    }
    return $result;
}
add_action('rest_api_init','register_events');
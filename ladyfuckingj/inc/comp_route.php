<?
function register_comp(){
    register_rest_route('ref/v2','comp',array(
        'methods'=>'GET',
        'callback'=>'ourcomp'
    ));
}
function ourcomp($data){
    $comp=new WP_Query(array(
        'post_type'=>'comp'
    ));
    $result=array(
        'comp'=>array()
    );
    while($comp->have_posts()){
        $comp->the_post();
        array_push($result['comp'],array(
            'id' => get_the_ID(),
            'title'=>get_the_title(),
            'content'=>get_the_content(),
            'time'=>current_time('mysql')
        ));
    }
    return $result;
}
add_action('rest_api_init','register_comp');
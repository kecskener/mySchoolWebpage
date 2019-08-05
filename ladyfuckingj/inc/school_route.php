<?
function register_school(){
    register_rest_route('ref/v2','school',array(
        'methods'=>'GET',
        'callback'=>'ourschool'
    ));
}
function ourschool(){
    $school=new WP_Query(array(
        'post_type'=>'school'
    ));
    $result=array(
        'school'=>array()
    );
    while($school->have_posts()){
        $school->the_post();
        array_push($result['school'],array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'content' => get_the_content(),
            'image' => wp_get_attachment_url(get_post_thumbnail_ID(get_the_ID()))
        ));
    }
    return $result;
}
add_action('rest_api_init','register_school');
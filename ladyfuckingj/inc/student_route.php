<?
function register_student(){
    register_rest_route('ref/v2','student',array(
        'methods'=>'GET',
        'callback'=>'ourstudent'
    ));
}
function ourstudent($data){
    $student=new WP_Query(array(
        'post_type'=>'student'
    ));
    $result=array(
        'student'=>array()
    );
    while($student->have_posts()){
        $student->the_post();
        array_push($result['student'],array(
            'id' => get_the_ID(),
            'title'=>get_the_title(),
            'content'=>get_the_content()
        ));
    }
    return $result;
}
add_action('rest_api_init','register_student');
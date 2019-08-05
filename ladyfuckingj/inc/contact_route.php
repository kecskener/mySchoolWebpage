<?
function register_contact(){
    register_rest_route('ref/v2','contact',array(
        'methods'=>'GET',
        'callback'=>'ourcontact'
    ));
}
function ourcontact($data){
    $contact=new WP_Query(array(
        'post_type'=>'contact'
    ));
    $result=array(
        'contact'=>array()
    );
    while($contact->have_posts()){
        $contact->the_post();
        array_push($result['contact'],array(
            'id' => get_the_ID(),
            'title'=>get_the_title(),
            'content'=>get_the_content()
        ));
    }
    return $result;
}
add_action('rest_api_init','register_contact');
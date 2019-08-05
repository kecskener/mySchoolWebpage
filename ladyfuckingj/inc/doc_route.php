<?
function register_documents(){
    register_rest_route('ref/v2','documents',array(
        'methods'=>'GET',
        'callback'=>'get_documents'
    ));
}
function get_documents($data){
    $documents=new WP_Query(array(
        'post_type'=>'documents'
    ));
    $result=array(
        'documents'=>array()
    );
    while($documents->have_posts()){
        $documents->the_post();
        array_push($result['documents'],array(
            'id' => get_the_ID(),
            'title'=>get_the_title(),
            'content'=>get_the_content()
        ));
    }
    return $result;
}
add_action('rest_api_init','register_documents');
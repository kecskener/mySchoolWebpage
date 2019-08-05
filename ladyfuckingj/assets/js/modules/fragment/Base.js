import $ from 'jquery';
import OldBase from "./OldBase";
import List from './List';

class Base extends OldBase{
    constructor() {
        super();
        
        this.content = $('.content');
    }
    addEventDynamic(name,idName,data) {
     
    
        $(document).on('click','#' + idName,()=>this.listHandler(name,data));
    }

    listHandler(name,data) {
   
        new List(name).build(data);
    
    }
}

export default Base;
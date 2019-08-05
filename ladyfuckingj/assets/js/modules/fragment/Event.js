import Base from './Base';
import Spinner from './Spinner';

class Event extends Base {
    constructor() {
        super();
;
    }
    build(param) {
      this.makeEmpty();
     
      param.map(item=>{
        this.content.append(
          `<h1 class='contact_title' id='evnt${item.id}'>${item.title}</h1>`
           ); 
         });         
      
      
    }   
   
}

export default Event;
import Base from './Base';

class Contact extends Base {
    constructor() {
        super();
    }
    build(param) {
        this.makeEmpty();
        param.map(item=>{
         this.content.append(
         `<h1 class='contact_title' id='cont${item.id}'>${item.title}</h1>
            <div class="contact">${item.content}</div>`
        ); 
      });       
    }
}

export default Contact;
import Base from './Base';

class Students extends Base {
    constructor() {
        super();
    }
    build(param){
        this.makeEmpty();
        this.content.append('<h1 class="contact_title">Diákok</h1>')
        param.map(item=>{
            this.content.append(
                ``
         ); 
        });     
    }
}

export default Students;
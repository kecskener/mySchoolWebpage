import Base from './Base';

class Gallery extends Base {
    constructor() {
        super();

    }
    build(param){
        this.makeEmpty();
        this.content.append('<h1 class="contact_title">Galéria</h1>')
        param.map(item=>{
            this.content.append(
                ``
         ); 
        });       

    }
}

export default Gallery;
import Base from './Base';

class Competition extends Base {
    constructor() {
        super();  
    }
    build(param) {
        this.makeEmpty();
        this.content.append(`<h1 class="docHeader">Pályázatok</h1>`);
        param.map(item=>{
        this.content.append(`
            <h1 class="comp" id='list${item.id}'>${item.title}</h1>            
         `);
         this.addEventDynamic("comp","list"+item.id,item);
     });              
    }

}

export default Competition;
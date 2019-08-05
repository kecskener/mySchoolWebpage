import Base from './Base';

class News extends Base {
    constructor() {
        super();

    }
    build(param){
        this.makeEmpty();
        this.content.append('<h1 class="newsHeader">Hírek</h1>');
        param.map(item=>{
        this.content.append(
         `<h1 class='news' id='news${item.id}'>${item.title}</h1>
         `
         ); 
         this.addEventDynamic("news","news"+item.id,item);
        });     
    }
}

export default News;
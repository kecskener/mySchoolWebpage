import OldBase from './OldBase';

class Spinner extends OldBase{
    constructor(){
        super();
    }
   build(){
       this.makeEmpty();
       this.content.addClass("content__loader");
       this.content.append(`
       <div class="loader">
               Kaka
       </div>
       `);
       
   }
}

export default Spinner;

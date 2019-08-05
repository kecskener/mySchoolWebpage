import OldBase from './OldBase';
import Button from './Button';

import $ from 'jquery';
import instance from '../container/Container';
import Factory from '../container/Factory';
class List extends OldBase {
    constructor(name) {
        super();
        this.name = name;
    }
    build(param) {
        this.makeEmpty();
        this.content.append(
            `<div id="school" class="school_content">${param.content} 
                ${new Button(this.name,"btn").btn}
            </div>`,

        );
        //document.getElementById(this.name + "_btn").addEventListener('click', this.backHandler);
        $( "#" + this.name + "_btn").on('click',this.backHandler.bind(this));
    }
 
    backHandler() {
        console.log(this.name);
        this.makeEmpty();
        new Factory().build(this.name).build(instance.item[this.name]);
    }


}
export default List;
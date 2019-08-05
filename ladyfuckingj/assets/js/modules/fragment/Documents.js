import Base from './Base';
import Doc from './Doc';
import Link from './Link';
import UList from './UList';


class Documents extends Base {
    constructor() {
        super();
    }
    build(param) {
        this.makeEmpty();
        this.content.append(`<h1 class="docHeader">Iskolánk dokumentumai</h1>`);
        let docArray=[];
        param.map(item=>{
            let content=item.content;
            if(item.content.includes("<p>")){
                content=content.replace("<p>","");
                content=content.replace("</p>","");
            }
             docArray.push(new Doc('doc',new Link('docLink',item.title,content).link).list);
        })
        this.content.append(new UList("docList",docArray.join('')).container);

    }
}

export default Documents;
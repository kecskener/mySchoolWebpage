import Base from './Base';
import Card from './Card';
import $ from 'jquery';
import CardDetails from './CardDetails';


class School extends Base {
    constructor() {
        super();
    }

    build(param) {
        this.makeEmpty();
        let schoolArray = [];
        param.map(item => {
            schoolArray.push(new CardDetails(item).detail);
            this.addEventDynamic("school", "list" + item.id, item);
        })
        this.content.append(new Card(schoolArray.join('')).card);

    }

}

export default School;
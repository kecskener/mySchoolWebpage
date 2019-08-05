import $ from 'jquery';


class OldBase {
    constructor() {
        this.content = $('.content');
    }
    makeEmpty() {
        this.content.removeClass("content__loader");
        this.content.html(``);
    }

}

export default OldBase;
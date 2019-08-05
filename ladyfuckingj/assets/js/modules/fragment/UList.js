import OldBase from "./OldBase";

export default class UList extends OldBase{
    constructor(className,item){
        super();
        this.container= `<ul class="${className}">${item}</ul>`;
    }  


}
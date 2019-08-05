export default class Link{
    constructor(className,item,href){
        this.link= `<a class="${className}" href="${href}">${item}</a>`;
    }  
}
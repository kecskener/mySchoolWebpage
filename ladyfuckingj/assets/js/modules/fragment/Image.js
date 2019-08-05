export default class Img{
    constructor(item,active){
        let className="img1"
        if(active){
            className+=" active"
        }
        this.pic=`<img class="${className}" src="${item}">`
    }
}
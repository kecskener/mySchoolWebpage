export default class CardDetails{
    constructor(item){
        this.detail=`<div class="card">
            <img class="card--photo" src=${item.image} alt="picture">
            <div class="card__front">
            <h1 class="card__front--title">${item.title}</h1>
            <button id=list${item.id} class="readmore__btn">Tovább</button></div>
        </div>
  `
    }
}


export default class Button{
    constructor(idName,className){

        this.className=className;
        this.id=idName;
        this.btn= `<button id=${idName}_btn class=${className} >Vissza</button>`;
    }  
   
}



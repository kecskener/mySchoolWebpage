import Base from "./Base";



class Home extends Base{
    constructor(){
        super();
        //this.active=true;
    }
    build(param){
      this.makeEmpty();
      param.map(item=>{
          this.content.append(`
            <div class="home">${item.content}</div>
          `);
      })
    }
}

export default Home;
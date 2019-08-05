import $ from 'jquery';
import Component from './Component';


class Header extends Component {
    constructor(){
         super(); 
      
    }
    events(){
        $(window).on('load',()=>this.handler("home"));
        $('#school').on('click',()=>this.handler("school"))
         $('#documents').on('click',()=>this.handler("documents"));
         $('#events').on('click', ()=>this.handler("events"));
         $('#contact').on('click',()=>this.handler("contact"));
         $('#comp').on('click', ()=>this.handler("comp"));
         $('#home').on('click',()=>this.handler("home"));
         $('.mobile-header').on('click', ()=>{
             $('.header-navbar').slideToggle(2000);
         });
    }
}

export default Header;
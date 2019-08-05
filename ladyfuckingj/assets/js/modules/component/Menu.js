import $ from 'jquery';
import Component from './Component';
import Bell from '../fragment/Bell';


class Menu extends Component{
    constructor(){
        super();
        this.alarm={},
        this.color= true,
        this.init();
     
    }

    events(){
      
        $('#news').on('click',()=>this.handler("news"));
        $('#student').on('click',()=>this.handler("student"));
        $('#gallery').on('click',()=>this.handler("gallery"));
        $('.menu__bottom--btn').on('click',()=>{
           if(this.color){
            document.documentElement.style.setProperty('--lazy-pink', '#2F5C59');
            document.documentElement.style.setProperty('--hover', '#66FF99');
                this.color=false;
           }else{
            document.documentElement.style.setProperty('--lazy-pink', '#E66A6A');
            document.documentElement.style.setProperty('--hover', 'black');
            this.color = true;
        }
         
        })
        $(".alarm").on('click',()=>{
            
            let time =new Date();
            console.log(time);
            if(this.dayReceiver(time.getDay())  || this.hourHandler(time)){
                this.seeInterval();
            }

            console.log($(window).height());
            $(".bell").slideToggle(2000);

            //new Bell().build();
        })
        $('.menu-x').on('click', ()=>{
            $(".bell").slideToggle(2000);
        })
    }


    seeInterval(time){
      console.log(time);
      Object.values(this.alarm).map(item => {
        //console.log(item);
          if(item.start>=time && item.end<=time){
            console.log(item);
        }
           
      });
    }

   
    dayReceiver(day){
        if(day>=1 && day <6){
            return true;
        }
        return false;
    }
    hourHandler(time){
        //console.log(this.alarm.firstHour.start);
        //console.log(time);
        if(this.alarm.firstHour.start<time){
            return true;
        }
        return false;
    }
    init(){
        
        this.alarm={
            firstHour:{
                start:new Date().setHours(7,0,0),
                end:new Date().setHours(8,45,0),
                id:"8pm"
            },
            secondHour:{
                start:new Date().setHours(8,55,0),
                end:new Date().setHours(9,40,0),
                id:"9pm"
            },
            thirdHour:{
                start:new Date().setHours(9,55,0),
                end:new Date().setHours(10,40,0),
                id:"10pm"
            },
            fourthHour:{
                start:new Date().setHours(10,50,0),
                end:new Date().setHours(11,35,0),
                id:"11pm"
            },
            fifthHour:{
                start:new Date().setHours(11,45,0),
                end:new Date().setHours(12,30,0),
                id:"12pm"
            },
            sixthHour:{
                start:new Date().setHours(12,35,0),
                end:new Date().setHours(13,20,0),
                id:"13pm"
            },
            seventhHour:{
                start:new Date().setHours(13,30,0),
                end:new Date().setHours(14,15,0),
                id:"14pm"
            }
        }
    }

}


export default Menu;
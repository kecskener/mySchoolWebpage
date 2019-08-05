import $ from "jquery";

class Bell{
  constructor(){
      
  }

  build(){
      $('.container').append(`<div class="modal">
      <h1 class="menu__list--title">Csengetési rend:</h1>
      <div class="menu__list--static" id="8pm">1.óra 8:00-8:45</div>
      <div class="menu__list--static" id="9pm">2.óra 8:55-9:40</div>
      <div class="menu__list--static" id="10pm">3.óra 9:55-10:40</div>
      <div class="menu__list--static" id="11pm">4.óra 10:50-11:35</div>
      <div class="menu__list--static" id="12pm">5.óra 11:45-12:30</div>
      <div class="menu__list--static" id="13pm">6.óra 12:35-13:20</div>
      <div class="menu__list--static" id="14pm">7.óra 13:30-14:15</div>
  </div>`)
  }
}

export default Bell;
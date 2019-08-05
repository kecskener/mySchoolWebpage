import School from '../fragment/School';
import Documents from '../fragment/Documents';
import Contact from '../fragment/Contact';
import Competition from '../fragment/Competition';
import Event from '../fragment/Event';
import Home from '../fragment/Home';
import News from '../fragment/News';
import Students from '../fragment/Students';
import Gallery from '../fragment/Gallery';
import Spinner from '../fragment/Spinner';

class Container{

    constructor(){
        this.spinner=new Spinner();
        this.school=new School();
        this.doc=new Documents();
        this.events=new Event();
        this.contact=new Contact();
        this.comp=new Competition();
        this.news=new News();
        this.students=new Students();
        this.gallery=new Gallery();
        this.home=new Home();
        this.item = {
            school: {},
            documents: {},
            events: {},
            comp: {},
            contact: {},
            news: {},
            student: {},
            gallery: {},
            home:{}
        }
        if(!Container.instance){

            Container.instance=this;
        }
        
    }
}
const instance=new Container();
Object.freeze(instance); 

export default instance;


import $ from 'jquery';
import Factory from '../container/Factory';
import instance from '../container/Container';



class Component {
    constructor() {
        this.events();
    }

    events() {

    }

    handler(data) {
        let factory = new Factory();
        if ($.isEmptyObject(instance.item[data])) {
            factory.build("spinner").build();

            $.when(this.getData(data).done(() => {
                factory.build(data).build(instance.item[data])

            })).catch(() => {
                console.log("err");
            });

        }else{
            factory.build(data).build(instance.item[data])
        }


    }


    // loadData() {
    //     let factory=new Factory();
    //     factory.build("spinner").build();
    //     const keys = Object.keys(instance.item);


    //             $.when(this.getData(keys[i])).done(() => {
    //                 if(keys[i]==="home"){
    //                     new Factory().build(keys[i]).build(instance.item[keys[i]]);
    //                 }

    //             }).catch(()=>{
    //                 console.log("err");
    //             })



    // }

    getData(name) {
        const data = $.ajax({
            type: 'GET',
            url: refData.root_url + '/wp-json/ref/v2/' + name,
            dataType: 'JSON'

        });
        data.done(data => {
            let temp = this.reverseArray(data[name]);
            instance.item[name] = temp;

        });

        data.fail(data => {
            console.log(data);
        });

        return data;

    }
    reverseArray(array) {
        return array.slice(0).reverse();
    }

}

export default Component;
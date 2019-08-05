import instance from './Container';

class Factory {
    constructor() {

    }

    build(name) {
        switch (name) {
            case "spinner":
                return instance.spinner;
            case "school":
                return instance.school;
            case "documents":
                return instance.doc;
            case "events":
                return instance.events;
            case "contact":
                return instance.contact;
            case "comp":
                return instance.comp;
            case "news":
                return instance.news;
            case "student":
                return instance.students;
            case "gallery":
                return instance.gallery;
            case "home":
                return instance.home;
            default:
                break;
        }
    }
    getData() {
        return instance.item;
    }
}

export default Factory;
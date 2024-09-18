import './components/indexPadre';
import { workers } from './data/data';
import MyWorkers, { Attributes } from './components/Mycomponents/mycomponents';

class AppContainer extends HTMLElement {
    person: MyWorkers[] = [];

    constructor(){
        super();
        this.attachShadow({mode:'open'});

        workers.forEach((user) => {
            const workerCard = this.ownerDocument.createElement("app-card") as MyWorkers;
            workerCard.setAttribute(Attributes.image, user.image);
            workerCard.setAttribute(Attributes.name, user.name);
            workerCard.setAttribute(Attributes.uid, String(user.id));
            workerCard.setAttribute(Attributes.age, String(user.age));
            workerCard.setAttribute(Attributes.gender, user.gender);
            workerCard.setAttribute(Attributes.area, user.jobDetails.area);
            workerCard.setAttribute(Attributes.timeInCompany, String(user.jobDetails.timeInCompany));
            workerCard.setAttribute(Attributes.experience, String(user.jobDetails.experience));
            this.person.push(workerCard);
        });
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.person.forEach((person) => {
                this.shadowRoot?.appendChild(person);
            });
        }
    }
};
customElements.define('app-container', AppContainer);
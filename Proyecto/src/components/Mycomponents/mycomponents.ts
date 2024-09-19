export enum Attributes {
    'image' = 'image',
    'name' = 'name',
    'uid' = 'uid',
    'age' = 'age',
    'gender' = 'gender',
    'area' = 'area',
    'position' = 'position',
    'timeincompany' = 'timeincompany',
    'experience' = 'experience'

}
class AppCard extends HTMLElement {
    image?: string;
    name?: string;
    uid?: number;
    age?: number;
    gender?: string;
    area?: string;
    position?: string;
    timeincompany?: number;
    experience?: number;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return Object.keys(Attributes);
    }
    attributeChangedCallback(propName:Attributes, oldValue:string | undefined, newValue:string | undefined){
        switch(propName){
            case Attributes.uid:
                    this.uid = newValue ? Number(newValue) : undefined;
                    break;
            case Attributes.age:
                    this.age = newValue ? Number(newValue) : undefined;
                    break;
            case Attributes.timeincompany:
                    this.timeincompany = newValue ? Number(newValue) : undefined;
                    break;
            case Attributes.experience:
                    this.experience = newValue ? Number(newValue) : undefined;
                    break;

            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
                <img src="${this.image}">
                <h1>${this.name}</h1>
                <h3>${this.uid}</h3>
                <h4>${this.age}</h4>
                <h3>${this.gender}</h3>
                <p>${this.area}</p>
                <p>${this.position}</p>
                <h5>${this.timeincompany}</h5>
                <h5>${this.experience}</h5>
            </section>
            `
            
        }
    }
}
customElements.define('app-card',AppCard);
export default AppCard;
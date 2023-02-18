class MyElement extends HTMLElement{
    constructor(){
        super();
        

        const h2 = document.createElement('h2');
        h2.innerHTML = '<h2>mi sentite?</h2>';
        h2.style.color = 'red';
        h2.style.margin = '20px';
        h2.style.padding = '';
        
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(h2);
    }
}

customElements.define('my-element', MyElement);
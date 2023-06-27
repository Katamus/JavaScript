import modalHtml from './render-modal.html?raw';
import './render-modal.css';
let modal, form;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    modal.addEventListener('click',(event)=>{
        if(event.target.className === 'modal-container'){
            hideModal();
        }
    });

    element.append(modal);

    form.addEventListener('submit',(event) => {
        event.preventDefault();
        console.log('Formulario enviado');
    });

}

export const showModal = () =>{
    modal?.classList.remove('hide-modal');
}

export const hideModal = () =>{
    modal?.classList.add('hide-modal');
}
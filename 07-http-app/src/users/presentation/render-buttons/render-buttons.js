import './render-buttons.css';

import usersStore from "../../store/users-store";
import { renderTable } from '../render-table/render-table';

export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = ' < Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    nextButton.addEventListener('click', async()=>{
        await usersStore.loadNextPage();
        updateHtml();
    })

    const updateHtml = ()  => {
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    }

    prevButton.addEventListener('click', async()=>{
        await usersStore.loadPreviousPage();
        updateHtml();
    });

    element.append(prevButton,currentPageLabel,nextButton);
}
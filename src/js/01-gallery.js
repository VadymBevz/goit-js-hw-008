// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
function createGalleryCardsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>
    `;
    }).join('');
};
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    
    const imageUrl = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);
    
    instance.show();
  }
}
console.log(galleryItems);


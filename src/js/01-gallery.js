// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const gallery = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

new SimpleLightbox(".gallery a",{
  captionDate: "alt",
  captionDelay: 250,
})
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



// function onGalleryItemClick(event) {
  
//   event.preventDefault();

//   if (event.target.classList.contains('gallery__image')) {
    
//     const imageUrl = event.target.dataset.source;
    
//     const instance = basicLightbox.create(`
//       <img src="${imageUrl}" width="800" height="600">
//     `);
    
//     instance.show();
//   }
// }
console.log(galleryItems);


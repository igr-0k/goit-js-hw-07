import { galleryItems } from './gallery-items.js';
// Change code below this line

let itemsGallery = galleryItems;

const galleryTemplate = itemsGallery
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt= "${description}" />
    </a>`;
  })
  .join('');

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', galleryTemplate);

new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: 250 });

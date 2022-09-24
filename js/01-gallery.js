import { galleryItems } from './gallery-items.js';
// Change code below this line

let itemsGallery = galleryItems;

const galleryTemplate = ({ preview, original, description }) =>
  `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    </div>`;

const gallery = document.querySelector('.gallery');

const render = () => {
  const items = itemsGallery.map(item => galleryTemplate(item)).join('');
  gallery.insertAdjacentHTML('beforeend', items);
};
render();

const onClick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  const image = e.target;

  const instance = basicLightbox.create(`
  <img src="${image.dataset.source}"/>
  `);

  instance.show();

  gallery.addEventListener('keydown', closeModal);
  function closeModal(e) {
    if (e.code === 'Escape') {
      instance.close();
      gallery.removeEventListener('keydown', closeModal);
    }
  }
};

gallery.addEventListener('click', onClick);

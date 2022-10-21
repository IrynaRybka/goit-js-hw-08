// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const containerGallery = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", cardsMarkup);
containerGallery.addEventListener("click", onClickSelectImg);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}"/>
         </a>`;
  }).join('');
}

function onClickSelectImg(event) {
  if (event.target.nodeName !== "IMG") {
      return;
    }
    event.preventDefault();
} 

const gallery = new SimpleLightbox('.gallery__item', {
    overlayOpacity: 0.5,
    captionsData: 'alt',
    captionDelay: 250,
}); 
console.log(gallery);
 


// SimpleLightbox('.gallery__item', {
//   overlay: true,
//   overlayOpacity: 0.5,
//   captionsData: "alt",
//   captionDelay: 250,

// });


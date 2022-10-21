import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryIMGItems = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryIMGItems);
// console.log(galleryItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li>
        <a class="gallery__item" href="${original}" >
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title="${description}"
          />
        </a>
      </li>
        `;
    })
    .join("");
}
const gallery = new SimpleLightbox(".gallery a", { captionDelay: "250" });

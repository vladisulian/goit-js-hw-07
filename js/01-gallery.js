import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryIMGItems = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryIMGItems);

function createGalleryItems(galleryItems) {
  //   galleryItems.forEach((element) => {
  //     return `
  //       <div class='gallery-item'>
  //           <img src='${elementoriginal}', alt ='gallery-item'>
  //       </div>
  //       `;
  //   });
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${original}"
          data-source="${preview}"
          alt="${description}"
        />
      </a>
    </div>
        `;
    })
    .join("");
}

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryIMGItems = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryIMGItems);
galleryList.addEventListener("click", onGalleryItemsClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class ="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" 
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
        </a>
      </div>`;
    })
    .join("");
}
function onGalleryItemsClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  // basicLightBox (how to open modal)
  const instance = basicLightbox.create(
    `<img src=${e.target.dataset.source}>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onModalCloseToEscape);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onModalCloseToEscape);
      },
    }
  );
  instance.show();

  function onModalCloseToEscape(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}

// deleted
// function onShow(instance) {
//   document.addEventListener("keydown", onModalCloseToEscape);
// }

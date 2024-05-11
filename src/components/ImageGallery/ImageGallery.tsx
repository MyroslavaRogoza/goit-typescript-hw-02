import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "../App.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  gallery,
  selectedImage,
}) => {
  return (
    <ul className={css.imageGallery}>
      {Array.isArray(gallery) &&
        gallery.map((item) => {
          return (
            <li key={item.id} className={css.imageItem}>
              <ImageCard
                cardPhoto={item.urls.small}
                altDesc={item.alt_description}
                item={item}
                selectedImage={selectedImage}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;

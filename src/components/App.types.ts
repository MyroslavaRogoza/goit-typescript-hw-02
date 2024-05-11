export interface GalleryItem {
  id: string;
  description: string;
  likes: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
}

export interface ImagesData {
  data: {
    results: GalleryItem[];
  };
}

export interface SearchBarProps {
  findImage: (imageName: string) => void;
  cleanGallery: () => void;
  resetPage: () => void;
}

export interface LoadMoreBtnProps {
  loadMoreCounter: () => void;
}
export interface ImageModalItem {
  url: string;
  altDescription: string;
  description: string;
  likes: string;
  author: string;
}
export interface ImageGalleryProps {
  gallery: GalleryItem[];
  selectedImage: (image: ImageModalItem) => void;
}

export interface ImageCardProps {
  cardPhoto: string;
  altDesc: string;
  selectedImage: (image: ImageModalItem) => void;
  item: GalleryItem;
}

export interface ImageModalProps {
  modalImage: ImageModalItem;
  closeModal: () => void;
  modalIsOpen: boolean;
}

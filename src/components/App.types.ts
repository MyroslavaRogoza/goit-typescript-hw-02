export type SearchBarProps = {
  findImage: (imageName: string) => void;
  cleanGallery: () => void;
  resetPage: () => void;
};

export type GalleryItem = {
  id: string;
  urls: {
    small: string;
  };
};

export interface ImageModalItem {
        url: string,
        altDescription: string,
        description: string,
        likes: string,
        author: string,   
}

export interface ImageCardProps extends ImageModalItem {
    selectedImage: (image: ImageModalItem) => void;
    cardPhoto: string;
    altDesc: string;
    
}
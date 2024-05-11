import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import getGalleryByQuery from "../gallery-api";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import WarningWindow from "./WarningWindow/WarningWindow";
import { GalleryItem, ImageModalItem, ImagesData } from "./App.types";

function App() {
  const [imageName, setImageName] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [gallery, setGallery] = useState<GalleryItem[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<ImageModalItem | object>({});

  function loadMoreCounter(): void {
    setPage(page + 1);
  }

  function findImage(image: string): void {
    setImageName(image);
  }
  function resetPage(): void {
    setPage(1);
  }
  useEffect((): void | (() => void) => {
    if (imageName.length === 0) return;
    async function fetchGallery() {
      try {
        setError(false);
        setLoader(true);
        const images: ImagesData = await getGalleryByQuery(imageName, page);
        console.log(images.data.results);
        setGallery((prevGallery: GalleryItem[] | null) => {
          if (prevGallery === null) return [...images.data.results];
          else return [...prevGallery, ...images.data.results];
        });
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchGallery();
  }, [imageName, page]);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  function selectedImage(image: object): void {
    setModalImage(image);
    openModal();
  }

  function cleanGallery(): void {
    setGallery(null);
  }
  return (
    <>
      <SearchBar
        findImage={findImage}
        cleanGallery={cleanGallery}
        resetPage={resetPage}
      />
      <main>
        {gallery && (
          <ImageGallery gallery={gallery} selectedImage={selectedImage} />
        )}
        {loader && <Loader />}
        {error && <ErrorMessage />}
        {gallery && <LoadMoreBtn loadMoreCounter={loadMoreCounter} />}
        <WarningWindow />
        {modalIsOpen && (
          <ImageModal
            modalImage={modalImage}
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
          />
        )}
      </main>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { UnsplashImage } from "../../types";

interface ModalImage {
  url: string;
  alt: string;
}

export default function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<ModalImage>({
    url: "",
    alt: "",
  });
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      if (!query) return;

      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=-wJ9Fwrs9URX_U_m7C3bAOaKrHUM76jPbw8RfF5po6o`
        );
        const data = await response.json();

        setImages((prevImages) => [...prevImages, ...data.results]);

        if (data.results.length < 10) {
          setHasMore(false);
          toast.success("No more images available");
        } else {
          setHasMore(true);
        }
      } catch (error: any) {
        setError(error.message);
        toast.error("Whoops, something went wrong! Please try update page...");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    setHasMore(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Збільшуємо сторінку
  };

  const openModal = (imageUrl: string, imageAlt: string) => {
    setModalImage({ url: imageUrl, alt: imageAlt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && !loading && hasMore && (
        <LoadMoreBtn onClick={handleLoadMore} page={page} />
      )}

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={modalImage.url}
        imageAlt={modalImage.alt}
      />

      <Toaster position="top-left" reverseOrder={true} />
    </div>
  );
}

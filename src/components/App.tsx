import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { getImages } from "./img-api";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { Image } from "./App.types";

interface Responce {
  results:[];
  total: number;
}

export default function App() {
  const [images, setImages] = useState < Image[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalPage, setTotalPage] = useState<boolean>(false);
 const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
 const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");

  
  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
  
  
    async function fetchImages(): Promise<void> {
      try {
        setLoading(true);
        setError(false);

        const resonse: Responce = await getImages(searchQuery, page);
        const { results, total } = resonse;

        setImages((prevState) => [...prevState, ...results]);
        setTotalPage(page < Math.ceil(total / 15));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [searchQuery, page]);

  const handleSearch: (searchImg: string) => Promise<void> = async (
    searchImg) => {
    setSearchQuery(searchImg);
    setPage(1);
    setImages([]);
  };

  const hendleLoadMore: () => Promise<void> = async () => {
    setPage(page + 1);
  };
// modal
    const openModal: (imageUrl: string) => void = (imageUrl) => {
      setSelectedImageUrl(imageUrl);
      setModalIsOpen(true);
    };

  const closeModal: () => void = () => {
    setSelectedImageUrl("");
    setModalIsOpen(false);
  };


  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {totalPage && <LoadMoreBtn onClick={hendleLoadMore} />}

      {loading && <Loader />}

   
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
}

import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import { Image } from "../Image/Image.types";
import style from "./App.module.css";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "Db9yAiAVsvMSTVKWx8Mb2xcfEvDOWciklwXftB0DjwE";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    fetch(
      `${API_URL}?query=${query}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length === 0) {
          setError("No images found for this search term.");
        } else {
          setImages((prev) =>
            page === 1 ? data.results : [...prev, ...data.results]
          );
        }
      })
      .catch(() => setError("Failed to fetch images"))
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div className={style.container}>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} />
      )}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default App;

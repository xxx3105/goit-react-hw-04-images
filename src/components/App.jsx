import React, { useEffect, useState } from 'react';
import { Layout } from './Layout';
import 'modern-normalize';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Container } from 'styles/GlobalStyle';
import { fetchData } from './api';
import { LoaderComp } from './Loader/LoaderComp';

export const App = () => {
  const [images, setImage] = useState([]);
  //const [searchRequest, setSearchReq] = useState(`${Date.now()}/`);
  const [searchRequest, setSearchReq] = useState(``);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getImages() {
      try {
        if (searchRequest) {
          setLoading(true);
          const galleryItems = await fetchData(searchRequest, page);
          setImage(prevImages => [...prevImages, ...galleryItems]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    if (searchRequest) {
      getImages();
    }
  }, [searchRequest, page]);

  const handleSearch = searchText => {
    const newSearchRequest = `${Date.now()}/${searchText}`;
    setSearchReq(newSearchRequest);
    setPage(1);
    setImage([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const hasImages = images.length > 0;
  const shouldDisplayLoadMore = hasImages && !loading && images.length >= 12;

  return (
    <Layout>
      <Container>
        <Searchbar onSearch={handleSearch} />

        {loading ? (
          <LoaderComp />
        ) : (
          <>
            <ImageGallery images={images} />
            {shouldDisplayLoadMore && (
              <Button handleLoadMore={handleLoadMore} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
};

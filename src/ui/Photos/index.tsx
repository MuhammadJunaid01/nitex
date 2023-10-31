import React from "react";
import { useGetPhotosQuery } from "../../redux/apis/photosApiSlice";
import PhotoCard from "./PhotoCard";
import "./Photos.css";
import { Loader } from "..";
const Photos = () => {
  const [page, setPage] = React.useState(2);

  const { data, error, isFetching, isLoading } = useGetPhotosQuery({
    page,
    limit: 40,
  });
  // const data = useLoaderData();

  console.log(error);
  console.log(data);
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <div className="photos">
        {data &&
          data?.map((photo, index) => (
            <PhotoCard
              key={index}
              title={photo.title}
              cardId={photo.id}
              url={photo.thumbnailUrl}
            />
          ))}
      </div>

      <div style={{ display: "flex", gap: 11, justifyContent: "center" }}>
        <button
          className="prev-next-btn"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          className="prev-next-btn"
          onClick={handleNextPage}
          disabled={isFetching}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Photos;

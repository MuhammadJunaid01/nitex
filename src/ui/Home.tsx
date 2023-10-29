import React from "react";
import { useGetPhotosQuery } from "../redux/apis/photosApiSlice";

const Home = () => {
  const [page, setPage] = React.useState(2);

  const { data, error, isFetching } = useGetPhotosQuery({ page, limit: 50 });
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

  return (
    <div>
      <div>
        {/* <ul>
          {data &&
            data?.map((photo) => (
              <li key={photo.id}>
                <img src={photo.url} alt={photo.title} />
              </li>
            ))}
        </ul> */}
        <div>
          <button onClick={handlePrevPage} disabled={page === 1}>
            Previous Page
          </button>
          <button onClick={handleNextPage} disabled={isFetching}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

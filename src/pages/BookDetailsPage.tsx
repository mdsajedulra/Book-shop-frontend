import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../redux/features/api/endpoints/bookApi";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

const BookDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id);
  const user = useAppSelector((state) => state.auth.user);

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  
  if (isError || !book) return <p className="text-center py-10 text-error">Failed to load book.</p>;

  
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={book.data.cover}
            alt={book.data.title}
            className="w-full h-auto rounded shadow"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book.data.title}</h1>
          <h2 className="text-xl text-gray-600 mb-2">by {book.data.author}</h2>
          <p className="text-lg text-green-700 font-semibold mb-2">Price: ${book.data.price}</p>
          <p className="text-sm text-gray-500 mb-2">Category: {book.data.category}</p>
          <p className="text-base text-gray-700 mb-6">{book.data.description || "No description available."}</p>
          <button
            className="btn btn-primary"
            disabled={!book.data.inStock || user?.role=="admin"}
            onClick={() => {
              navigate(`/${user?.role}/checkout/${book.data._id}`);
            }}
          >
           {
            user?.role==="admin"? "Only user can order":"Buy Now"
           }
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
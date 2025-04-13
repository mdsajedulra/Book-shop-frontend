import { Link, useNavigate } from "react-router-dom";
import { useGetBooksQuery } from "../../../redux/features/api/endpoints/bookApi";
type Category =
  | 'Fiction'
  | 'Science'
  | 'SelfDevelopment'
  | 'Poetry'
  | 'Religious';

 interface IBook {
  _id: string
  title: string;
  cover: string;
  author: string;
  price: number;
  category: Category;
  description: string;
  quantity: number;
  inStock: boolean;
}

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const { data: response, isLoading, isError } = useGetBooksQuery();
  console.log(response);
  
  const featuredBooks = Array.isArray(response?.data) ? response.data.slice(0, 6) : [];

  


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  
  if (isError) return <p>Failed to load books.</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Link to="/all-products">
          <button className="btn btn-outline btn-sm">View All</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredBooks.map((book: IBook) => (
          <div key={book._id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={book.cover}
                alt={book.title}
                className="h-110 w-full "
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <div className="card-actions justify-end">
                <button onClick={() => navigate(`book-details/${book._id}`)} className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
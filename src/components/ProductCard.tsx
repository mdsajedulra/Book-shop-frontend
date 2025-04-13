import { Link } from "react-router-dom";

export type TProduct = {
  _id: string;
  cover: string
  title: string;
  author: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const ProductCard = ({ product }: { product: TProduct }) => {
  const { _id, author, title, category, price ,cover} = product;
  return (
    <div className="bg-base-200">
      <div className="px-4 py-6 rounded-lg">
        <div className="space-y-2">
          <div>
            <img src={cover} alt="" />
            </div>
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-3">
            {title}
          </h1>

          <p className="text-sm md:text-base">Author : {author}</p>
          <p className="text-sm md:text-base">Category : {category}</p>
          <p className="text-sm md:text-base">Price : ${price}</p>
          <Link to={`/book-details/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

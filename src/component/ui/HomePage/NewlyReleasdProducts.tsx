import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../../redux/features/api/endpoints/bookApi";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NewlyReleasedProduct = () => {
  const { data: response, isLoading, isError } = useGetBooksQuery();
  console.log(response);

  const featuredBooks = Array.isArray(response?.data)
    ? response.data.slice(6, 12)
    : [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError) return <p>Failed to load books.</p>;

  return (
    <section className=" container mx-auto px-4  bg-gray-100 rounded-2xl">
      {/* <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Pick Your Favourite Books</h2>
        <Link to="/all-products">
          <button className="btn btn-outline btn-sm">View All</button>
        </Link>
      </div> */}

      <div className="">
        <div className="w-full">
          <h1 className="text-2xl font-bold pt-5">Newly Released Product</h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {featuredBooks.map((book, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/5 "
                >
                  <div className="">
                    <Link to={`book-details/${book._id}`}>
                      <Card className="border-0 p-2 my-5 hover:not-focus:bg-gray-50">
                        <CardContent className="flex aspect-square items-center justify-center p-0 ">
                          {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                          <div>
                            <img
                              className="w-50 h-65 rounded-xl mb-3"
                              src={book.cover}
                              alt=""
                            />
                            <h1 className="font-bold">{book.title}</h1>
                            <h3 className="text-xs">{book.author}</h3>
                            <h2 className="font-bold">$ {book.price}</h2>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div>
              <CarouselPrevious className="ml-10 absolute left-11/12 top-0 -translate-y-1/2" />
              <CarouselNext className="absolute right-1/12 top-0 -translate-y-1/2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewlyReleasedProduct;

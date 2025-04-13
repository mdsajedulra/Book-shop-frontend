const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: "Alice Johnson",
        quote: "This book shop is my favorite! Fast delivery and awesome collection.",
        avatar: "/images/user1.jpg",
      },
      {
        id: 2,
        name: "Mark Wilson",
        quote: "I found rare books I couldn’t get anywhere else. 10/10 recommend!",
        avatar: "/images/user2.jpg",
      },
      {
        id: 3,
        name: "Mark Wilson",
        quote: "I found rare books I couldn’t get anywhere else. 10/10 recommend!",
        avatar: "/images/user2.jpg",
      },
    ];
  
    return (
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="italic mb-2">“{t.quote}”</p>
              <span className="font-semibold text-sm text-primary">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
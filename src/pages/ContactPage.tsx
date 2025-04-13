const ContactPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-2">📍 123 Book Street, Booktown, BK 12345</p>
          <p className="mb-2">📞 +123 456 7890</p>
          <p className="mb-2">📧 support@bookshop.com</p>
          <p className="mt-4 text-sm text-gray-600">
            We'd love to hear from you! Whether you have a question about our books, features, pricing, or anything else — our team is ready to help.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            className="textarea textarea-bordered w-full h-32"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
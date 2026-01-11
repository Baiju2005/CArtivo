const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Have a question, feedback, or need support?  
          We’d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Contact Form */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">
            Send us a message
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 px-4 py-2 text-sm outline-none resize-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center bg-black text-white px-6 py-2 text-sm font-medium
                         hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full h-[420px] rounded-lg overflow-hidden border">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=New%20Delhi%20India&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

    </section>
  );
};

export default Contact;

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Heading */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold">
          About Cartivo
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A modern e-commerce platform built for simplicity, speed, and a
          seamless shopping experience.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Text */}
        <div className="space-y-6 animate-slideUp">
          <p className="text-gray-700 leading-relaxed">
            Cartivo is designed to make online shopping effortless. We focus on
            clean design, fast performance, and secure user experiences using
            modern web technologies.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From browsing products to secure checkout, every detail is crafted
            to feel smooth and intuitive — whether you’re shopping on mobile or
            desktop.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This project showcases a scalable React architecture with reusable
            components, global state management, and a minimalist UI philosophy.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white border rounded-lg p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4">
            Tech Stack
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>⚡ React + React Router</li>
            <li>🎨 Tailwind CSS</li>
            <li>🔐 Clerk Authentication</li>
            <li>🗂 Context API</li>
            <li>🛒 FakeStore API</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;

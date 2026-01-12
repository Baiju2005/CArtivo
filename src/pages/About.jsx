import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Cartivo
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Cartivo is a modern e-commerce web application designed to demonstrate
          real-world frontend architecture, scalable state management, and
          user-focused UI/UX using React.
        </p>
      </div>

      {/* TEXT CONTENT */}
      <div className="space-y-6 text-gray-700 leading-relaxed mb-20">
        <p>
          This project is built using <strong>React</strong>, <strong>Tailwind CSS</strong>,
          and <strong>Context API</strong>, following a clean, component-driven
          architecture. The focus is on maintainability, reusability, and
          performance — similar to production-grade frontend applications.
        </p>

        <p>
          Product data is fetched from a REST API using <strong>useEffect</strong>
          and managed globally through Context API, enabling consistent data
          flow, real-time UI updates, and efficient rendering across pages.
        </p>

        <p>
          Core e-commerce features include product listing, filtering, dynamic
          routing for individual product pages, and a fully functional shopping
          cart with quantity management and total price calculation.
        </p>

        <p>
          Special attention is given to user experience through responsive
          layouts, thoughtful empty states, toast notifications, loaders, and
          mobile-first navigation.
        </p>
      </div>

      {/* 🔥 SWIPER UX SECTION */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-center mb-8">
          What This Project Demonstrates
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-3xl mx-auto"
        >
          <SwiperSlide>
            <div className="border rounded-lg p-8 bg-white text-center">
              <h3 className="text-lg font-semibold mb-2">
                Modern React Architecture
              </h3>
              <p className="text-gray-600 text-sm">
                Component-based structure with Context API for global state
                management and clean separation of concerns.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border rounded-lg p-8 bg-white text-center">
              <h3 className="text-lg font-semibold mb-2">
                API-Driven Data Flow
              </h3>
              <p className="text-gray-600 text-sm">
                Dynamic data fetching using useEffect and REST APIs with
                optimized rendering and shared state.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border rounded-lg p-8 bg-white text-center">
              <h3 className="text-lg font-semibold mb-2">
                Real E-Commerce UX
              </h3>
              <p className="text-gray-600 text-sm">
                Product filtering, cart management, loaders, toasts, empty
                states, and smooth client-side routing.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border rounded-lg p-8 bg-white text-center">
              <h3 className="text-lg font-semibold mb-2">
                Responsive & Mobile-First
              </h3>
              <p className="text-gray-600 text-sm">
                Fully responsive layouts with a mobile-first approach and
                accessible navigation patterns.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </section>
  );
};

export default About;

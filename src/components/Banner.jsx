import { useData } from "../context/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Loader from "./Loader";

const Banner = () => {
    const { products, loading } = useData();

    if (loading) return <Loader />;
    if (!products.length) return null;

    const featuredProducts = products.slice(0, 5);

    return (
        <section className="md:relative bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-14">

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    className="w-full"
                >
                    {featuredProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="min-h-[320px] md:min-h-[420px] flex items-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

                                    {/* TEXT */}
                                    <div className="text-center md:text-left">
                                        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
                                            {product.title}
                                        </h1>

                                        <p className="mt-4 text-xl font-semibold">
                                            ${product.price}
                                        </p>

                                        <button className="mt-6 inline-flex items-center gap-2 border border-black px-6 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
                                            Shop Now
                                        </button>
                                    </div>

                                    {/* IMAGE */}
                                    <div className="flex justify-center">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="h-52 md:h-72 object-contain 
             transition-transform duration-300 hover:scale-105
             drop-shadow-[0_35px_35px_rgba(10,10,0.7,0.60)]"
                                        />

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default Banner;

import { useMemo, useState } from "react";
import { useData } from "../context/Data";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Products = () => {
  const { products, loading } = useData();
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Unique categories
  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  // Checkbox handler
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filtered products
  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) return products;
    return products.filter((p) =>
      selectedCategories.includes(p.category)
    );
  }, [products, selectedCategories]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* FILTER SIDEBAR */}
        <aside className="md:col-span-1 bg-white border rounded p-4 h-fit">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="space-y-3">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="accent-black"
                />
                <span className="capitalize">{category}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <section className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Products;

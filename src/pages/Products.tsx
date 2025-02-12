import { useProductStore } from "../store/useProductStore";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const ProductsPage = () => {
  const { products, cart, addToCart, removeFromCart } = useProductStore();

  const navigate = useNavigate();

  const handleAddToCart = (id: number) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      addToCart(product);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    const product = cart.find((product) => product.id === id);
    if (product) {
      removeFromCart(product?.id);
    }
  };

  return (
    <div className="bg-primary p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
            className="bg-secondary rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-primary hover:shadow-xl transition-all duration-300 ease-in-out group"
          >
            <img
              src={product.picture}
              alt={product.name}
              className="w-full h-48 object-cover hover:brightness-75 transition-all duration-300 ease-in-out"
            />
            <div className="p-4">
              <h2 className="text-primary text-xl font-bold mb-2 group-hover:text-button">
                {product.name}
              </h2>
              <p className="text-primary text-sm mb-4 group-hover:text-button">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-primary font-bold group-hover:text-button">
                  ${product.price}
                </p>
                <div className="flex items-center gap-2">
                  <MdDeleteOutline 
                    className="w-[25px] h-[25px] cursor-pointer"
                  />
                  {product.id in cart ? (
                    <IoCartSharp
                      className="w-[25px] h-[25px] cursor-pointer"
                      onClick={(e) => {e.stopPropagation();handleRemoveFromCart(product.id)}}
                    />
                  ) : (
                    <IoCartOutline
                      className="w-[25px] h-[25px] cursor-pointer"
                      onClick={(e) => {e.stopPropagation();handleAddToCart(product.id)}}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

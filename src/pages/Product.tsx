import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore.ts";
import { IoCartOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart,removeProduct } = useProductStore();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Товар не найден</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 p-4 md:p-8">
      <div className="w-full h-50 md:w-1/2 lg:w-1/3 sm:h-50">
        <img
          src={product.picture}
          alt={product.name}
          className="object-cover w-full h-auto rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
        <p className="mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center gap-2 bg-button text-button-text p-2 rounded-lg hover:bg-button-hover transition-all w-full sm:w-auto"
          >
            <IoCartOutline className="w-6 h-6" />
            <span>Добавить в корзину</span>
          </button>
          <button
            onClick={() => removeProduct(product.id)}
            className="flex items-center justify-center gap-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-all w-full sm:w-auto"
          >
            <MdDeleteOutline className="w-6 h-6" />
            <span>Удалить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

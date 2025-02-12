import { useForm, Controller } from "react-hook-form";
import { useProductStore } from "../store/useProductStore";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/Modal";

interface ProductFormData {
  name: string;
  description: string;
  picture: string;
  price: number;
}

export const CreateProduct = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>();

  const { showModal, modal, hideModal } = useModal();

  const { addProduct } = useProductStore();

  const onSubmit = (data: ProductFormData) => {
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      ...data,
    };
    addProduct(newProduct);
    showModal("Product created!");
    reset();
  };

  return (
    <div className="bg-primary p-2">
      <h1 className="text-primary text-2xl font-bold mb-4">Create Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-primary block mb-1">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="name"
                className="bg-secondary text-primary w-full p-2 rounded"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="text-primary block mb-1">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <textarea
                {...field}
                id="description"
                className="bg-secondary text-primary w-full p-2 rounded"
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="picture" className="text-primary block mb-1">
            Picture URL
          </label>
          <Controller
            name="picture"
            control={control}
            defaultValue=""
            rules={{ required: "Picture URL is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="url"
                id="picture"
                className="bg-secondary text-primary w-full p-2 rounded"
              />
            )}
          />
          {errors.picture && (
            <p className="text-red-500 text-sm mt-1">
              {errors.picture.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="price" className="text-primary block mb-1">
            Price
          </label>
          <Controller
            name="price"
            control={control}
            rules={{
              required: "Price is required",
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Invalid price format",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                id="price"
                className="bg-secondary text-primary w-full p-2 rounded"
              />
            )}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-button text-button w-full p-2 rounded"
        >
          Create Product
        </button>
      </form>
      <Modal {...modal} onClick={hideModal} />
    </div>
  );
};

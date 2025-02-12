interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const MyInput = ({ label, ...props }: MyInputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-tg-text">
        {label}
      </label>
      <input
        className="w-full bg-tg-secondaryBg text-tg-text p-2 rounded-lg border border-tg-hint focus:outline-none focus:ring-2 focus:ring-tg-button"
        {...props}
      />
    </div>
  );
};

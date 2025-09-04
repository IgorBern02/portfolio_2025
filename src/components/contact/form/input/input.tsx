interface PropsInput {
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  required,
}: PropsInput) => {
  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

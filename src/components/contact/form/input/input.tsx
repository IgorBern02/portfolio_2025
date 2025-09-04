import type { PropsInputContact } from "../../../../types/types";

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  required,
}: PropsInputContact) => {
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

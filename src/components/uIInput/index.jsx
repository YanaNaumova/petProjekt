import styles from "./styles.module.css";
function UIInput({
  type,
  name,
  validation,
  register,
  errors,
  bgColor,
  placeholder,
  placeholderColor,
}) {
  return (
    <div className={styles.input_container}>
      <input
        type={type}
        className={styles.input}
        {...register(name, validation)}
        style={{ backgroundColor: bgColor }}
        placeholder={placeholder}
      />
      <style>
        {`
          .${styles.input}::placeholder {
            color: ${placeholderColor}; // Используем переданный цвет плейсхолдера
          }
        `}
      </style>
      {errors[name] && <p className={styles.error}>{errors[name].message}</p>}
    </div>
  );
}

export default UIInput;

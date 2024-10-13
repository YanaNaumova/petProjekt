import styles from "./styles.module.css";
function UIInput({ type, placeholder, name, validation, register, errors }) {
  return (
    <div className={styles.input_container}>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && <p className={styles.error}>{errors[name].message}</p>}
    </div>
  );
}

export default UIInput;

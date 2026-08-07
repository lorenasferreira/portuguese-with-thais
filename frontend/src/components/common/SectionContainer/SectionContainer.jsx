import styles from "./SectionContainer.module.css";

function SectionContainer({ children, as: Component = "div", className = "" }) {
  return (
    <Component className={`${styles.container} ${className}`}>
      {children}
    </Component>
  );
}

export default SectionContainer;

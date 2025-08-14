const Section = ({ id, title, children, className = "", ariaLabel }) => {
  return (
    <section 
      id={id} 
      className={`section section--padded ${className}`}
      aria-label={ariaLabel}
    >
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
};

export default Section;

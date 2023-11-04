

const Section = ({ children, title }) => {

  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>)

};

export default Section;

const variants = {
  
}

const Links = () => {
  const items = ["Home", "Servicios", "Portfolio", "Contacto", "Sobre Nosotros"];



  return (
    <div className="links">
      {items.map( (item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;

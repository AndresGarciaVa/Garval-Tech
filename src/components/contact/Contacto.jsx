import "./contacto.scss"

const Contacto = () => {
  return (
    <div className="contacto">
      <div className="textContainer">
        <h1>Trabajemos juntos!</h1>
        <div className="item">
          <h2>Correo</h2>
          <span>prueba@prueba.com</span>
        </div>

        <div className="item">
          <h2>Dirección</h2>
          <span>Colombia</span>
        </div>

        <div className="item">
          <h2>Telefono</h2>
          <span>+57 12345678</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Nombre" />
          <input type="email" required placeholder="Correo" />
          <textarea rows={8} placeholder="Mensaje" />
          <button>Enviar</button>
        </form>
      </div>
    </div>

  )
}

export default Contacto
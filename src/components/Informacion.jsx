import fotoAle from '../assets/fotoAle.jpg'

function Informacion(props) {
  return (
    <div className="up">

        <img src={fotoAle} alt="" />
     
      <div className="info">
          <h1>{props.apellido} <br /> {props.nombre} </h1>
          <p className="titu">{props.ocupacion}</p>
      </div>
    </div>
  )
}


export default Informacion


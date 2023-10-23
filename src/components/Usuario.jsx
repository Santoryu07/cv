import Añadir3 from './Añadir3'


function Usuario(props) {
  return (
    <div className='usu'>
        <h2>{props.h2}<hr /></h2>
        
        <p>{props.dato1}</p>
        <hr />
        <p>{props.dato2}</p>
        <hr />

        
        <Añadir3 />
    
    </div>
  )
}

export default Usuario
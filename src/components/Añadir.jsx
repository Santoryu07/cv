import { useState } from 'react'
import Experiencia from './Experiencia'


function Añadir() {
    const [lista, setLista] = useState([])
    const [textoPuesto, setTextoPuesto] = useState(''); // Nuevo estado para el puesto
    const [textoFecha, setTextoFecha] = useState(''); // Nuevo estado para la fecha
    const [textoEmpresa, setTextoEmpresa] = useState('');

    const [visible, setVisible] = useState(true)

    

    function añadir(){
        setLista([...lista, { puesto: textoPuesto, fecha: textoFecha, empresa: textoEmpresa }])
        setTextoPuesto(''); // Limpiar el campo de puesto después de agregar
        setTextoFecha(''); // Limpiar el campo de fecha después de agregar
        setTextoEmpresa(''); // Limpiar el campo de empresa después de agregar
    }
    
    function mostrar() {
      const list = document.getElementById('list');
      setVisible(!visible)
      if(!visible){
        list.style = "display:none";
      }else{
        list.style = "display:flex";
      }
    }

  return (
    <>
    
            {lista.map((experiencia,key)=>{
              return <Experiencia 
              puesto={experiencia.puesto}
              fecha={experiencia.fecha}
              empresa={experiencia.empresa}  />
            })}

    <div id='contiene' className='d-flex justify-content-between align-items-center'>

    <button onClick={mostrar} id='esconde' className="btn btn-dark">Añadir</button>

    <div id="list">

          <input type="text" value={textoPuesto} onChange={(e)=> setTextoPuesto(e.currentTarget.value)} placeholder="Puesto"/>
          
          <input type="text" value={textoFecha} onChange={(e)=> setTextoFecha(e.currentTarget.value)} placeholder="Fecha"/>
        
          <input type="text" value={textoEmpresa} onChange={(e)=> setTextoEmpresa(e.currentTarget.value)} placeholder="Empresa"/>

          <input type="text" onChange={(e)=> {setTexto(e.currentTarget.value)}}/>
        
        <button onClick={añadir} class="btn btn-primary">Añadir</button>
    </div>
    </div>
        
    

    </>
  )
}

export default Añadir
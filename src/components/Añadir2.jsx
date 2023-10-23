import { useState } from 'react'
import Sitios from './Sitios'


function Añadir2() {
    const [lista, setLista] = useState([])
    const [textoLugar, setTextoLugar] = useState(''); // Nuevo estado para el puesto
    const [textoFecha, setTextoFecha] = useState(''); // Nuevo estado para la fecha
    const [textoCiudad, setTextoCiudad] = useState('');

    const [visible, setVisible] = useState(true)

    function mostrar() {
      const list2 = document.getElementById('list2');
      setVisible(!visible)
      if(!visible){
        list2.style = "display:none";
      }else{
        list2.style = "display:flex";
      }
    }

    function añadir(){
        setLista([...lista, { lugar: textoLugar, fecha: textoFecha, ciudad: textoCiudad }])
        setTextoLugar(''); // Limpiar el campo de puesto después de agregar
        setTextoFecha(''); // Limpiar el campo de fecha después de agregar
        setTextoCiudad(''); // Limpiar el campo de empresa después de agregar
    }

  return (
    <>
            {lista.map((sitios,key)=>{
              return <Sitios
              lugar={sitios.lugar}
              fecha={sitios.fecha}
              ciudad={sitios.ciudad}  />
            })}

    <div id='contiene' className='d-flex d-flex justify-content-between align-items-center'>
    <button onClick={mostrar} id='esconde' className="btn btn-dark">Añadir</button>
    <div id="list2">
          

          <input type="text" value={textoLugar} onChange={(e)=> setTextoLugar(e.currentTarget.value)} placeholder="Curso"/>
          
          <input type="text" value={textoFecha} onChange={(e)=> setTextoFecha(e.currentTarget.value)} placeholder="Fecha"/>
        
          <input type="text" value={textoCiudad} onChange={(e)=> setTextoCiudad(e.currentTarget.value)} placeholder="Instituto"/>
        
        <button onClick={añadir} class="btn btn-primary">Añadir</button>
    </div>
    </div>
    
        
    

    </>
  )
}

export default Añadir2
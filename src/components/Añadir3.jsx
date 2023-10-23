import { useState } from 'react'

function Añadir3() {
    const [lista, setLista] = useState([])
    const [texto, setTexto] = useState(''); // Nuevo estado para el puesto

    const [visible, setVisible] = useState(true)

    function mostrar() {
      const list3 = document.getElementById('list3');
      setVisible(!visible)
      if(!visible){
        list3.style = "display:none";
      }else{
        list3.style = "display:inline-flex";
      }
    }


    function añadir(){
        setLista([...lista, texto])
        setTexto(''); // Limpiar el campo de puesto después de agregar

    }

  return (
    <>
            {lista.map((e,key)=>{
              return <div key={key}>
                <p  className='añadido'>{e}</p> 
                <hr />
               </div>
            })}

    <div id='contiene' className='d-flex d-flex justify-content-between align-items-center'>

      <button onClick={mostrar} id='escondelat' className="btn btn-dark">Añadir</button>


    <div id="list3">
      

      <input type="text" value={texto} onChange={(e)=> setTexto(e.currentTarget.value)} placeholder="..."/>
          
      <button onClick={añadir} class="btn btn-primary">Añadir</button>
        
    </div>
    </div>
    

    </>
  )
}

export default Añadir3
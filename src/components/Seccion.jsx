import Experiencia from "./Experiencia"
import Mi from './Mi'
import Añadir from './Añadir'



function Seccion() {
    const empleo1 = [["RECOGEBOLAS TENNIS","2023 Mayo -- 2023 Ago.","LOS INKAS GOLF CLUB"]]
    const empleo2 = [["RECOGEBOLAS DE TORNEOS","2022 -- 2023","ALEJO ARAMBURÚ"]]
    const empleo3 = [["LIJADOR Y PULIDOR DE ESPEJOS","2022 Ene. -- 2022 Abr.","VIDRIERIA SAN MARCOS"]]
    const empleo4 = [["AYUDANTE DE TALLER","2021 Set. -- 2021 Dic.","ANONIMO"]]
    
    
  return (
    <div className='rest'>
          <Mi perfil="PROFILE" />
          <div className='sub'>
            <h2 >EXPERIENCIA PROFESIONAL</h2>
            <hr />
          </div>
            
          {empleo1.map((e, key)=>{
            return <Experiencia puesto={e[0]} fecha={e[1]} empresa={e[2]}  />
          })}

          {empleo2.map((e, key)=>{
            return <Experiencia puesto={e[0]} fecha={e[1]} empresa={e[2]}  />
          })}
          
          {empleo3.map((e, key)=>{
            return <Experiencia puesto={e[0]} fecha={e[1]} empresa={e[2]}  />
          })}

          {empleo4.map((e, key)=>{
            return <Experiencia puesto={e[0]} fecha={e[1]} empresa={e[2]}  />
          })}


          <Añadir/>
        
    </div>
  )
}

export default Seccion
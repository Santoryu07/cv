import Sitios from "./Sitios"
import Añadir2 from "./Añadir2"


function Educacion () {
    const site1 = [["ORATORIA","2018 -- 2018","LA CASA DEL PUEBLO"]]
    const site2 = [["DISEÑO GRÁFICO","2017 -- 2017","INSTITUTO LATINO"]]
    const site3 = [["INGLÉS","2019 -- 2021","BRITANICO"]]

  return (
    <div className="rest">
        <div className='sub'>
            <h2>EDUCACIÓN</h2>
            <hr />  
        </div>

        {site1.map((e, key)=>{
            return <Sitios lugar={e[0]} fecha={e[1]} ciudad={e[2]}  />
          })}

          {site2.map((e, key)=>{
            return <Sitios lugar={e[0]} fecha={e[1]} ciudad={e[2]}  />
          })}
          
          {site3.map((e, key)=>{
            return <Sitios lugar={e[0]} fecha={e[1]} ciudad={e[2]}  />
          })}


        <Añadir2 />
    </div>
  )
}

export default Educacion
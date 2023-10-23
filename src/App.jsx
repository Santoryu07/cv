import './App.css'
import Usuario from './components/Usuario'
import Perfil from './components/Perfil'
import Educacion  from './components/Educacion'
import Informacion from './components/Informacion'
import Seccion from './components/Seccion'


function App() {
  const skills = [["Habilidades","Oratoria","Diseño Grafico"]]
  const languages = [["Idiomas","English","Portugues",""]]
  const intereses = [["Intereses","Desarrolo de aplicaciones","Desarrollo full-stack"]]


  return (
    <>
      <Informacion 
        apellido="Salcedo Ysasi "
        nombre="Leonardo Alexander Junior" 
        ocupacion="Estudiante"
      />
      <div className='mita'>
        <div className='all'>

          <Perfil />

          {skills.map((e, key)=>{
            return <Usuario h2={e[0]} dato1={e[1]} dato2={e[2]} dato3={e[3]}  />
          })}
          {languages.map((e, key)=>{
            return <Usuario h2={e[0]} dato1={e[1]} dato2={e[2]}  />
          })}

          {intereses.map((e, key)=>{
            return <Usuario h2={e[0]} dato1={e[1]} dato2={e[2]}  />
            
          })}

        </div>


        <div className='oname'>
          <Seccion/>
          <Educacion/>
        </div>
        
        

        
        
      </div>
        
      
    
      
    </>
  )
}

export default App

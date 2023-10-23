function Experiencia (props) {
  return (
        <section className="big">
           
            <div className="num1">
                <div>
                    <h4>{props.puesto}</h4>
                    <p>{props.fecha}</p>
                </div>
                <div className="emp">
                    <p>{props.empresa}</p>
                </div>
            </div>
            <div className="num2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quis praesentium deserunt vero illum amet ipsum, nihil sequi unde ex nam consequuntur vel, soluta necessitatibus eaque rem eveniet, corrupti debitis?
                Laboriosam voluptas perferendis sint dignissimos facere autem itaque illum aut, veritatis distinctio optio mollitia voluptates magnam quod laborum odio est nesciunt beatae. Nihil nemo voluptatem dicta vitae aut cupiditate optio.</p>
            </div>
        
        </section>
    
  )
}

export default Experiencia
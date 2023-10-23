

function Sitios(props) {
  return (
    <section className="big">
        <div className="num1">
            <div>
                <h4>{props.lugar}</h4>
                <p>{props.fecha}</p>
            </div>
            <div>
                <p>{props.ciudad}</p>
            </div>
        </div>
    </section>
  )
}

export default Sitios
import './Time.css'

const Time = (props) => {
    return (
        <section style={{ backgroundColor: props.corSecundaria }} className='time' >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}

export default Time
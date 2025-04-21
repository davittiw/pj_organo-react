import './Rodape.css'

const Rodape = () => {
    return (
    <footer>
        <div className='container redes-sociais'>
            <img src='../imagens/fb.png'  alt="" className='icon-redes' />
            <img src='../imagens/ig.png'  alt="" className='icon-redes' />
            <img src='../imagens/tw.png'  alt="" className='icon-redes' />
        </div>
        <div className='container logo'>
            <img src='../imagens/logo.png' alt="" className='logo' />
        </div>
        <div className='container'>
            <p>Desenvolvido por <a href="http://alura.com">@davittiw</a></p>
        </div>
    </footer>
    )
}

export default Rodape
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Criaturas do Fim e Nether',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },

    {
      nome: 'Criaturas Inteligentes',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'Boss',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },

    {
      nome: 'Hostis',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },

    {
      nome: 'Animais Domesticáveis',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },

    {
      nome: 'Animais Passivos',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape></Rodape>
    </div>
  );
}

export default App;
import { CardProduct } from './components/CardProduct';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section title={'Os mais pedidos'}>
        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />
      </Section>
      <Section title='HAMBÚRGUERS'>
        <CardProduct
          variant={'horizontal'}
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        {/* <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        /> */}
      </Section>
    </>
  );
}

export default App;

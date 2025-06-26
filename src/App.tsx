import { useState } from 'react';
import { BottomNavigation } from './components/BottomNavigation';
import { CardProduct } from './components/CardProduct';
import { CartSummary } from './components/CartSummary';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';

function App() {
  const [showCartSummary, setShowCartSummary] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: 'TRI ONDA',
      price: 16,
      quantity: 2,
      image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
    },
    {
      id: 2,
      name: 'COCA COLA LATA',
      price: 6,
      quantity: 1,
      image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
    },
    {
      id: 3,
      name: 'COCA COLA LATA',
      price: 6,
      quantity: 1,
      image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
    },
    {
      id: 4,
      name: 'COCA COLA LATA',
      price: 6,
      quantity: 1,
      image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
    },
  ];

  const handleNavigation = (section: 'home' | 'orders' | 'cart') => {
    // Se o usuário clicar no tab 'cart', mostramos o CartSummary
    if (section === 'cart') {
      setShowCartSummary((prev) => !prev);
    } else {
      setShowCartSummary(false); // Esconde o CartSummary se for para outra seção
    }
    // Aqui você pode adicionar lógica para rolar para a seção correspondente
    // ou mudar a rota, etc.
    console.log(`Navegar para: ${section}`);
  };

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
          title={'Hamburguer'}
          price={'R$7,00'}
          description={'Pão, Carne, Alface, Molho e Batata Palha'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'X-Burguer'}
          variant={'horizontal'}
          price={'R$16,00'}
          description={'Pão, Carne, Queijo, Molho, Alface e Batata Palha'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'X-EGGS'}
          variant={'horizontal'}
          price={'R$8,50'}
          description={'Pão, Carne, Queijo, Ovo, Molho, Alface e Batata Palha'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'X-CALABRESA'}
          variant={'horizontal'}
          price={'R$11,00'}
          description={
            'Pão, Carne, Queijo, Ovo, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'X-BACON'}
          variant={'horizontal'}
          price={'R$11,00'}
          description={
            'Pão, Carne, Queijo, Ovo, Bacon, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'X-TUDO'}
          variant={'horizontal'}
          price={'R$12,00'}
          description={
            'Pão, Carne, Queijo, Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRIPLO DE BACON'}
          variant={'horizontal'}
          price={'R$13,50'}
          description={
            'Pão, 3 Carne, 3 Queijo, Bacon, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'BIG ONDA'}
          variant={'horizontal'}
          price={'R$15,00'}
          description={
            'Pão, 2 Carne, 2 Queijo, 2 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'MISTO QUENTE SIMPLES'}
          variant={'horizontal'}
          price={'$8,00'}
          description={'Queijo e Presunto'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'MISTO QUENTE DUPLO'}
          variant={'horizontal'}
          price={'R$11,00'}
          description={'2 Queijo e 2 Presunto'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'TRI ONDA'}
          variant={'horizontal'}
          price={'$16,00'}
          description={
            'Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          }
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />
      </Section>

      <Section title='BEBIDAS'>
        <CardProduct
          variant={'horizontal'}
          title={'ÁGUA'}
          price={'R$2,00'}
          description={'500ml'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'GUARACAMP'}
          variant={'horizontal'}
          price={'R$2,00'}
          description={'295ml'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'COCA COLA LATA'}
          variant={'horizontal'}
          price={'R$6,00'}
          description={'350ml'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'FANTA LARANJA LATA'}
          variant={'horizontal'}
          price={'R$6,00'}
          description={'350ml'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'FANTA UVA LATA'}
          variant={'horizontal'}
          price={'R$6,00'}
          description={'350ml'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'SPRITE LATA'}
          variant={'horizontal'}
          price={'R$6,00'}
          description={'350ml'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'GUARANÁ ANTARTICA LATA'}
          variant={'horizontal'}
          price={'R$6,00'}
          description={'350ml'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'FANTA LARANJA GARRAFA'}
          variant={'horizontal'}
          price={'R$10,00'}
          description={'2 Litros'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'FANTA UVA GARRAFA'}
          variant={'horizontal'}
          price={'R$10,00'}
          description={'2 Litros'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'SPRITE GARRAFA'}
          variant={'horizontal'}
          price={'R$10,00'}
          description={'2 Litros'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />

        <CardProduct
          title={'COCA COLA GARRAFA'}
          variant={'horizontal'}
          price={'$12,00'}
          description={'2 Litros'}
          img={`https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png`}
        />
      </Section>

      <BottomNavigation
        cartCount={cartItems.length} // Já estava correto
        onNavigate={handleNavigation} // <--- ADICIONE ESTA LINHA AQUI!
      />

      {showCartSummary && (
        // O CartSummary deve ser fixo na parte inferior e ter uma largura total.
        // O fechamento pode ser feito por um botão dentro do CartSummary ou clicando fora.
        // Por enquanto, o CartSummary já tem um onClose, mas o clique fora não está implementado aqui.
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-end z-40'>
          {' '}
          {/* Overlay para fechar */}
          <CartSummary
            items={cartItems}
            onCheckout={() => alert('Checkout iniciado!')}
            onClose={() => setShowCartSummary(false)} // Função para fechar o resumo
          />
        </div>
      )}
    </>
  );
}

export default App;

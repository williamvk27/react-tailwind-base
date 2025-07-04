import { useState } from 'react';
import { BottomNavigation } from './components/BottomNavigation';
import { CardProduct } from './components/CardProduct';
import { CartSummary } from './components/CartSummary';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ProductCustomizationModal } from './components/ProductCustomizationModal';

// Definição do tipo AdditionalItem para referência
type AdditionalItem = {
  id: string;
  name: string;
  price: number;
};

// Constante com os adicionais disponíveis
const ADDITIONALS: AdditionalItem[] = [
  { id: 'carne', name: 'Carne', price: 3.0 },
  { id: 'queijo', name: 'Queijo', price: 2.0 },
  { id: 'ovo', name: 'Ovo', price: 2.0 },
  { id: 'calabresa', name: 'Calabresa', price: 3.0 },
  { id: 'bacon', name: 'Bacon', price: 3.0 },
];

// Tipo atualizado para incluir extras e total
type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  extras?: Record<string, number>; // Adicionado campo para extras
  total: number; // Adicionado campo para total (preço base + extras)
  observation?: string; // Adicionado campo para observação
};

function App() {
  const [showCartSummary, setShowCartSummary] = useState(false);
  const [showCustomization, setShowCustomization] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CartItemType | null>(
    null
  );
  const [editingItemId, setEditingItemId] = useState<number | null>(null); // Para controlar qual item está sendo editado

  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  // Função auxiliar para calcular o valor dos extras
  const calculateExtrasTotal = (extras: Record<string, number>) => {
    return ADDITIONALS.reduce(
      (sum, item) => sum + (extras[item.id] || 0) * item.price,
      0
    );
  };

  // Função modificada para lidar com extras e total
  const handleAddToCart = (data: {
    product: CartItemType;
    extras: Record<string, number>;
    observation: string;
  }) => {
    const { product, extras, observation } = data;

    // Calcula o valor total dos extras
    const extrasTotal = calculateExtrasTotal(extras);

    // Se estamos editando um item existente
    if (editingItemId !== null) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingItemId
            ? {
                ...item,
                extras: extras,
                observation: observation,
                total: product.price + extrasTotal,
              }
            : item
        )
      );
      setEditingItemId(null); // Resetar o modo de edição
    } else {
      // Cria o item com o total correto (preço base + extras)
      const newItem: CartItemType = {
        ...product,
        extras: extras,
        observation: observation,
        total: product.price + extrasTotal,
      };

      setCartItems((prevItems) => {
        // Verifica se já existe um item idêntico (mesmo produto e mesmos extras)
        const existingItemIndex = prevItems.findIndex(
          (item) =>
            item.id === newItem.id &&
            JSON.stringify(item.extras) === JSON.stringify(newItem.extras)
        );

        if (existingItemIndex !== -1) {
          // Se já existe, incrementa a quantidade e atualiza o total
          return prevItems.map((item, index) =>
            index === existingItemIndex
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  total:
                    (item.price + calculateExtrasTotal(item.extras || {})) *
                    (item.quantity + 1),
                }
              : item
          );
        }

        // Se não existe, adiciona novo
        return [...prevItems, newItem];
      });
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Nova função para lidar com a edição de um item
  const handleEditItem = (item: CartItemType) => {
    setSelectedProduct({
      ...item,
      quantity: 1, // Resetamos a quantidade para 1 no modal de edição
    });
    setEditingItemId(item.id); // Marcamos qual item está sendo editado
    setShowCustomization(true);
    setShowCartSummary(false); // Opcional: fechar o carrinho ao editar
  };

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
          variant='horizontal'
          title='Hamburguer'
          price='R$7,00'
          description='Pão, Carne, Alface, Molho e Batata Palha'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 1,
              name: 'Hamburguer',
              price: 7.0,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 7.0, // Inicializa com o preço base
            });
            setEditingItemId(null); // Garantir que não estamos em modo de edição
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='X-Burguer'
          variant='horizontal'
          price='R$7,50'
          description='Pão, Carne, Queijo, Molho, Alface e Batata Palha'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 2,
              name: 'X-Burguer',
              price: 7.5,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 7.5, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='X-EGGS'
          variant='horizontal'
          price='R$8,50'
          description='Pão, Carne, Queijo, Ovo, Molho, Alface e Batata Palha'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 3,
              name: 'X-EGGS',
              price: 8.5,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 8.5, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='X-CALABRESA'
          variant='horizontal'
          price='R$11,00'
          description='Pão, Carne, Queijo, Ovo, Calabresa, Molho, Alface e Batata Palha'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 4,
              name: 'X-CALABRESA',
              price: 11.0,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 11.0, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='X-BACON'
          variant='horizontal'
          price='R$11,00'
          description='Pão, Carne, Queijo, Ovo, Bacon, Molho, Alface e Batata Palha'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 5,
              name: 'X-BACON',
              price: 11.0,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 11.0, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='X-TUDO'
          variant='horizontal'
          price='R$12,00'
          description='Pão, Carne, Queijo, Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 6,
              name: 'X-TUDO',
              price: 12.0,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 12.0, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='TRIPLO DE BACON'
          variant='horizontal'
          price='R$13,50'
          description='Pão, 3 Carne, 3 Queijo, Bacon, Molho, Alface e Batata Palha'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 7,
              name: 'TRIPLO DE BACON',
              price: 13.5,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 13.5, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='BIG ONDA'
          variant='horizontal'
          price='R$15,00'
          description='Pão, 2 Carne, 2 Queijo, 2 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 8,
              name: 'BIG ONDA',
              price: 15.0,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 15.0, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='MISTO QUENTE SIMPLES'
          variant='horizontal'
          price='R$8,00'
          description='Queijo e Presunto'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 9,
              name: 'MISTO QUENTE SIMPLES',
              price: 8.0,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 8.0, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='MISTO QUENTE DUPLO'
          variant='horizontal'
          price='R$11,00'
          description='2 Queijo e 2 Presunto'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 10,
              name: 'MISTO QUENTE DUPLO',
              price: 11.0,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 11.0, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
        />

        <CardProduct
          title='TRI ONDA'
          variant='horizontal'
          price='R$16,00'
          description='Pão, 3 Carne, 3 Queijo, 3 Ovo, Bacon, Calabresa, Molho, Alface e Batata Palha'
          img='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
          onAddClick={() => {
            setSelectedProduct({
              id: 11,
              name: 'TRI ONDA',
              price: 16.0,
              quantity: 1,
              image: 'https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png',
              total: 16.0, // Inicializa com o preço base
            });
            setEditingItemId(null);
            setShowCustomization(true);
          }}
          onAddToCart={(product) =>
            handleAddToCart({
              product: {
                ...product,
                total: product.price, // Inicializa com o preço base para adição direta
              },
              extras: {},
              observation: '',
            })
          }
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
        cartCount={cartItems.length}
        onNavigate={handleNavigation}
      />

      {showCustomization && selectedProduct && (
        <ProductCustomizationModal
          product={selectedProduct}
          onClose={() => {
            setShowCustomization(false);
            setEditingItemId(null); // Limpar o modo de edição ao fechar
          }}
          onAddToCart={handleAddToCart}
          initialExtras={
            editingItemId !== null
              ? cartItems.find((item) => item.id === editingItemId)?.extras ||
                {}
              : {}
          }
          initialObservation={
            editingItemId !== null
              ? cartItems.find((item) => item.id === editingItemId)
                  ?.observation || ''
              : ''
          }
          isEditing={editingItemId !== null}
        />
      )}

      {showCartSummary && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-end z-40'>
          <CartSummary
            items={cartItems}
            onCheckout={() => alert('Checkout iniciado!')}
            onClose={() => setShowCartSummary(false)}
            onRemoveItem={handleRemoveFromCart}
            onEditItem={handleEditItem}
          />
        </div>
      )}
    </>
  );
}

export default App;

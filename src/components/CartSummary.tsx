import { useState } from 'react';

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

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  extras?: Record<string, number>; // Adicionado campo para extras
  total: number; // Adicionado campo para total (preço base + extras)
  observation?: string; // Adicionado campo para observação
}

interface CartSummaryProps {
  items?: CartItem[];
  onCheckout?: () => void;
  onClose?: () => void;
  onRemoveItem?: (id: number) => void;
}

export function CartSummary({
  items = [],
  onCheckout,
  onClose,
  onRemoveItem,
}: CartSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Cálculo do total usando o campo total de cada item (que já inclui extras)
  const total = items.reduce(
    (sum, item) => sum + item.total * item.quantity,
    0
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className='bg-gradient-to-br from-black via-green-950 to-black border-t border-gray-800 text-center p-4 text-gray-400'>
        Seu carrinho está vazio 😕
      </div>
    );
  }

  return (
    <div className='fixed bottom-14 left-0 w-full z-50 bg-gradient-to-br from-black via-green-950 to-black border-t border-gray-800 shadow-lg'>
      <div className='max-w-4xl mx-auto'>
        {/* Resumo do carrinho */}
        <div
          className='p-4 cursor-pointer hover:bg-black/30 transition-colors'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='bg-ms-green text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold'>
                {totalItems}
              </div>
              <div>
                <p className='text-white font-semibold'>
                  {totalItems} {totalItems === 1 ? 'item' : 'itens'} no carrinho
                </p>
                <p className='text-xs text-gray-400'>Toque para ver detalhes</p>
              </div>
            </div>
            <div className='text-right'>
              <p className='text-lg font-bold text-ms-green'>
                R$ {total.toFixed(2).replace('.', ',')}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCheckout?.();
                }}
                className='mt-1 bg-ms-green hover:bg-green-400 text-black font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105'
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>

        {/* Lista de itens */}
        {isExpanded && (
          <div className='border-t border-gray-700 bg-black/40 backdrop-blur-sm max-h-60 overflow-y-auto px-4 py-3 space-y-3'>
            {items.map((item) => {
              // Função para renderizar os extras do item
              const renderExtras = () => {
                if (!item.extras) return null;

                const extrasArray = Object.entries(item.extras)
                  .filter(([_, quantity]) => quantity > 0)
                  .map(([id, quantity]) => {
                    const extra = ADDITIONALS.find((a) => a.id === id);
                    if (!extra || quantity <= 0) return null;
                    return `${quantity}x ${extra.name}`;
                  })
                  .filter(Boolean);

                if (extrasArray.length === 0) return null;

                return (
                  <p className='text-xs text-ms-green mt-1'>
                    <span className='font-semibold'>Extras:</span>{' '}
                    {extrasArray.join(', ')}
                  </p>
                );
              };

              return (
                <div
                  key={item.id}
                  className='flex flex-col bg-black/70 p-3 rounded-lg shadow-inner border border-gray-700'
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-12 h-12 rounded object-cover'
                        />
                      )}
                      <div>
                        <p className='text-sm text-white font-medium'>
                          {item.name}
                        </p>
                        <p className='text-xs text-gray-400'>
                          Qtd: {item.quantity}
                        </p>
                        {/* Exibição dos extras */}
                        {renderExtras()}
                        {/* Exibição da observação */}
                        {item.observation && (
                          <p className='text-xs text-gray-300 mt-1 italic'>
                            "{item.observation}"
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='flex flex-col items-end'>
                      <p className='text-ms-green font-bold text-sm'>
                        R${' '}
                        {(item.total * item.quantity)
                          .toFixed(2)
                          .replace('.', ',')}
                      </p>
                      <button
                        onClick={() => onRemoveItem?.(item.id)}
                        className='text-red-500 text-xs underline mt-1 hover:text-red-300 transition'
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

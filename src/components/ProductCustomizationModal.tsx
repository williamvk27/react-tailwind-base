import { useState, useEffect } from 'react';

type AdditionalItem = {
  id: string;
  name: string;
  price: number;
};

const ADDITIONALS: AdditionalItem[] = [
  { id: 'carne', name: 'Carne', price: 3.0 },
  { id: 'queijo', name: 'Queijo', price: 2.0 },
  { id: 'ovo', name: 'Ovo', price: 2.0 },
  { id: 'calabresa', name: 'Calabresa', price: 3.0 },
  { id: 'bacon', name: 'Bacon', price: 3.0 },
];

// Ícones SVG
const CloseIcon = () => (
  <svg
    className='w-6 h-6'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    className='w-4 h-4'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20 12H4'
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    className='w-4 h-4'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
    />
  </svg>
);

interface Props {
  onClose: () => void;
  onAddToCart: (data: {
    extras: Record<string, number>;
    observation: string;
    product: {
      id: number;
      name: string;
      image: string;
      price: number;
      quantity: number;
      total: number;
    };
  }) => void;
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    total: number;
  };
  initialExtras?: Record<string, number>; // Para pré-preencher extras ao editar
  initialObservation?: string; // Para pré-preencher observação ao editar
  isEditing?: boolean; // Indica se estamos editando um item existente
}

export function ProductCustomizationModal({
  onClose,
  onAddToCart,
  product,
  initialExtras = {},
  initialObservation = '',
  isEditing = false,
}: Props) {
  const [extras, setExtras] = useState<Record<string, number>>(initialExtras);
  const [observation, setObservation] = useState(initialObservation);

  // Efeito para atualizar os estados quando as props mudam (útil para edição)
  useEffect(() => {
    setExtras(initialExtras);
    setObservation(initialObservation);
  }, [initialExtras, initialObservation]);

  const handleIncrease = (id: string) => {
    setExtras((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrease = (id: string) => {
    setExtras((prev) => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
  };

  const totalExtras = ADDITIONALS.reduce(
    (sum, item) => sum + (extras[item.id] || 0) * item.price,
    0
  );

  console.log('Price:', product.price);
  console.log('Extras:', totalExtras);
  console.log('Soma:', product.price + totalExtras);

  const totalFinal = Number(product.price) + totalExtras;

  return (
    <div className='fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-end sm:items-center z-50'>
      <div className='bg-black border-t border-ms-green/30 sm:border sm:border-ms-green/30 w-full max-w-sm sm:rounded-xl shadow-2xl shadow-ms-green/20 animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300 max-h-[95vh] overflow-hidden flex flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b border-ms-green/20 flex-shrink-0'>
          <h2 className='text-lg font-bold text-white'>
            {isEditing ? 'Editar item' : 'Monte seu lanche'}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-ms-green transition-colors p-1 hover:bg-ms-green/10 rounded-lg'
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className='flex-1 overflow-y-auto'>
          {/* Produto selecionado */}
          <div className='px-4 pt-3 pb-4 flex items-center gap-3 border-b border-ms-green/10'>
            <img
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              className='w-16 h-16 rounded-lg object-cover border border-ms-green/30 shadow flex-shrink-0'
            />
            <div className='min-w-0 flex-1'>
              <h3 className='text-white text-base font-semibold truncate'>
                {product.name}
              </h3>
              <p className='text-ms-green font-bold text-sm'>
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className='p-4 space-y-4'>
            {/* Adicionais */}
            <div className='space-y-3'>
              <h3 className='text-base font-semibold text-white mb-3'>
                Adicionais
              </h3>
              <div className='space-y-2'>
                {ADDITIONALS.map((item) => (
                  <div
                    key={item.id}
                    className='flex justify-between items-center p-3 bg-ms-gray/30 rounded-lg border border-ms-green/10 hover:border-ms-green/30 transition-all'
                  >
                    <div className='flex-1 min-w-0 pr-3'>
                      <span className='text-white font-medium text-sm block'>
                        {item.name}
                      </span>
                      <p className='text-ms-green font-bold text-xs'>
                        + R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>

                    <div className='flex items-center gap-2 flex-shrink-0'>
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className='w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 touch-manipulation'
                        disabled={!extras[item.id]}
                      >
                        <MinusIcon />
                      </button>

                      <span className='text-white font-bold text-sm min-w-[1.5rem] text-center'>
                        {extras[item.id] || 0}
                      </span>

                      <button
                        onClick={() => handleIncrease(item.id)}
                        className='w-8 h-8 bg-ms-green hover:bg-green-400 text-black rounded-lg flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-ms-green/30 touch-manipulation'
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Observação */}
            <div className='space-y-2'>
              <label className='block text-white font-semibold text-sm'>
                Observação
              </label>
              <textarea
                className='w-full bg-ms-gray/30 border border-ms-green/20 rounded-lg p-3 bg-gray-400 text-gray-950 placeholder-gray-400 focus:border-ms-green focus:outline-none focus:ring-2 focus:ring-ms-green/20 transition-all resize-none text-sm'
                rows={3}
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                placeholder='Ex: sem cebola, pão bem passado...'
              />
            </div>

            {/* Total */}
            <div className='p-3 bg-ms-green/10 border border-ms-green/30 rounded-lg'>
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between items-center text-sm'>
                  <span className='text-white'>Lanche:</span>
                  <span className='text-white'>
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className='flex justify-between items-center text-sm'>
                  <span className='text-white'>Adicionais:</span>
                  <span className='text-white'>
                    R$ {totalExtras.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className='flex justify-between items-center font-bold text-base mt-1 pt-1 border-t border-ms-green/20'>
                  <span className='text-white'>Total do pedido:</span>
                  <span className='text-ms-green'>
                    R$ {totalFinal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer fixo */}
        <div className='p-4 border-t border-ms-green/20 bg-black flex-shrink-0 safe-area-pb'>
          <div className='flex gap-3'>
            <button
              onClick={onClose}
              className='flex-1 bg-gray-700 hover:bg-gray-600 active:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition-all text-sm touch-manipulation'
            >
              Cancelar
            </button>

            <button
              onClick={() => {
                onAddToCart({
                  product: {
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    total: totalFinal, // Usando o total calculado com os extras
                  },
                  observation,
                  extras,
                });

                onClose();
              }}
              className='flex-1 bg-ms-green hover:bg-green-400 active:bg-green-500 text-black font-bold py-3 px-4 rounded-lg transition-all shadow-lg shadow-ms-green/30 text-sm touch-manipulation'
            >
              {isEditing ? 'Salvar alterações' : 'Adicionar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

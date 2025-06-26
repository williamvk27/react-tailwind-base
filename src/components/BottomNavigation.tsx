import { useState } from 'react';

// Ícones SVG
const HomeIcon = ({ active = false }: { active?: boolean }) => (
  <svg
    className='w-6 h-6'
    fill={active ? '#00FF41' : 'none'}
    stroke={active ? '#00FF41' : '#9CA3AF'}
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    />
  </svg>
);

const OrdersIcon = ({ active = false }: { active?: boolean }) => (
  <svg
    className='w-6 h-6'
    fill={active ? '#00FF41' : 'none'}
    stroke={active ? '#00FF41' : '#9CA3AF'}
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    />
  </svg>
);

const CartIcon = ({
  active = false,
  count = 0,
}: {
  active?: boolean;
  count?: number;
}) => (
  <div className='relative'>
    <svg
      className='w-6 h-6'
      fill={active ? '#00FF41' : 'none'}
      stroke={active ? '#00FF41' : '#9CA3AF'}
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m-7.5 0h7.5'
      />
    </svg>
    {count > 0 && (
      <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse'>
        {count > 9 ? '9+' : count}
      </div>
    )}
  </div>
);

interface BottomNavigationProps {
  cartCount?: number;
  onNavigate?: (section: 'home' | 'orders' | 'cart') => void;
}

export function BottomNavigation({
  cartCount = 0,
  onNavigate,
}: BottomNavigationProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'orders' | 'cart'>(
    'home'
  );

  const handleTabClick = (tab: 'home' | 'orders' | 'cart') => {
    setActiveTab(tab);
    onNavigate?.(tab);
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-br from-black via-green-950 to-black  border-t border-ms-green/30 backdrop-blur-sm shadow-lg'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-3 gap-1'>
          {/* Início */}
          <button
            onClick={() => handleTabClick('home')}
            className={`flex flex-col items-center justify-center py-3 px-4 transition-all duration-200 ${
              activeTab === 'home'
                ? 'text-ms-green'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <HomeIcon active={activeTab === 'home'} />
            <span
              className={`text-xs font-medium mt-1 ${
                activeTab === 'home' ? 'text-ms-green' : 'text-gray-500'
              }`}
            >
              Início
            </span>
          </button>

          {/* Pedidos */}
          <button
            onClick={() => handleTabClick('orders')}
            className={`flex flex-col items-center justify-center py-3 px-4 transition-all duration-200 ${
              activeTab === 'orders'
                ? 'text-ms-green'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <OrdersIcon active={activeTab === 'orders'} />
            <span
              className={`text-xs font-medium mt-1 ${
                activeTab === 'orders' ? 'text-ms-green' : 'text-gray-500'
              }`}
            >
              Pedidos
            </span>
          </button>

          {/* Carrinho */}
          <button
            onClick={() => handleTabClick('cart')}
            className={`flex flex-col items-center justify-center py-3 px-4 transition-all duration-200 relative ${
              activeTab === 'cart'
                ? 'text-ms-green'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <CartIcon active={activeTab === 'cart'} count={cartCount} />
            <span
              className={`text-xs font-medium mt-1 ${
                activeTab === 'cart' ? 'text-ms-green' : 'text-gray-500'
              }`}
            >
              Carrinho
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

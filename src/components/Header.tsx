import { useState } from 'react';

// Ícones SVG inline
const MenuIcon = () => (
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
      d='M4 6h16M4 12h16M4 18h16'
    />
  </svg>
);

const XIcon = () => (
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

const PhoneIcon = () => (
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
      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    />
  </svg>
);

const ShoppingBagIcon = () => (
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
      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
    />
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = '5521996573313';
  const handlerCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <header className='bg-black/95 backdrop-blur-md border-b border-ms-green/20 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 bg-ms-green rounded-xl flex items-center justify-center shadow-lg shadow-ms-green/50 animate-pulse'>
              <span className='text-black font-bold text-xl'>MS</span>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-white'>MS Sabores</h1>
              <p className='text-sm text-ms-green font-medium'>Vila Kennedy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='#home'
              className='text-gray-300 hover:text-ms-green font-medium transition-colors duration-300'
            >
              Home
            </a>
            <a
              href='#cardapio'
              className='text-gray-300 hover:text-ms-green font-medium transition-colors duration-300'
            >
              Cardápio
            </a>
            <a
              href='#sobre'
              className='text-gray-300 hover:text-ms-green font-medium transition-colors duration-300'
            >
              Sobre
            </a>
            <a
              href='#contato'
              className='text-gray-300 hover:text-ms-green font-medium transition-colors duration-300'
            >
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <button
              onClick={handlerCallClick}
              className='flex items-center space-x-2 px-4 py-2 border border-ms-green text-ms-green hover:bg-ms-green hover:text-black transition-all duration-300 rounded-md text-sm font-medium'
            >
              <PhoneIcon />
              <span>Ligar</span>
            </button>
            <button className='flex items-center space-x-2 px-4 py-2 bg-ms-green hover:bg-green-400 text-black font-bold rounded-md text-sm transition-all duration-300 shadow-lg shadow-ms-green/30'>
              <ShoppingBagIcon />
              <span>Pedidos</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white p-2 hover:text-ms-green transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-gray-700'>
            <nav className='flex flex-col space-y-4 mt-4'>
              <a
                href='#home'
                className='text-gray-300 hover:text-ms-green font-medium transition-colors'
              >
                Home
              </a>
              <a
                href='#cardapio'
                className='text-gray-300 hover:text-ms-green font-medium transition-colors'
              >
                Cardápio
              </a>
              <a
                href='#sobre'
                className='text-gray-300 hover:text-ms-green font-medium transition-colors'
              >
                Sobre
              </a>
              <a
                href='#contato'
                className='text-gray-300 hover:text-ms-green font-medium transition-colors'
              >
                Contato
              </a>
              <div className='flex flex-col space-y-2 pt-4'>
                <button
                  onClick={handlerCallClick}
                  className='flex items-center justify-center space-x-2 px-4 py-2 border border-ms-green text-ms-green rounded-md text-sm hover:bg-ms-green hover:text-black transition-all'
                >
                  <PhoneIcon />
                  <span>Ligar</span>
                </button>
                <button className='flex items-center justify-center space-x-2 px-4 py-2 bg-ms-green text-black font-bold rounded-md text-sm hover:bg-green-400 transition-all'>
                  <ShoppingBagIcon />
                  <span>Pedidos</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

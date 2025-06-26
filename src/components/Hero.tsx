// Ícones SVG
const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    className='w-5 h-5'
    fill={filled ? '#fbbf24' : 'none'}
    stroke='#fbbf24'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
    />
  </svg>
);

const ClockIcon = () => (
  <svg className='w-6 h-6' fill='none' stroke='#00FF41' viewBox='0 0 24 24'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const TruckIcon = () => (
  <svg className='w-6 h-6' fill='none' stroke='#00FF41' viewBox='0 0 24 24'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

export function Hero() {
  return (
    <section className='relative py-20 overflow-hidden bg-gradient-to-br from-black via-green-950 to-black'>
      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <div className='flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={true} />
                  ))}
                </div>
                <span className='text-gray-400 font-medium'>
                  4.9 • Mais de 1000 avaliações
                </span>
              </div>

              <h1 className='text-5xl lg:text-6xl font-bold text-white leading-tight'>
                Saboreie o melhor
                <span className='text-ms-green animate-pulse'>
                  {' '}
                  hambúrguer{' '}
                </span>
                da Vila Kennedy!
              </h1>

              <p className='text-xl text-gray-400 leading-relaxed'>
                Ingredientes frescos, sabor incomparável e entrega rápida.
                Descubra por que somos a escolha número 1 da região!
              </p>
            </div>

            {/* Features */}
            <div className='grid grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='w-12 h-12 bg-ms-green/20 rounded-full flex items-center justify-center mx-auto mb-2 hover:bg-ms-green/30 transition-colors'>
                  <ClockIcon />
                </div>
                <p className='text-sm font-medium text-gray-300'>
                  Entrega em 30min
                </p>
              </div>
              <div className='text-center'>
                <div className='w-12 h-12 bg-ms-green/20 rounded-full flex items-center justify-center mx-auto mb-2 hover:bg-ms-green/30 transition-colors'>
                  <TruckIcon />
                </div>
                <p className='text-sm font-medium text-gray-300'>
                  Entrega Segura
                </p>
              </div>
              <div className='text-center'>
                <div className='w-12 h-12 bg-ms-green/20 rounded-full flex items-center justify-center mx-auto mb-2 hover:bg-ms-green/30 transition-colors'>
                  <StarIcon />
                </div>
                <p className='text-sm font-medium text-gray-300'>
                  Qualidade Premium
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='bg-ms-green hover:bg-green-400 text-black font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 shadow-lg shadow-ms-green/50 hover:shadow-ms-green/70 hover:scale-105'>
                Ver Cardápio Completo
              </button>
              <button className='border-2 border-ms-green text-ms-green hover:bg-ms-green hover:text-black text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105'>
                Fazer Pedido Agora
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className='relative'>
            <div className='relative z-10 bg-green-950 rounded-3xl shadow-2xl p-8 border border-ms-green/20 hover:border-ms-green/40 transition-all duration-300'>
              <img
                src='https://i.ibb.co/PvSg29H4/tri-onda-cartoon.png'
                alt='Hambúrguer tri onda delicioso'
                className='object-cover rounded-2xl hover:scale-105 transition-transform duration-300'
              />
            </div>
            {/* Decorative elements */}
            <div className='absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-ms-green/30 to-ms-green/10 rounded-full animate-bounce'></div>
            <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-ms-green/20 to-ms-green/5 rounded-full animate-pulse'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

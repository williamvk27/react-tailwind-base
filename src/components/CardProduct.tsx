interface CardProductProps {
  title: string;
  description: string;
  img?: string;
  price: string;
  variant?: 'default' | 'horizontal';
  rating?: string;
}

export const CardProduct = ({
  title,
  description,
  img,
  price,
  variant = 'default',
  rating = '4.8',
}: CardProductProps) => {
  const isHorizontal = variant === 'horizontal';

  const baseClasses =
    'bg-black text-card-foreground rounded-xl border border-ms-green/20 shadow-lg hover:shadow-ms-green/20 transition-all duration-300 p-3';
  const layoutClasses = isHorizontal
    ? 'w-full max-w-[516px] h-[130px]'
    : 'w-full max-w-xs';

  return (
    <div className={`${baseClasses} ${layoutClasses}`}>
      <div className={isHorizontal ? 'flex' : ''}>
        {/* Imagem */}
        <div
          className={
            isHorizontal
              ? 'w-24 flex-shrink-0 h-full relative overflow-hidden rounded-r-xl'
              : 'w-full h-28 rounded-lg overflow-hidden mb-3 relative'
          }
        >
          <img
            src={img || '/placeholder.svg'}
            alt={title}
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          />
          <div className='absolute top-2 right-2 bg-white/80 text-black text-xs px-2 py-1 rounded-full flex items-center gap-1'>
            <span>⭐</span>
            <span>{rating}</span>
          </div>
        </div>

        {/* Conteúdo */}
        <div
          className={`p-4 flex flex-col justify-between ${
            isHorizontal ? 'w-full' : ''
          }`}
        >
          <div>
            <h3 className='text-sm  font-semibold text-white'>{title}</h3>
            <p className='text-xs sm:text-[12px] text-gray-300 mt-0'>
              {description}
            </p>
          </div>

          <div className='flex justify-between items-center mt-1'>
            <span className='text-sm  text-ms-green'>{price}</span>
            <button className='bg-ms-green hover:bg-green-400  text-black font-bold px-3 py-1.5 rounded-lg text-xs transition-all duration-300 hover:scale-105'>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

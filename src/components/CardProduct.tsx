export const CardProduct = ({
  title,
  description,
  img,
  price,
  variant = 'default',
  rating = '4.8',
}) => {
  const isHorizontal = variant === 'horizontal';
  const baseClasses =
    'bg-card text-card-foreground rounded-xl border shadow-sm p-3 text-gray-400 font-medium';
  const layoutClasses = isHorizontal
    ? 'bg-ms-black border-ms-green/20 hover:shadow-2xl hover:shadow-ms-green/20 max-w-3xl w-full'
    : 'w-full max-w-xs';

  return (
    <div className={`${baseClasses} ${layoutClasses}`}>
      <div className={isHorizontal ? 'md:flex md:flex-row-reverse' : ''}>
        {/* Imagem */}
        <div
          className={
            isHorizontal
              ? 'md:w-1/6 w-full h-48 md:h-full relative overflow-hidden rounded-r-xl'
              : 'w-full h-28 rounded-lg overflow-hidden mb-3 relative'
          }
        >
          <img
            src={img || '/placeholder.svg'}
            alt={title}
            className='w-full h-full object-cover'
          />
          <div className='absolute top-1 right-1 bg-white/80 text-black text-xs px-2 py-[2px] rounded-full flex items-center gap-1'>
            <span>⭐</span>
            <span>{rating}</span>
          </div>
        </div>

        {/* Conteúdo: agora está DENTRO do flex */}
        <div
          className={`p-4 flex flex-col justify-between ${
            isHorizontal ? 'md:w-5/6' : ''
          }`}
        >
          <div>
            <h3 className='text-sm font-semibold leading-snug text-white'>
              {title}
            </h3>
            <p className='text-xs text-muted-foreground mt-1'>{description}</p>
          </div>

          <div className='flex justify-between items-center mt-3'>
            <span className='text-base font-bold text-green-500'>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

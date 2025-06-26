export const Section = ({ children, title = '' }) => {
  return (
    <section className='relative py-20 overflow-hidden bg-gradient-to-br from-black via-green-950 to-black flex flex-col items-center'>
      <div className='mb-8 w-full text-center'>
        <span className='text-white text-2xl font-bold'>{title}</span>
      </div>
      <div className='flex flex-row justify-around w-full'>{children}</div>
    </section>
  );
};

import React from 'react';

export const Section = ({ children, title = '' }) => {
  const isSingle = React.Children.count(children) === 1;
  return (
    <section className='relative py-20 overflow-hidden bg-gradient-to-br from-black via-green-950 to-black flex flex-col items-center'>
      <div className='mb-8 w-full text-center'>
        <span className='text-white text-2xl font-bold'>{title}</span>
      </div>

      <div
        className={`w-full max-w-7xl px-4 ${
          isSingle
            ? 'flex justify-center'
            : 'grid grid-cols-1 md:grid-cols-2 gap-6 m-auto justify-items-center '
        }`}
      >
        {children}
      </div>
    </section>
  );
};

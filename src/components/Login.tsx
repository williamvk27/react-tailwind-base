import type React from 'react';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className='flex flex-row items-center min-h-screen'>
      {/* Coluna da imagem (esquerda) - visível apenas em desktop */}
      <div className='hidden md:flex w-1/2 h-screen bg-gray-100 items-center justify-center'>
        <div className='relative w-64 h-64'>
          <img
            src='https://i.ibb.co/Jwpbr8hW/mascote-ms.jpg'
            alt='Mascot'
            className='w-full h-full object-contain'
            style={{
              filter:
                'hue-rotate(200deg) saturate(1.5) brightness(0.3) contrast(1.2)',
            }}
          />
          <div
            className='absolute top-4 left-4 w-16 h-6 bg-white'
            style={{
              background: 'linear-gradient(90deg, white 70%, transparent 100%)',
            }}
          ></div>
        </div>
      </div>

      {/* Coluna do formulário (direita) */}
      <div className='w-full md:w-1/2 p-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>MS SABORES</h1>
          <h2 className='text-xl text-gray-600'>Login</h2>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='space-y-2'>
            <label
              htmlFor='email'
              className='text-sm font-medium text-gray-700'
            >
              Email ou nome de usuário
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all'
              placeholder='Digite seu email'
              required
            />
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='password'
              className='text-sm font-medium text-gray-700'
            >
              Senha
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all'
              placeholder='Digite sua senha'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-lg'
          >
            Entrar
          </button>
        </form>

        <div className='mt-6 text-center'>
          <button
            type='button'
            className='text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors'
            onClick={() => console.log('Forgot password clicked')}
          >
            Esqueci a senha
          </button>
        </div>

        {/* Imagem apenas para mobile */}
        <div className='md:hidden mt-8 flex justify-center'>
          <div className='relative w-32 h-32'>
            <img
              src='https://i.ibb.co/Jwpbr8hW/mascote-ms.jpg'
              alt='Mascot'
              className='w-full h-auto'
              style={{
                filter:
                  'hue-rotate(200deg) saturate(1.5) brightness(0.3) contrast(1.2)',
              }}
            />
            <div
              className='absolute top-2 left-2 w-10 h-4 bg-white'
              style={{
                background:
                  'linear-gradient(90deg, white 70%, transparent 100%)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

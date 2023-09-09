import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Username'
          id='username'
          name='username'
          className='bg-slate-100 p-3 rounded-lg'
        />
        <input
          type='email'
          placeholder='Email'
          id='email'
          name='email'
          className='bg-slate-100 p-3 rounded-lg'
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          name='password'
          className='bg-slate-100 p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Sign up
        </button>
      </form>
      <p className='flex gap-2 mt-5'>
        Already have an account? <Link to='/signin' className='text-blue-600'>Sign in</Link>
      </p>
    </div>
  );
}

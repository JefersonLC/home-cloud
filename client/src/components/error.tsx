import { Link } from 'wouter'

interface ErrorProps {
  message: string
}

export default function Error({ message }: ErrorProps) {
  return (
    <div className='flex-grow flex flex-col items-center justify-center text-slate-500'>
      <h5 className='text-5xl'>404</h5>
      <p className='text-2xl font-bold mb-4 text-center mt-2'>{message}</p>
      <Link
        to='/'
        className='bg-slate-700 rounded-lg p-2 text-slate-50 hover:bg-slate-600'
      >
        Back to home
      </Link>
    </div>
  )
}

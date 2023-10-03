import { useLocation } from 'wouter'
import GoBackIcon from '../components/icons/go-back-icon'
import HomeIcon from '../components/icons/home-icon'

interface LayoutProps {
  children: JSX.Element
}

export default function DefaultLayout({ children }: LayoutProps) {
  const [location] = useLocation()

  return (
    <section className='bg-slate-100'>
      <main className='min-h-screen bg-slate-100 border-x-[1px] border-slate-200 p-3 mx-auto w-11/12 md:w-10/12 xl:w-2/3 flex flex-col'>
        <header className='text-center mb-10 text-slate-900'>
          <h1 className='font-[1000] text-5xl'>
            <span className='mr-6'>Home</span>
            <br />
            <span className='ml-6'>Cloud</span>
          </h1>
        </header>
        <div className='flex items-center mb-4 text-sm text-slate-600 ring-1 ring-slate-200 p-2'>
          <div className='mr-3 text-slate-50'>
            <button className='p-1 bg-slate-600'>
              <GoBackIcon />
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <HomeIcon /> {location.replaceAll('/', ' / ')}
          </div>
        </div>
        {children}
      </main>
    </section>
  )
}

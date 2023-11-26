import Navigation from '../components/layout/navigation'

interface LayoutProps {
  children: JSX.Element
}

export default function DefaultLayout({ children }: LayoutProps) {
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
        <Navigation />
        {children}
      </main>
    </section>
  )
}

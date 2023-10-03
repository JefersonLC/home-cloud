export default function Loading() {
  return (
    <div className='flex-grow flex items-center justify-center'>
      <div className='relative'>
        <div className='h-16 w-16 rounded-full border-t-8 border-b-8 border-slate-400'></div>
        <div className='absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-slate-900 animate-spin'></div>
      </div>
    </div>
  )
}

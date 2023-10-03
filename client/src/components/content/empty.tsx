import EmptyIcon from '../icons/empty-icon'

export default function Empty() {
  return (
    <div className='flex-grow flex flex-col items-center justify-center  text-slate-500'>
      <EmptyIcon />
      <p className='text-2xl font-bold'>Empty</p>
    </div>
  )
}

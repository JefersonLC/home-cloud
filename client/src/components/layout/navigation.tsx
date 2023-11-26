import { useState } from 'react'
import { useLocation } from 'wouter'
import AddIcon from '../icons/add-icon'
import GoBackIcon from '../icons/go-back-icon'
import HomeIcon from '../icons/home-icon'
import Modal from '../modal'

export default function Navigation() {
  const [modal, setModal] = useState(false)
  const [location] = useLocation()
  const isRoot = location === '/'

  function goBack() {
    if (isRoot) return

    history.back()
  }

  return (
    <div className='flex items-center mb-4 text-sm text-slate-600 ring-1 ring-slate-200 p-2'>
      <div className='mr-3 text-slate-50'>
        <button
          className='p-1 rounded-md bg-slate-600 disabled:hidden'
          onClick={goBack}
          disabled={isRoot}
        >
          <GoBackIcon />
        </button>
      </div>
      <div className='flex flex-grow items-center gap-2'>
        <HomeIcon /> {location.replaceAll('/', ' / ')}
      </div>
      <div className='text-slate-100'>
        <button
          className='p-1 rounded-md bg-emerald-500 flex items-center hover:bg-emerald-600'
          onClick={() => setModal(true)}
        >
          <AddIcon />
          <strong>Add Director</strong>
        </button>
        {modal && <Modal close={() => setModal(false)} />}
      </div>
    </div>
  )
}

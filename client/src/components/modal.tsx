import { createPortal } from 'react-dom'
import CloseIcon from './icons/close-icon'

interface ModalProps {
  close: () => void
}

export default function Modal({ close }: ModalProps) {
  return createPortal(
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-slate-50 p-6 rounded-lg select-none'>
        <header className='pb-2 mb-4 border-b-[1px] border-slate-300 flex items-center'>
          <h4 className='text-xl font-bold flex-grow'>Add Directory</h4>
          <button className='hover:text-red-700' onClick={close}>
            <CloseIcon />
          </button>
        </header>
        <form>
          <label htmlFor='dirName'>
            <strong className='block text-xs mb-1 px-1'>Name:</strong>
            <input
              id='dirName'
              type='text'
              className='border-2 border-slate-400 p-2 rounded-lg'
            />
          </label>
        </form>
      </div>
    </div>,
    document.body
  )
}

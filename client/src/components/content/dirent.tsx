import { useLocation } from 'wouter'
import { endsWithSlash } from '../../utils'
import DirIcon from '../icons/dir-icon'
import FileIcon from '../icons/file-icon'

interface DirentProps {
  dirent: 'file' | 'dir'
  name: string
}

export default function Dirent({ dirent, name }: DirentProps) {
  const bgColor = dirent === 'file' ? 'bg-slate-600' : 'bg-slate-800'
  const icon = dirent === 'file' ? <FileIcon /> : <DirIcon />

  const [location, setLocation] = useLocation()

  function openDirectory() {
    if (dirent === 'file') return

    if (endsWithSlash(location)) {
      setLocation(location + name)
      return
    }

    setLocation(location + '/' + name)
  }

  return (
    <article
      className={`${bgColor} p-4 rounded-lg select-none cursor-pointer hover:ring-4 ring-slate-400`}
      onClick={openDirectory}
    >
      <div className='flex gap-2 items-center text-white'>
        {icon}
        <span className='text-base sm:text-lg'>{name}</span>
      </div>
    </article>
  )
}

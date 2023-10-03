import Dirent from './content/dirent'
import Empty from './content/empty'

interface ContentProps {
  files: string[]
  directories: string[]
}

export default function Content({ files, directories }: ContentProps) {
  return (
    <>
      {
        !directories.length && !files.length 
          ? <Empty />
          : (
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
              {directories.map((dir) => (
                <Dirent dirent='dir' name={dir} key={dir} />
              ))}
              {files.map((file) => (
                <Dirent dirent='file' name={file} key={file} />
              ))}
            </div>
          )
        }
    </>
  )
}

import { storage_path } from '../config/env.js';

export function pathParser(path: string) {

  let parsedPath = path

  if (process.platform === 'win32') {
    parsedPath = path.replace('/', '\\')
  }

  return storage_path.concat(parsedPath)
}

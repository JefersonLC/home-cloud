import { useEffect } from 'react'
import { useLocation } from 'wouter'
import Content from '../components/content'
import Error from '../components/error'
import Loading from '../components/loading'
import { getContent } from '../services/api'
import { useContent } from '../stores/content-store'

export default function Home() {
  const [location] = useLocation()
  const { loading, error, data, setLoad, setError, setData } = useContent()

  useEffect(() => {
    setError(null)
    setLoad(true)

    getContent(location)
      .then((payload) => setData(payload))
      .catch((e) => setError(e))
      .finally(() => setLoad(false))
  }, [location])

  return (
    <>
      {
        loading 
          ? <Loading /> 
          : error 
            ?  <Error message={error.message} />
            : data && <Content files={data.files} directories={data.directories} />
      }
    </>
  )
}

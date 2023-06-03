import { IArticle, NewsResponse } from '@/types/types'
import { useEffect, useState } from 'react'

export default function useNewws (): [IArticle[] | undefined, boolean] {
  const [articles, setArticles] = useState<IArticle[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true)
      const res = await fetch(`${window.location.origin}/api/news`)
      const data: NewsResponse = await res.json()
      console.log(data)
      setArticles(data.articles.slice(0, 3))
      setLoading(false)
    }

    getArticles()
  }, [])

  return [articles, loading]
}

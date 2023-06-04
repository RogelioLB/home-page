'use client'

import useNews from '@/hooks/useNews'
import Card from './Card'
import Article from './Article'

export default function News () {
  const [articles, loading] = useNews()
  return (
    <Card className='hidden lg:flex flex-col gap-1 flex-1 animate-once animate-fade-up animate-delay-200'>
      {
        loading
          ? <h3>Cargando noticias...</h3>
          : <div className='flex gap-12 h-full'>
            {articles?.map((article) => <Article article={article} key={article.title} />)}
          </div>
      }
    </Card>
  )
}

'use client'

import useNewws from '@/hooks/useNews'
import Card from './Card'
import Article from './Article'

export default function News () {
  const [articles, loading] = useNewws()
  return (
    <Card className='flex flex-col gap-1 flex-1'>
      <div className='flex gap-12 h-full'>
        {articles?.map((article) => <Article article={article} key={article.title} />)}
      </div>
    </Card>
  )
}

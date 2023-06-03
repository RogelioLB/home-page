import { IArticle } from '@/types/types'

export default function Article ({
  article
}:
{
  article: IArticle
}) {
  return (
    <a href={article.url} className='flex-1'>
      <article className='flex flex-col gap-1'>
        <img src={article.image} alt={article.title} className='w-full aspect-video rounded' />
        <h4 className='px-1 text-sm font-light'>{article.title}</h4>
      </article>
    </a>
  )
}

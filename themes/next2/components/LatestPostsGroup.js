import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

/**
 * 最新文章列表
 * @param posts 所有文章数据
 * @param sliceCount 截取展示的数量 默认6
 * @constructor
 */
const LatestPostsGroup = ({ latestPosts, variant = 'soft' }) => {
  // 获取当前路径
  const currentPath = useRouter().asPath
  const { locale } = useGlobal()

  if (!latestPosts) {
    return <></>
  }

  return (
    <>
      <div className='text-sm pb-1 px-2 flex flex-nowrap justify-between'>
        <div
          className={
            variant === 'default'
              ? 'font-light text-gray-600 dark:text-gray-200'
              : 'next-section-title font-light'
          }>
          <i className='mr-2 fas fa-history' />
          {locale.COMMON.LATEST_POSTS}
        </div>
      </div>
      {latestPosts.map(post => {
        const selected =
          currentPath === `${siteConfig('SUB_PATH', '')}/${post.slug}`
        return (
          <SmartLink
            key={post.id}
            title={post.title}
            href={post?.href}
            passHref
            className={'my-1 flex font-light'}>
            <div
              className={
                (selected
                  ? variant === 'default'
                    ? 'next-right-active '
                    : 'next-soft-chip-active '
                  : variant === 'default'
                    ? 'next-right-hover text-gray-600 dark:text-gray-300 '
                    : 'next-soft-chip ') +
                'text-sm leading-5 py-2 flex px-3 rounded-sm duration-200 w-full cursor-pointer'
              }>
              <div className='line-clamp-2'>{post.title}</div>
            </div>
          </SmartLink>
        )
      })}
    </>
  )
}
export default LatestPostsGroup

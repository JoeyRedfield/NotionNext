import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

const CategoryGroup = ({ currentCategory, categories, variant = 'soft' }) => {
  if (!categories || categories.length === 0) return <></>
  const categoryCount = siteConfig('NEXT_PREVIEW_CATEGORY_COUNT')
  const categoryOptions = categories.slice(0, categoryCount)
  return (
    <>
      <div id='category-list' className='dark:border-gray-600 flex flex-wrap'>
        {categoryOptions.map(category => {
          const selected = currentCategory === category.name
          return (
            <SmartLink
              key={category.name}
              href={`/category/${category.name}`}
              passHref
              className={
                (selected
                  ? variant === 'default'
                    ? 'bg-gray-600 text-white dark:bg-gray-700 '
                    : 'next-soft-chip-active '
                  : variant === 'default'
                    ? 'next-right-hover text-gray-600 dark:text-gray-300 '
                    : 'next-soft-chip ') +
                ' text-sm w-full flex items-center justify-between gap-2 rounded-sm duration-300 px-3 cursor-pointer py-1.5 font-light'
              }>
              <div className='min-w-0 flex items-center'>
                <i
                  className={`${
                    selected
                      ? variant === 'default'
                        ? 'text-white fa-folder-open '
                        : 'fa-folder-open '
                      : variant === 'default'
                        ? 'text-gray-500 dark:text-gray-400 fa-folder '
                        : 'fa-folder '
                  } mr-2 fas`}
                />
                <span className='truncate'>{category.name}</span>
              </div>
              <span className='shrink-0 text-sm'>({category.count})</span>
            </SmartLink>
          )
        })}
      </div>
    </>
  )
}

export default CategoryGroup

import formatDate from '@/lib/utils/formatDate'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useEffect, useMemo, useState } from 'react'
import CONFIG from '../config'

const SiteInfoStatsCard = ({ postCount = 0, allPages = [], latestPosts = [] }) => {
  const { locale } = useGlobal()
  const isZh = locale?.LOCALE?.includes('中文')
  const [runtimeDays, setRuntimeDays] = useState(null)

  const labels = useMemo(
    () =>
      isZh
        ? {
            title: '网站资讯',
            posts: '文章数目',
            runtime: '运行时间',
            words: '总字数',
            visitors: '访客数',
            views: '总浏览量',
            updated: '最后更新时间',
            days: '天'
          }
        : {
            title: 'Site Info',
            posts: 'Posts',
            runtime: 'Runtime',
            words: 'Words',
            visitors: 'Visitors',
            views: 'Views',
            updated: 'Last Updated',
            days: 'days'
          },
    [isZh]
  )

  const siteCreateTime = siteConfig('NEXT_SITE_CREATE_TIME', null, CONFIG) || siteConfig('SINCE')
  const busuanziEnabledRaw = siteConfig('ANALYTICS_BUSUANZI_ENABLE')
  const busuanziEnabled =
    busuanziEnabledRaw === undefined ||
    busuanziEnabledRaw === null ||
    busuanziEnabledRaw === true ||
    String(busuanziEnabledRaw).toLowerCase() === 'true'

  useEffect(() => {
    const parseSince = value => {
      if (value === null || value === undefined || value === '') {
        return null
      }
      if (typeof value === 'number' || /^\d{4}$/.test(String(value))) {
        const year = Number(value)
        return Number.isNaN(year) ? null : new Date(year, 0, 1)
      }
      const parsed = new Date(value)
      return Number.isNaN(parsed.getTime()) ? null : parsed
    }

    const sinceDate = parseSince(siteCreateTime)
    if (!sinceDate) {
      setRuntimeDays(null)
      return
    }

    const today = new Date()
    const utcNow = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
    const utcStart = Date.UTC(
      sinceDate.getFullYear(),
      sinceDate.getMonth(),
      sinceDate.getDate()
    )
    const days = Math.max(1, Math.floor((utcNow - utcStart) / (1000 * 60 * 60 * 24)))
    setRuntimeDays(days)
  }, [siteCreateTime])

  const publishedPosts = useMemo(
    () =>
      Array.isArray(allPages)
        ? allPages.filter(page => page?.type === 'Post' && page?.status === 'Published')
        : [],
    [allPages]
  )

  const totalWordCount = useMemo(() => {
    const total = publishedPosts.reduce((sum, post) => {
      const words = Number(post?.wordCount || 0)
      return Number.isFinite(words) ? sum + words : sum
    }, 0)
    return total > 0 ? total : null
  }, [publishedPosts])

  const latestUpdatedText = useMemo(() => {
    const source =
      publishedPosts.length > 0
        ? publishedPosts
        : Array.isArray(latestPosts)
          ? latestPosts
          : []

    if (source.length === 0) {
      return '--'
    }

    let maxTime = 0
    source.forEach(post => {
      const val = post?.lastEditedDate || post?.publishDate
      const ts = val ? new Date(val).getTime() : 0
      if (Number.isFinite(ts) && ts > maxTime) {
        maxTime = ts
      }
    })

    return maxTime > 0 ? formatDate(maxTime) : '--'
  }, [latestPosts, publishedPosts])

  const formatCompact = value => {
    if (!value || value <= 0) return '--'
    if (value >= 1000) {
      const formatted = (value / 1000).toFixed(1)
      return `${formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted}k`
    }
    return String(value)
  }

  return (
    <>
      <div className='text-sm pb-1 px-2 flex flex-nowrap justify-between'>
        <div className='font-light text-gray-600 dark:text-gray-200'>
          <i className='mr-2 fas fa-chart-line' />
          {labels.title}
        </div>
      </div>
      <div className='text-sm px-2 pb-1'>
        <div className='next-muted flex items-center justify-between py-1.5'>
          <span>{labels.posts}</span>
          <span className='font-medium text-gray-700 dark:text-gray-100'>{postCount}</span>
        </div>
        <div className='next-muted flex items-center justify-between py-1.5'>
          <span>{labels.runtime}</span>
          <span className='font-medium text-gray-700 dark:text-gray-100'>
            {runtimeDays ? String(runtimeDays) + ' ' + labels.days : '--'}
          </span>
        </div>
        <div className='next-muted flex items-center justify-between py-1.5'>
          <span>{labels.words}</span>
          <span className='font-medium text-gray-700 dark:text-gray-100'>
            {formatCompact(totalWordCount)}
          </span>
        </div>
        {busuanziEnabled && (
          <>
            <div className='next-muted flex items-center justify-between py-1.5'>
              <span>{labels.visitors}</span>
              <span className='font-medium text-gray-700 dark:text-gray-100 busuanzi_value_site_uv'>
                --
              </span>
            </div>
            <div className='next-muted flex items-center justify-between py-1.5'>
              <span>{labels.views}</span>
              <span className='font-medium text-gray-700 dark:text-gray-100 busuanzi_value_site_pv'>
                --
              </span>
            </div>
          </>
        )}
        <div className='next-muted flex items-center justify-between py-1.5'>
          <span>{labels.updated}</span>
          <span className='font-medium text-gray-700 dark:text-gray-100'>{latestUpdatedText}</span>
        </div>
      </div>
    </>
  )
}

export default SiteInfoStatsCard

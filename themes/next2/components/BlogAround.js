import SmartLink from '@/components/SmartLink'

/**
 * 上一篇，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function BlogAround ({ prev, next }) {
  if (!prev || !next) {
    return <></>
  }
  return (
    <section className='next-section-title border-t flex flex-wrap lg:flex-nowrap lg:space-x-10 justify-between py-2'>
      {prev && <SmartLink
        href={`/${prev.slug}`}
        passHref
        className='next-link-accent text-sm py-3 hover:underline cursor-pointer'>

        <i className='mr-1 fas fa-angle-double-left' />{prev.title}

      </SmartLink>}
      {next && <SmartLink
        href={`/${next.slug}`}
        passHref
        className='next-link-accent text-sm flex py-3 hover:underline cursor-pointer'>
        {next.title}
        <i className='ml-1 my-1 fas fa-angle-double-right' />

      </SmartLink>}
    </section>
  );
}

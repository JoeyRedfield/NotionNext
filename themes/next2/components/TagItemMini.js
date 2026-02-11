import SmartLink from '@/components/SmartLink'

const TagItemMini = ({ tag, selected = false, variant = 'soft' }) => {
  const tagLabel = `${tag.name}${tag.count ? `(${tag.count})` : ''}`
  const defaultClass = selected
    ? 'text-white dark:text-gray-100 bg-gray-600 dark:bg-gray-700'
    : `next-right-hover-chip text-gray-600 dark:text-gray-300 notion-${tag.color}_background border border-transparent`

  return (
    <SmartLink
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`cursor-pointer inline-flex max-w-full items-center rounded-sm duration-200
        mr-2 px-2.5 py-1 text-sm leading-5 whitespace-nowrap ${
        variant === 'default'
          ? defaultClass
          : selected
            ? 'next-soft-chip-active'
            : 'next-soft-chip'
      }`}>

      <span className='truncate font-light'>{selected && <i className='fas fa-tag mr-1'/>} {tagLabel}</span>

    </SmartLink>
  );
}

export default TagItemMini

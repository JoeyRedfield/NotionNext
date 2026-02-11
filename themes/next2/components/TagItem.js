import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'

const TagItem = ({ tag, selected }) => {
  const { locale } = useGlobal()
  if (!tag) {
    return <div>{locale.COMMON.NOTAG}</div>
  }
  return (
    <SmartLink
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      legacyBehavior>
      <li
        className={`${selected ? 'next-soft-chip-active' : 'next-soft-chip'} list-none cursor-pointer rounded-md  
        duration-200 mr-1 my-1 px-2 py-1 text-sm whitespace-nowrap 
        `}>
        <div>
          {selected && <i className='fas fa-tag mr-1'/>} {`${tag.name} `} {tag.count ? `(${tag.count})` : ''}
        </div>
      </li>
    </SmartLink>
  );
}

export default TagItem

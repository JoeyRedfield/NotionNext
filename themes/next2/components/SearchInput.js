import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
import { useImperativeHandle, useRef, useState } from 'react'
import { useNextGlobal } from '..'
import { siteConfig } from '@/lib/config'

let lock = false

const SearchInput = ({ currentTag, keyword, cRef }) => {
  const { locale } = useGlobal()
  const [onLoading, setLoadingState] = useState(false)
  const router = useRouter()
  const searchInputRef = useRef()
  const { searchModal } = useNextGlobal()

  useImperativeHandle(cRef, () => {
    return {
      focus: () => {
        searchInputRef?.current?.focus()
      }
    }
  })

  const handleFocus = () => {
    // 使用Algolia
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal.current.openSearch()
    }
  }

  const handleSearch = () => {
    // 使用Algolia
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal.current.openSearch()
      return
    }

    const key = searchInputRef.current.value
    if (key && key !== '') {
      setLoadingState(true)
      router.push({ pathname: '/search/' + key }).finally(() => {
        setLoadingState(false)
      })
      // location.href = '/search/' + key
    } else {
      router.push({ pathname: '/' })
    }
  }
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) { // 回车
      handleSearch(searchInputRef.current.value)
    } else if (e.keyCode === 27) { // ESC
      cleanSearch()
    }
  }
  const cleanSearch = () => {
    searchInputRef.current.value = ''
    setShowClean(false)
  }
  function lockSearchInput() {
    lock = true
  }

  function unLockSearchInput() {
    lock = false
  }
  const [showClean, setShowClean] = useState(false)
  const updateSearchKey = (val) => {
    if (lock) {
      return
    }
    searchInputRef.current.value = val
    if (val) {
      setShowClean(true)
    } else {
      setShowClean(false)
    }
  }

  return (
    <div
      className='next-card next-focus-accent relative flex w-full items-center rounded-md border transition-all duration-200'
      data-aos='fade-down'
      data-aos-duration='500'
      data-aos-delay='200'
      data-aos-once='true'
      data-aos-anchor-placement='top-bottom'>
      <input
        ref={searchInputRef}
        type='text'
        placeholder={
          currentTag
            ? `${locale.SEARCH.TAGS} #${currentTag}`
            : `${locale.SEARCH.ARTICLES}`
        }
        className='w-full bg-transparent pl-4 pr-16 text-sm font-light leading-10 text-black outline-none transition dark:text-white'
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        onCompositionStart={lockSearchInput}
        onCompositionUpdate={lockSearchInput}
        onCompositionEnd={unLockSearchInput}
        onChange={e => updateSearchKey(e.target.value)}
        defaultValue={keyword || ''}
      />

      {showClean && (
        <button
          type='button'
          onClick={cleanSearch}
          aria-label='Clear search'
          className='next-link-accent absolute right-9 rounded p-1 text-gray-500 transition-colors duration-200 dark:text-gray-400'>
          <i className='fas fa-times' />
        </button>
      )}

      <button
        type='button'
        onClick={handleSearch}
        aria-label='Search'
        className='next-link-accent absolute right-2 rounded p-1 text-gray-500 transition-colors duration-200 dark:text-gray-400'>
        <i
          className={`fas ${onLoading ? 'fa-spinner animate-spin' : 'fa-search'}`}
        />
      </button>
    </div>
  )
}

export default SearchInput

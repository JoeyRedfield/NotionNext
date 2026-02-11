import SmartLink from '@/components/SmartLink'

/**
 * 悬浮在屏幕右下角,联系我的按钮
 * @returns {JSX.Element}
 * @constructor
 */
const ContactButton = () => {
  return (
    (<SmartLink
      href='/about'
      className={'fixed right-10 bottom-40 animate__fadeInRight animate__animated animate__faster'}>

      <span
        className='next-accent-button px-5 py-3 cursor-pointer shadow-card text-xl transform duration-200 hover:shadow'>
        <i className='fas fa-info' title='about' />
      </span>

    </SmartLink>)
  );
}

export default ContactButton

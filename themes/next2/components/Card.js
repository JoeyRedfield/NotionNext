/**
 * 卡片组件
 * @param {*} param0
 * @returns
 */
const Card = (props) => {
  const { children, headerSlot, className } = props
  return (
    <div className={className}>
      <>{headerSlot}</>
      <section className='next-card rounded-md border bg-white px-3 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md dark:bg-hexo-black-gray'>
        {children}
      </section>
    </div>
  )
}
export default Card

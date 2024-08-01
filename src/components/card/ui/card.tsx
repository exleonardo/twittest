import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from '../style/card.module.scss'

type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ ...restProps }, ref) => {
  return <div className={s.root} ref={ref} {...restProps}></div>
})

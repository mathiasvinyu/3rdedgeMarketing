import React from 'react'
import styles from './Section.module.scss'

interface SectionProps {
  id?: string
  children: React.ReactNode
  bg?: 'dark' | 'surface'
  borderTop?: boolean
  borderBottom?: boolean
  className?: string
  containerClassName?: string
  as?: 'section' | 'div' | 'article'
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  bg = 'dark',
  borderTop = false,
  borderBottom = false,
  className = '',
  containerClassName = '',
  as: Component = 'section',
}) => {
  const sectionClasses = [
    styles.section,
    styles[bg],
    borderTop ? styles.borderTop : '',
    borderBottom ? styles.borderBottom : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component id={id} className={sectionClasses}>
      <div className={`${styles.container} ${containerClassName}`.trim()}>
        {children}
      </div>
    </Component>
  )
}

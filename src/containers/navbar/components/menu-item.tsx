'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface IMeuItem {
  id: number
  name: string
  icon: React.JSX.Element
  link: string
}

export const MenuItem = ({ id, name, icon, link }: IMeuItem) => {
  const pathname = usePathname()

  return (
    <React.Fragment>
      <Link
        key={id}
        href={`/admin/${link}`}
        className={`nav-link-item flex jusitfy-start items-center gap-3 w-full transition-all hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md py-3 px-2 ${
          pathname.includes(link) && link !== '/' ? 'bg-neutral-100 dark:hover:bg-neutral-700' : ''
        }`}
      >
        {icon}
        <span className="nav-link-item-text text-xl font-semibold dark:text-neutral-200">
          {name}
        </span>
      </Link>
    </React.Fragment>
  )
}

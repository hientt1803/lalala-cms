import {
  BedDoubleIcon,
  LayoutDashboard,
  MenuIcon,
  PackageIcon,
  Settings2Icon,
  User,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuItem } from './menu-item'
import React from 'react'
import { Separator } from '@/components/ui/separator'

const MENU_LIST = [
  {
    id: 1,
    label: 'Overview',
    items: [
      {
        id: 1,
        name: 'Dashboard',
        icon: <LayoutDashboard className="w-6 h-6" />,
        link: '/',
      },
      {
        id: 2,
        name: 'Users',
        icon: <User className="w-6 h-6" />,
        link: 'collections/users',
      },
    ],
  },
  {
    id: 2,
    label: 'Collections',
    items: [
      {
        id: 3,
        name: 'Hotels',
        icon: <BedDoubleIcon className="w-6 h-6" />,
        link: 'collections/hotels',
      },
      {
        id: 4,
        name: 'Pages',
        icon: <PackageIcon className="w-6 h-6" />,
        link: 'collections/pages',
      },
    ],
  },
  {
    id: 3,
    label: 'Settings & Config',
    items: [
      {
        id: 5,
        name: 'Settings',
        icon: <Settings2Icon className="w-6 h-6" />,
        link: 'collections/settings',
      },
      {
        id: 6,
        name: 'Menu',
        icon: <MenuIcon className="w-6 h-6" />,
        link: 'collections/menus',
      },
    ],
  },
]

export const MenuList = () => {
  return (
    <div>
      <div className="mt-20 mb-10">
        <Image src="/gradient.webp" alt="logo" width={220} height={50} />
        <div className="flex justify-start items-center mt-3">
          <Link
            href="/admin"
            className="nav-link-item-text text-2xl font-bold uppercase font-mono dark:text-neutral-100"
          >
            LALALA BOOKING
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-1 w-full">
        {MENU_LIST.map((item) => (
          <React.Fragment key={item.id}>
            <span className="text-start text-neutral-500 mr-auto text-sm font-bold mt-5">
              {item.label}
            </span>
            <Separator className="mb-4 w-full" />

            {item.items.map((menu) => (
              <MenuItem
                key={menu.id}
                id={menu.id}
                icon={menu.icon}
                link={menu.link}
                name={menu.name}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

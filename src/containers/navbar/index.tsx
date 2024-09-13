import { LogOutIcon } from 'lucide-react'
import { MenuList } from './components/menu-list'

export const NavBarContainer = () => {
  return (
    <div
      className="container min-w-full min-h-screen border-black border-r-2"
      style={{
        boxShadow: '10px 10px 10px #212121',
      }}
    >
      {/* Menu */}
      <MenuList />

      <div className="mt-32">
        <div className="transition-all hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md flex gap-2 cursor-pointer p-2">
          <LogOutIcon />
          <span className="cursor-pointer font-semibold">Đăng xuất</span>
        </div>
      </div>
    </div>
  )
}

'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="outline" color="dark" size="icon">
      {theme == 'light' ? (
        <MoonIcon
          onClick={() => setTheme('dark')}
          className="absolute h-[1.2rem] w-[1.2rem] dark:text-white  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      ) : (
        <SunIcon
          onClick={() => setTheme('light')}
          className="h-[1.2rem] w-[1.2rem]  dark:text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
      )}
    </Button>
  )
}

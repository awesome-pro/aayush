"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"
import { navLinks } from "@/data"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useState } from "react"
//import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { ChevronDownCircleIcon, Menu } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 bg-opacity-50 backdrop-blur-2xlw-full shadow-md px-5">
      <div className="flex justify-between items-center ">
        {/* Logo */}
        <Link className="flex items-center" href={'/'}>
          <Image src="/logo.png" width={50} height={40} alt="logo" className="hover:z-20"/>
          <span className="text-2xl font-bold text-primary hover:bg-yellow-50 ml-2">Aarogya</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <Button variant="ghost" size={'sm'}>
                {link.title}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <Menu /> : <ChevronDownCircleIcon />}
          </button>
        </div>

        {/* User Section */}
        <div className="hidden md:flex items-center gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button size="sm">
                Free ESG Score
              </Button>
            </Link>
          </SignedOut>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 p-5 bg-white border-t">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <Button variant="ghost" size={'sm'} className="w-full text-left">
                {link.title}
              </Button>
            </Link>
          ))}
          <div className="mt-3">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button size="sm" className="w-full">
                   Free ESG Score
                </Button>
              </Link>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

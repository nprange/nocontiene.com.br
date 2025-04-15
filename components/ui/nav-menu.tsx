'use client';

import Link from 'next/link';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { NavUser } from '@/components/ui/nav-user';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import { Separator } from './separator';

export function NavMenu() {
  return (
    <div className="lg:hidden">
      <Drawer direction="left">
        <DrawerTrigger className="flex items-center">
          <Menu />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="w-full">
            <DrawerTitle className="sr-only">Menu</DrawerTitle>
            <DrawerClose className="flex flex-col w-full items-end">
              <X />
            </DrawerClose>
            <Button asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild variant={'outline'}>
              <Link href="/signup">Sign up</Link>
            </Button>
            <Separator className="mt-4" />
          </DrawerHeader>
          <div className="flex flex-col items-start">
            <Button asChild variant={'link'}>
              <Link href="/review">Write a review</Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link href="/plan-gluten-free-trip">
                Plan your gluten-free trip
              </Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link href="/gluten-free-guides">Gluten-free guides</Link>
            </Button>
            <div className="w-full p-4">
              <Separator />
            </div>
            <Button asChild variant={'link'}>
              <Link href="/gluten-free-restaurants">
                Gluten-free restaurants
              </Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link href="/gluten-free-hotels">Gluten-free hotels</Link>
            </Button>
            <div className="w-full p-4">
              <Separator />
            </div>
            <Button asChild variant={'link'}>
              <Link href="/suggest-gluten-free-place">
                Suggest a gluten-free place
              </Link>
            </Button>
          </div>
          <DrawerFooter>
            <NavUser
              user={{
                name: 'Nicolas Prange',
                email: 'nicolas.prange@nocontiene.com',
                avatar: 'https://github.com/nprange.png',
              }}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

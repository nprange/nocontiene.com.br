'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Button } from './button';
import { ChevronDownIcon } from 'lucide-react';

export function NavHeader() {
  return (
    <div className="flex flex-row gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outline'}
            className="hidden h-12 lg:flex lg:border-none lg:p-0"
          >
            Discover
            <ChevronDownIcon
              className="relative top-[1px] ml-1 size-3"
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
          align="start"
        >
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/popular-gluten-free-destinations">
                Popular gluten-free destinations
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/popular-gluten-free-restaurants">
                Popular gluten-free restaurants
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/top-gluten-free-guides-from-users">
                Top gluten-free guides from users
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/top-gluten-free-weekend-trips">
                Top gluten-free weekend trips
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outline'}
            className="hidden h-12 lg:flex lg:border-none lg:p-0"
          >
            Trips
            <ChevronDownIcon
              className="relative top-[1px] ml-1 size-3"
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
          align="start"
        >
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/plan-gluten-free-trip">Plan a gluten-free trip</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/gluten-free-travel-guides">
                Gluten-free travel guides
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/create-gluten-free-trip-ai">
                Create a gluten-free trip with AI
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outline'}
            className="hidden h-12 lg:flex lg:border-none lg:p-0"
          >
            Review
            <ChevronDownIcon
              className="relative top-[1px] ml-1 size-3"
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
          align="start"
        >
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/write-review">Write a review</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/suggest-gluten-free-place">
                Suggest a gluten-free place
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outline'}
            className="hidden h-12 lg:flex lg:border-none lg:p-0"
          >
            More
            <ChevronDownIcon
              className="relative top-[1px] ml-1 size-3"
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
          align="start"
        >
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/Restaurants">Restaurants</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/hotels">Hotels</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

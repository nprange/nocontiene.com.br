import { NavHeader } from '@/components/ui/nav-header';
import { NavMenu } from '@/components/ui/nav-menu';
import { NavUser } from '@/components/ui/nav-user';
import Link from 'next/link';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-background sticky top-0 inset-x-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
        <div className="flex h-14 w-full items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-2">
            <NavMenu />
            <Link href="/" className="font-bold text-xl">
              No Contiene
            </Link>
          </div>

          <NavHeader />

          <div className="hidden lg:flex">
            <NavUser
              user={{
                name: 'Nicolas Prange',
                email: 'nicolas.prange@nocontiene.com',
                avatar: 'https://github.com/nprange.png',
              }}
            />
          </div>
        </div>
      </header>
      {children}
    </>
  );
}

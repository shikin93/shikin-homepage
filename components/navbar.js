import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { HiHome, HiMenuAlt1, HiSun, HiMoon } from 'react-icons/hi';
import { MdArticle, MdPerson } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { Fragment, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const navLink = [
  {
    name: 'home',
    href: '/',
    icon: <HiHome />,
  },
  {
    name: 'about',
    href: '/about',
    icon: <MdPerson />,
  },
  {
    name: 'blog',
    href: '/articles',
    icon: <MdArticle />,
  },
  {
    name: 'Github Source',
    href: 'https://github.com/shikin93',
    icon: <AiFillGithub />,
  }
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <nav className="py-5">
      <Popover className="md:hidden">
        {({ open }) => (
          <>
            <Popover.Button className={`${open ? 'bg-accentDark' : ''} border-2 mx-5 border-accentDark hover:bg-accentDark rounded-md fixed z-40`}>
              <HiMenuAlt1 className="text-3xl" />
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-accentDark opacity-30" />
            <Transition
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >

              <Popover.Panel>
                {({ close }) => (
                  <div className="bg-background dark:bg-font fixed w-full top-0 h-screen py-20 px-4">
                    {
                      navLink.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <div className="font-bold p-2 rounded-lg flex gap-4 hover:bg-accentSoft hover:text-background">
                            <span className="text-xl">{item.icon}</span>
                            <button onClick={close}>
                              {item.name}
                            </button>
                          </div>
                        </Link>
                      ))
                    }
                    <div className="border-t-2 border-t-font dark:border-t-background mt-4 pt-4">
                      {currentTheme === 'dark' ? (
                        <button
                          className="p-2 rounded-lg border border-background hover:bg-background text-background hover:text-font"
                          onClick={() => setTheme('light')}
                        >
                          <HiSun />
                        </button>
                      ) : (
                        <button
                          className="p-2 rounded-lg border border-font hover:bg-font hover:text-background"
                          onClick={() => setTheme('dark')}
                        >
                          <HiMoon />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <div className="hidden bg-background dark:bg-font bg-opacity-95 w-full py-5 top-0 left-0 md:flex md:justify-between md:items-center md:fixed md:px-14 lg:px-[24.2rem]">
        <ul className="flex">
          {
            navLink.map((item) => (
              <li key={item.name} className="py-1 px-2 rounded-lg hover:bg-accentSoft hover:text-background">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
        <div>
          {currentTheme === 'dark' ? (
            <button
              className="p-2 rounded-lg hover:bg-accentSoft hover:text-background"
              onClick={() => setTheme('light')}
            >
              <HiSun />
            </button>
          ) : (
            <button
              className="p-2 rounded-lg hover:bg-accentSoft hover:text-background"
              onClick={() => setTheme('dark')}
            >
              <HiMoon />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { HiHome, HiMenuAlt1 } from 'react-icons/hi';
import { MdArticle } from 'react-icons/md';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { Fragment } from 'react';

const navLink = [
  {
    name: 'Home',
    href: '/',
    icon: <HiHome />,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: <AiFillProject />,
  },
  {
    name: 'Blog',
    href: '/articles',
    icon: <MdArticle />,
  },
  {
    name: 'Github Source',
    href: 'https://github.com/shikin93',
    icon: <AiFillGithub />,
  }
];

const Navbar = () => (
  <nav className="p-5">
    <Popover className="relative md:hidden">
      <Popover.Button className="border-2 border-accentDark rounded-md">
        <HiMenuAlt1 className="text-3xl" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 mt-2">
          <div className="bg-accentSoft py-8 px-4 w-56 border-2 border-accentDark rounded-lg">
            {
              navLink.map((item) => (
                <div key={item.name} className="text-left font-bold p-2 rounded-lg flex items-center gap-2 hover:bg-font hover:text-background">
                  <span>{item.icon}</span>
                  <button>
                    <Link href={item.href}>{item.name}</Link>
                  </button>
                </div>
              ))
            }
          </div>
        </Popover.Panel>
      </Transition>

    </Popover>
    <ul className="hidden md:flex">
      {
        navLink.map((item) => (
          <li key={item.name} className="py-1 px-2 rounded-lg hover:bg-font hover:text-background">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default Navbar;

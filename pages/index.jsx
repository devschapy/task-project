'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import TopSocialSection from '@/components/TopSocialSection';
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main>
      <TopSocialSection />
      <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="blue-gray">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
      </div>
    </Navbar>
      <nav className="border ">
        <div className="container flex justify-between">
          <Link href="/">
            {/* <Image
              width={100}
              height={100}
              alt="brand_logo"
              src="/image/logo.png"
            /> */}
            mm
          </Link>

          <div className="">
            
          </div>

          <div className="flex gap-3 items-center">
            
          </div>
        </div>
      </nav>
    </main>
  );
}

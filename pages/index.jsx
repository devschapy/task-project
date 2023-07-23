import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <main>
      <section className="bg-secondary-100">
        <div className="container py-1.5">
          <div className="justify-between flex items-center gap-4">
            <div className="flex gap-2">
              <button className="bg-primary-100 text-white text-xs rounded-full py-1 px-4">
                Become a Seller
              </button>
              <button className="text-white text-xs rounded-full py-1 px-4">
                Free Express Shipping
              </button>
            </div>

            <div className="flex gap-3 items-center">
              <select
                name="country"
                id="country"
                className="bg-secondary-100 text-white text-xs focus:outline-none"
              >
                <option value="1">USD</option>
                <option value="2">BD</option>
              </select>
              <select
                name="lang"
                id="lang"
                className="bg-secondary-100 text-white text-xs focus:outline-none"
              >
                <option value="1">English</option>
                <option value="2">Bangla</option>
              </select>

              <Link href="/">
                <Icon icon="mdi:twitter" color="white" className='hover:scale-110 duration-300'/>
              </Link>
              <Link href="/">
              <Icon icon="ps:linkedin" color="white" width='14' height="14" className='hover:scale-110 duration-300' />
              </Link>
              <Link href="/">
              <Icon icon="ant-design:google-plus-outlined" color="white" width='18' height="18" className='hover:scale-110 duration-300' />
              </Link>
              <Link href="/">
              <Icon icon="cib:pinterest-p" color="white" width='14' height="14" className='hover:scale-110 duration-300' />
              </Link>
              <Link href="/">
              <Icon icon="mdi:instagram" color="white" className='hover:scale-110 duration-300' />
              </Link>
              <Link href="/">
              <Icon icon="carbon:logo-facebook" color="white" className='hover:scale-110 duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <h1>Hello 6amTech</h1>
    </main>
  );
}

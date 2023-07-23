import Image from 'next/image';
import { Inter } from 'next/font/google';

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

            

          </div>
        </div>
      </section>
      <h1>Hello 6amTech</h1>
    </main>
  );
}

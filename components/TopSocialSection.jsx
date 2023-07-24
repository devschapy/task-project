import Link from 'next/link';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import CustomSelect from '@/components/common/CustomSelect';
import CustomButton from '@/components/common/CustomButton';

const TopSocialSection = () => {
  const [countries, setCountries] = useState([
    { id: 1, title: 'USD' },
    { id: 2, title: 'BD' },
  ]);
  const [langs, setLangs] = useState([
    { id: 1, title: 'English' },
    { id: 2, title: 'Bangla' },
  ]);

  return (
    <section className="bg-secondary-100">
      <div className="container py-1.5">
        <div className="justify-between flex items-center gap-4">
          <div className="flex gap-2">
            <CustomButton btnType="primary">Become a Seller</CustomButton>
            <CustomButton>Free Express Shipping</CustomButton>
          </div>

          <div className="flex gap-3 items-center">
            <CustomSelect options={countries} name="country" id="country" />
            <CustomSelect options={langs} name="lang" id="lang" />

            <Link href="/">
              <Icon
                icon="mdi:twitter"
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="ps:linkedin"
                color="white"
                width="14"
                height="14"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="ant-design:google-plus-outlined"
                width="18"
                height="18"
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="cib:pinterest-p"
                width="14"
                height="14"
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="mdi:instagram"
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="carbon:logo-facebook"
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSocialSection;

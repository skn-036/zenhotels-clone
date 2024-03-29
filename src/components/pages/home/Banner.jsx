import { useEffect, useState } from 'react';
import { RxExternalLink } from 'react-icons/rx';
import { HotelSearchPlaceholder } from '@/components/pages/hotel/placeholder-search/HotelSearchPlaceholder';

export const Banner = () => {
  const [backgroundClass, setBackgroundClass] = useState('bg-primary');
  useEffect(() => {
    const image = new Image();
    image.src =
      'https://cdn.worldota.net/t/2600x1240/ostrota_mainpage/f1/86/f186da4c80d117b215ae0416dc6e19a298df2ec5.png';
    image.onload = () => {
      setTimeout(() => {
        setBackgroundClass(`bg-primary opacity-60`);
      }, 2000);

      setTimeout(() => {
        setBackgroundClass(
          `bg-[url('https://cdn.worldota.net/t/2600x1240/ostrota_mainpage/f1/86/f186da4c80d117b215ae0416dc6e19a298df2ec5.png')] bg-cover bg-center opacity-70`
        );
      }, 2500);

      setTimeout(() => {
        setBackgroundClass(
          `bg-[url('https://cdn.worldota.net/t/2600x1240/ostrota_mainpage/f1/86/f186da4c80d117b215ae0416dc6e19a298df2ec5.png')] bg-cover bg-center opacity-100`
        );
      }, 3000);
    };
  }, []);

  return (
    <div
      className={`flex h-[620px] w-full justify-center px-8 py-20 transition-opacity duration-1000 ${backgroundClass}`}
    >
      <div className="flex w-full max-w-[980px] flex-col items-center gap-8 ">
        <h1 className="max-w-[80%] text-center text-5xl text-white">
          Find hotels, hostels, and apartments
        </h1>

        <div className=" w-full rounded-md bg-transparent">
          <div className="flex-start h-14 w-full gap-2">
            <div className="h-14 rounded-t-md bg-white px-5 pt-3 font-medium">
              Hotels
            </div>

            <a href="#">
              <div className="mb-2 inline-flex h-12 gap-2 rounded-md bg-white px-5 pt-3 font-medium opacity-70">
                For business trips
                <RxExternalLink
                  size={18}
                  className="mt-1"
                />
              </div>
            </a>
          </div>

          <div className="min-h-[192px] w-full rounded-b-md rounded-tr-md bg-white p-4 shadow-google">
            <HotelSearchPlaceholder />
          </div>
        </div>
      </div>
    </div>
  );
};

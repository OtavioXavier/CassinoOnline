'use client'
import { useState, useEffect } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import Image from 'next/image';
import GameIcons from './GameIcons';

export default function Gamebox() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth <= 600) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    window.addEventListener('resize', updateItemsPerSlide);
    updateItemsPerSlide();

    return () => {
      window.removeEventListener('resize', updateItemsPerSlide);
    };
  }, []);

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide,
      withLoop: true,
      startEndGutter: 40,
      gutter:10,
      initialStartingPosition:'center',
      items: [
        {
            id: "item-1",
            renderItem: (
              <div className="hover:scale-110 transition-all">
                <Image
                  src={"/CassinoLive.jfif"}
                  width={300}
                  height={300}
                  alt="Game"
                />
              </div>
            ),
          },
          {
            id: "item-2",
            renderItem: (
              <div className="hover:scale-110 transition-all">
                <Image
                  src={"/CassinoRoxo.jpg"}
                  width={300}
                  height={300}
                  alt="Game"
                />
              </div>
            ),
          },
          {
            id: "item-3",
            renderItem: (
              <div className="hover:scale-110 transition-all">
                <Image
                  src={"/CassinoVerde.jpg"}
                  width={300}
                  height={300}
                  alt="Game"
                />
              </div>
            ),
          },
          {
            id: "item-4",
            renderItem: (
              <div className="hover:scale-110 transition-all">
                <Image
                  src={"/5LuckyLions.jfif"}
                  width={300}
                  height={300}
                  alt="Game"
                />
              </div>
            ),
          },
      ],
    });

  return (
    <div className="overflow-x-hidden">
      <GameIcons/>
      {carouselFragment}
      <div className="float-right mr-10 mt-5">
        <button type="button" onClick={slideToPrevItem} className="p-2 px-4 m-2 bg-green-600 rounded-lg hover:scale-110 transition-all">
          prev
        </button>
        <button type="button" onClick={slideToNextItem} className="p-2 px-4 m-2 bg-green-600 rounded-lg hover:scale-110 transition-all">
          Next
        </button>
      </div>
    </div>
  );
}

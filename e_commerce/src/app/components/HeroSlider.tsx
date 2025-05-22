'use client'

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { getSanityImageUrl } from "../../../lib/sanityHelpers"
import { GalleryImage } from "../../../public/types/slider"

export default function HeroSlider({ slides }: { slides: GalleryImage[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="relative h-full w-full"
    >
      {slides.map((image) => {
        const ref = image?.asset?._ref;
        const imageUrl = ref ? getSanityImageUrl(ref) : null;

        return (
          <SwiperSlide key={image._key}>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={image.alt ?? "Slide"}
                fill
                priority
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                Image not available
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

"use client";

import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "@/components/layout/Container";
import { imageUrl } from "./data";

const testimonials = [
  {
    name: "Rahim Hossain",
    location: "Dhaka, Bangladesh",
    image: "photo-1500648767791-00dcc994a43e",
    quote:
      "Absolutely love the quality and design! Arvello made my living room look brand new. Fast delivery and excellent support.",
  },
  {
    name: "Nusrat Jahan",
    location: "Chattogram, Bangladesh",
    image: "photo-1494790108377-be9c29b29330",
    quote:
      "The dining set is even more beautiful in person. The ordering experience was smooth, and everything arrived carefully packed.",
  },
  {
    name: "Tanvir Ahmed",
    location: "Sylhet, Bangladesh",
    image: "photo-1507003211169-0a1dd7228f2d",
    quote:
      "Arvello helped me create a calm, modern bedroom without stretching my budget. I’m already planning my next purchase.",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="relative mx-auto max-w-3xl rounded-2xl bg-surface p-6 text-center shadow-md sm:p-10">
      <span
        aria-hidden="true"
        className="absolute left-5 top-1 text-6xl leading-none text-primary-light"
      >
        “
      </span>
      <Image
        src={imageUrl(testimonial.image, 160)}
        alt={testimonial.name}
        width={64}
        height={64}
        className="mx-auto rounded-full object-cover"
      />
      <div
        className="mt-3 flex justify-center gap-1 text-accent"
        aria-label="5 out of 5 stars"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <FiStar
            key={index}
            size={15}
            className="fill-current"
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mx-auto mt-5 max-w-2xl text-body-md text-text-secondary">
        “{testimonial.quote}”
      </blockquote>
      <p className="mt-5 text-label-md">{testimonial.name}</p>
      <p className="text-caption text-text-muted">{testimonial.location}</p>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-primary-light py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline text-accent">Customer stories</p>
          <h2 className="mt-2 text-h3">What Our Customers Say</h2>
          <p className="mt-3 text-body-md text-text-secondary">
            Trusted by thousands of happy homeowners.
          </p>
        </div>
        <div className="relative mx-auto mt-10 max-w-5xl px-0 sm:px-14">
          <Swiper
            modules={[A11y, Autoplay, Navigation, Pagination]}
            navigation={{
              nextEl: ".testimonials-next",
              prevEl: ".testimonials-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            slidesPerView={1}
            spaceBetween={24}
            loop
            a11y={{ enabled: true }}
            className="!overflow-hidden pb-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            aria-label="Previous testimonial"
            className="testimonials-prev absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-primary shadow-sm transition-theme hover:bg-primary hover:text-text-inverse sm:flex"
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="testimonials-next absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-primary shadow-sm transition-theme hover:bg-primary hover:text-text-inverse sm:flex"
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}

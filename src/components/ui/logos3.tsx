"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "受到这些公司的信赖",
  logos = [
    {
      id: "logo-1",
      description: "Astro",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "React",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  // 将 logos 分成四排，每排 6 个
  const logosPerRow = 6;
  const rows = [];
  for (let i = 0; i < logos.length; i += logosPerRow) {
    rows.push(logos.slice(i, i + logosPerRow));
  }

  // 复制 logos 以实现无缝循环
  const duplicateLogos = (logoArray: Logo[]) => [...logoArray, ...logoArray, ...logoArray];

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        {/* 标题 - 居中对齐 */}
        <h2 className="text-center text-3xl font-bold text-white lg:text-5xl mb-12 sm:mb-16">
          {heading}
        </h2>

        {/* Logo 轮播 - 四排 */}
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {rows.map((row, rowIndex) => {
            if (row.length === 0) return null;
            // 奇数排从左向右，偶数排从右向左
            const speed = rowIndex % 2 === 0 ? 0.5 : -0.5;
            
            return (
              <div key={rowIndex} className="relative">
                <Carousel
                  opts={{ loop: true }}
                  plugins={[AutoScroll({ playOnInit: true, speed, stopOnInteraction: false })]}
                >
                  <CarouselContent className="ml-0">
                    {duplicateLogos(row).map((logo, index) => (
                      <CarouselItem
                        key={`${logo.id}-${index}`}
                        className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                      >
                        <div className="mx-6 flex shrink-0 flex-col items-center justify-center gap-2 min-w-[120px]">
                          <img
                            src={logo.image}
                            alt={logo.description}
                            className={`${logo.className} opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110`}
                            onError={(e) => {
                              // 如果图片加载失败，隐藏图片并只显示文字
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          <span className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300 text-center font-medium">
                            {logo.description}
                          </span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Logos3 };

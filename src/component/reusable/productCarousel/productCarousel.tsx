

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProductCarousel() {
  return (
 <div className="w-full">
     <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
            <div className="">
              <Card className="border-0">
                <CardContent className="flex aspect-square items-center justify-center p-0 ">
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <div>
                    <img src="/src/assets/promotional banner.png" alt="" />
                    <h1 className="font-bold">Six Easy pices</h1>
                    <h3 className="text-xs">Richard P. Fimans</h3>
                    <h2 className="font-bold">$ 207</h2>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
 </div>
  )
}

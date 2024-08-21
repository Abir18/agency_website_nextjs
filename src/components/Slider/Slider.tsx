import HeroImg1 from "@/../public/images/hero.svg";
import HeroImg from "@/../public/images/service.svg";
import HeroImg2 from "@/../public/images/supportteam.jpg";
import {Card, CardContent} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import {Button} from "../ui/button";

export function Slider() {
  return (
    <div className="pt-[1rem] pb-[1rem] flex items-center justify-center">
      <Carousel className="w-full max-w-3xl ">
        <CarouselContent>
          {/* {Array.from({length: 5}).map((_, index) => ( */}
          <CarouselItem
          // key={index}
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <Image src={HeroImg} alt="img" height={400} />
                  <p className="text-gray-900 opacity-90 text-[17px] mt-4">
                    We specialize in designing AI-powered applications,
                    combining cutting-edge technology with intuitive design for
                    enhanced user experiences. Need more resources and
                    expertise? We seamlessly integrate with your team to unlock
                    the full potential of your product.
                  </p>
                  <Button className="mt-4">Learn More</Button>
                  {/* <p className="text-4xl font-semibold">{index + 1}</p> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <Image src={HeroImg2} alt="img" height={500} />
                  <p className="text-gray-900 opacity-90 text-[17px] mt-4">
                    We assist in transforming bold ideas into impactful
                    products. Launch fast, iterate often, focus on the
                    essentials, and win big.
                  </p>
                  <Button className="mt-6">Learn More</Button>
                  {/* <p className="text-4xl font-semibold">{index + 1}</p> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <Image src={HeroImg1} alt="img" />
                  <p className="text-gray-900 opacity-90 text-[17px] mt-4">
                    Need more resources and expertise? We seamlessly integrate
                    with your team to unlock the full potential of your
                    product.We assist in transforming bold ideas into impactful
                    products. Launch fast, iterate often, focus on the
                    essentials, and win big.
                  </p>
                  <Button className="mt-6">Learn More</Button>
                  {/* <p className="text-4xl font-semibold">{index + 1}</p> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          {/* ))} */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

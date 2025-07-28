import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-[1000px] md:h-96">
        <Image
          src="/Image-Shop.webp"
          alt="فروشگاه ما"
          layout="fill"
          objectFit="cover"
          className="brightness-90"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-extrabold drop-shadow-lg">
            فروشگاه کفش و کیف لوکس | برند شما
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import Image from "next/image";


export default async function Home() {
  return (
    <main className="w-full h-full  md:px-6 max-md:px-2">
      <div className="relative md:w-full  max-md:w-full md:h-[512px] max-md:h-[256px]">
        <Image src="/anime.webp"  fill={true} />
  
      </div>
    </main>
  );
}

import Image from "next/image";

import MeInfo from "@/components/ui/MeInfo";
import GallerySubPart from "@/components/ui/GallerySubpart";

export default async function Home() {
  return (
    <>
      <main className="w-full h-full  md:px-6 max-md:px-2 bg-white">
        <div className="relative md:w-full  max-md:w-full md:h-[512px] max-md:h-[256px]">
        <Image src="/anime.webp" fill={true} alt="Hi" />
      </div>
      </main>
      <MeInfo/>

    </>
  );
}



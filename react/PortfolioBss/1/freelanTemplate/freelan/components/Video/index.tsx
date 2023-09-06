"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Descubra +100 Templates Incríveis"
          paragraph="Navegue por mais de 100 Modelos de Templates Modernos e responsivos, obtendo mais opções para escolha, e em seguida adaptaremos a sua marca! Também fornecemos serviços de Hospedagem e colocamos eles no AR visíveis a todos!"
          center
          mb="80px"
        />

      <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[600px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/63] items-center justify-center">
                <Image src="/images/video/t1.png" alt="video image" fill />
              </div>

              <div className="flex flex justify-center">
                <a href="https://drive.google.com/drive/folders/1M79YemcQIUnhdfdM3UZ99EA3MCgKS0rm" target="_blank" rel="nofollow noreferrer">
                  <button className="rounded-xl bg-gradient-to-br from-[#a408ff] to-[#e208ff] mt-5 px-3 py-2 xs:px-5 xs:py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FFC837]/50">
                    Ver Templates
                  </button>
                </a>  
              </div> 

            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/backg.svg" alt="shape" className="w-full change-color" />
      </div>

    </section>
  );
};

export default Video;

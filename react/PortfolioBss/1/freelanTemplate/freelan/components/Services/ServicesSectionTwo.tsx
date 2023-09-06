import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] w-full h-full text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/t3.png"
                alt="about image"
                fill
              />
            </div>

            <div className="flex flex justify-center">
              <a href="https://www.yampi.com.br/loja-virtual/temas" target="_blank" rel="nofollow noreferrer">
                <button className="-mt-10 lg:mt-4 rounded-xl bg-gradient-to-br from-[#a408ff] to-[#e208ff] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FFC837]/50">
                  Yampi Templates
                </button>
              </a>  
            </div>

          </div>
          <div className="w-full px-4 mt-20 lg:mt-0 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-[#8afc9d] sm:text-2xl lg:text-xl xl:text-2xl">
                  Lojas virtuais na Yampi
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Yampi é uma plataforma de criação de Lojas virtuais. Também fornecemos serviço de qualidade utilizando 
                  esta Plataforma. Veja mais.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-[#8afc9d] sm:text-2xl lg:text-xl xl:text-2xl">
                  Preço mais acessível
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Embora os custos da Loja virtual WiX seja acessível, a Yampi se torna mais acessível ainda.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-[#8afc9d] sm:text-2xl lg:text-xl xl:text-2xl">
                  Serviços essenciais
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A Loja virtual conta com todos serviços essenciais que possui no WiX. única diferença é o Layout que é 
                  mais básico, porém mais acessível e podendo ter uma entrega mais rápida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Lance sua Loja Virtual, Venda muito mais."
                paragraph="Oferecemos serviço de construção de Lojas virtuais completas utilizando a Plataforma WiX, com aparência única e moderna. Destaque sua marca e Venda mais, adquirindo uma Loja Virtual!"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Segurança" />
                    <List text="Hospedagem" />
                    <List text="Preço acessível" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Cartões de crédito" />
                    <List text="Aceite Pix" />
                    <List text="Suporte & Chat" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/t2.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />

              </div>

              <div className="flex flex justify-center">
                <a href="https://pt.wix.com/website/templates/html/online-store" target="_blank" rel="nofollow noreferrer">
                  <button className="ml-0 mt-5 xl:ml-14 rounded-xl bg-gradient-to-br from-[#a408ff] to-[#e208ff] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FFC837]/50">
                    WiX Templates
                  </button>
                </a>  
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

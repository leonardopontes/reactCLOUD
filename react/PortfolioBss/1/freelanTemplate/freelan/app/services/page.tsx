import Breadcrumb from "@/components/Common/Breadcrumb";
import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Video from "@/components/Video/index";


const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services Page"
        description="Oferecemos serviços de criação de sites com mais de 100 modelos sofisticados a seu gosto, acelerando o processo de Desenvolvimento e entrega. Também oferecemos serviços de criação de Lojas virtuais completas e mais." />
      <ServicesSectionOne />
      <ServicesSectionTwo />
      <Video />
    </>
  );
};

export default ServicesPage;

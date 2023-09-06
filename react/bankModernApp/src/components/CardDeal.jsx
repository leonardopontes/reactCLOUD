import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Encontre a melhor oferta de cartão <br className="sm:block hidden" /> em
        poucos passos
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Compare facilmente as melhores ofertas disponíveis, considerando 
        taxas, benefícios e limites de crédito. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

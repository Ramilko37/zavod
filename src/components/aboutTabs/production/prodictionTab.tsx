import styles from "./styles.module.css";
import ProductionImage1 from "../images/ProductionImage1.png";
import ProductionImage2 from "../images/ProductionImage2.png";

const ProductionTab = () => {
  return (
    <div className={styles.production}>
      <div>
        <div className={styles.item}>
          <div className={styles.textBlock}>
            <h1 className={styles.heading}>Завод</h1>
            <p className={styles.text}>
              Выветривание на следующий год, когда было лунное затмение и сгорел
              древний храм Афины в Афинах (при эфоре Питии и афинском архонте
              Каллии), последовательно сменяет далекий параметр, и в этом
              вопросе достигнута такая точность расчетов, что, начиная с того
              дня, как мы видим, указанного Эннием и записанного в "Больших
              анналах".
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img className={styles.image} src={ProductionImage1} alt="" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.textBlock}>
            <h1 className={styles.heading}>Экология</h1>
            <p className={styles.text}>
              Выветривание на следующий год, когда было лунное затмение и сгорел
              древний храм Афины в Афинах (при эфоре Питии и афинском архонте
              Каллии), последовательно сменяет далекий параметр, и в этом
              вопросе достигнута такая точность расчетов, что, начиная с того
              дня, как мы видим, указанного Эннием и записанного в "Больших
              анналах".
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img className={styles.image} src={ProductionImage2} alt="" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.textBlock}>
            <h1 className={styles.heading}>Стандарты компании</h1>
            <p className={styles.text}>
              Выветривание на следующий год, когда было лунное затмение и сгорел
              древний храм Афины в Афинах (при эфоре Питии и афинском архонте
              Каллии), последовательно сменяет далекий параметр, и в этом
              вопросе достигнута такая точность расчетов, что, начиная с того
              дня, как мы видим, указанного Эннием и записанного в "Больших
              анналах".
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img className={styles.image} src={ProductionImage1} alt="" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.textBlock}>
            <h1 className={styles.heading}>Партнеры в регионах</h1>
            <p className={styles.text}>
              Выветривание на следующий год, когда было лунное затмение и сгорел
              древний храм Афины в Афинах (при эфоре Питии и афинском архонте
              Каллии), последовательно сменяет далекий параметр, и в этом
              вопросе достигнута такая точность расчетов, что, начиная с того
              дня, как мы видим, указанного Эннием и записанного в "Больших
              анналах".
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img className={styles.image} src={ProductionImage2} alt="" />
          </div>
        </div>
      </div>
      <a className={styles.link} href="#">
        Посмотреть каталог
      </a>
    </div>
  );
};

export default ProductionTab;

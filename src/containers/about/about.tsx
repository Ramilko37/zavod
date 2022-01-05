import * as React from 'react';
// import * as styles from './styles.module.scss'
import styles from './styles.module.css'
import * as images from './images'
import AboutTabs from 'components/aboutTabs/aboutTabs';


const AboutPageContent = () => {
  const title = <h1 className={styles.title}>Новосибирский Респираторный Завод</h1>;
  const desription = (
    <div className={styles.description}>
      <p className={styles.descriptionItem}>
        Текст о том какие мы хорошие и самые лучшие в своем деле, а все
        конкуренты нам завидуют. Краткая история компании, чего мы добились,
        когда были основаны, какими мы видим себя через 5 лет
      </p>
      <p className="descriptionItem">
        Выветривание на следующий год, когда было лунное затмение и сгорел
        древний храм Афины в Афинах (при эфоре Питии и афинском архонте Каллии),
        последовательно сменяет далекий параметр, и в этом вопросе достигнута
        такая точность расчетов, что, начиная с того дня, как мы видим,
        указанного Эннием и записанного в "Больших анналах".
      </p>
    </div>
  );

  return (
    <div className="section">
      {title}
      {desription}
      <AboutTabs />

    </div>
  );
};

export default AboutPageContent;

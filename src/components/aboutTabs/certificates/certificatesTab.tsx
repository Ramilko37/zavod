import CertificatesTabItem from "./certificatesTabItem";
import styles from "./styles.module.css";

const CertificatesTab = () => {
  const title = (
    <p className={styles.title}>
      Качество нашей продукции подтверждено сертификатами. Вы всегда можете
      запросить у нас всю необходимую документацию на изделия.
    </p>
  );

  return (
    <>
      {title}
      <div className={styles.certWrapper}>
        <h2 className={styles.certWraperTitle}>Основные документы</h2>
        <ul className={styles.certList}>
          <CertificatesTabItem title="Российская сертификация" size="3.88" />
          <CertificatesTabItem
            title="Приложение к российской сертификации"
            size="3.88"
          />
        </ul>
      </div>
      <div className={styles.certWrapper}>
        <h2 className={styles.certWraperTitle}>Сертификаты на полумаски</h2>
        <ul className={styles.certList}>
          <CertificatesTabItem
            title="Сертификация ЕЭС 01- и 11- серий"
            size="3.88"
          />
          <CertificatesTabItem
            title="Приложение к сертификации ЕЭС 01- и 11- серий"
            size="3.88"
          />
          <CertificatesTabItem
            title="Сертификация ЕЭС 02-, 03- и 12- серий"
            size="3.88"
          />
          <CertificatesTabItem
            title="Приложение к сертификации ЕЭС 02-, 03- и 12- серий"
            size="3.88"
          />
        </ul>
      </div>
    </>
  );
};

export default CertificatesTab;

import styles from "./styles.module.css";

const DetailsTab = () => {
  return (
    <>
      <h1 className={styles.title}>Юридическая информация</h1>
      <div className={styles.address}>
        <h3 className={styles.detailsHeading}>Полное наименование</h3>
        <p className={styles.detailsText}>Общество с ограниченной ответственностью «Новосибирский респираторный завод»</p>
        <p className={styles.detailsTextLastLine}>ООО «НРЗ»</p>
      </div>
      <div className={styles.address}>
        <h3 className={styles.detailsHeading}>Юридический адрес</h3>
        <p className={styles.detailsText}>630108, г. Новосибирск, а/я 198</p>
        <h3 className={styles.detailsHeading}>Фактический адрес</h3>
        <p className={styles.detailsText}>Новосибирская обл., д.п. Кудряшовский, ул. Светлая, зд. 20А</p>
      </div>
      <div className={styles.tel}>
        <h3 className={styles.detailsHeading}>Телефоны</h3>
        <a className={styles.detailsLink} href="tel:+73832492757">+7 (383) 249 27-57</a>
        <a className={styles.detailsLink} href="tel:+73832492747">+7 (383) 249 27-47 </a>
      </div>
      <div className={styles.email}>
        <h3 className={styles.detailsHeading}>E-mail</h3>
        <a className={styles.detailsLink} href="mailto:sales@nrz.su">sales@nrz.su</a>
      </div>
    </>
  )
}

export default DetailsTab;
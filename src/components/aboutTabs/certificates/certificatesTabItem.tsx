import styles from "./styles.module.css";
import Cert from "../images/prewiev.png";
import Pdf from "../images/pdf.png";

const CertificatesTabItem = (props) => {
  return (
    <li className={styles.certificate}>
      <img
        className={styles.certificateImage}
        src={Cert}
        alt="Изображение серитификата"
      />
      <div className={styles.certificateWrapper}>
        <h3 className={styles.certificateTitle}>{props.title}</h3>
        <div className={styles.certificateDownload}>
          <img className={styles.certificateDownloadImage} src={Pdf} alt="Формат PDF" />
          <a className={styles.certificateDownloadText} href="#">Скачать файл</a>
          <span className={styles.certificateDownloadSize}>({props.size}мб)</span>
        </div>
      </div>
    </li>
  );
};

export default CertificatesTabItem;

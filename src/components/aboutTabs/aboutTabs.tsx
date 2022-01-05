import ActiveLink from "components/active-link";
import styles from "./styles.module.css";

const AboutTabs = () => {
  const tabsData = [
    { title: "Сертификаты", url: "/about/certificates" },
    { title: "Реквизиты", url: "/about/details" },
    { title: "Производство", url: "/about/production" },
  ];

  return (
    <div>
      <div className={styles.tabs}>
        {tabsData.map((item, index) => (
          <ActiveLink key={index} href={item.url} activeClassName={styles.activeTab}>
            <a className={styles.tab}>{item.title}</a>
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default AboutTabs;

import styles from "./styles.module.css";
import Whatsapp from "../../assets/icons/ic-whatsapp.svg";
import Instagram from "../../assets/icons/ic-instagram.svg";
import Map from "../../assets/images/map.png";

function Footer() {
  //   Footer, или подвал сайта, содержит контактную информацию, ссылки на социальные
  // сети и другую полезную информацию. Вот как можно реализовать Footer:
  // 1. Контактная информация:
  // ● В Footer разместите контактную информацию, такую как номер телефона,
  // адрес и рабочие часы.
  // ● Сделайте эти данные легко читаемыми и доступными.
  // 2. Социальные сети:
  // ● Рядом с контактной информацией разместите иконки социальных сетей.
  // Например, иконки Facebook, Instagram и WhatsApp.
  // ● Сделайте эти иконки ссылками, которые ведут на соответствующие страницы
  // в социальных сетях.
  // 3. Дополнительные ссылки:
  // ● Footer также должен содержать карту с месторасположением магазина.
  // Включите Header и Footer на всех страницах вашего приложения, разместив их в
  // основном макете вокруг основного контента.
  // Следуя этим шагам, вы сможете создать Header и Footer, которые будут
  // единообразно отображаться на всех страницах вашего приложения, обеспечивая
  // удобную навигацию и доступ к важной информации
  return (
    <div className={styles.footer_container}>
      <h1 className={styles.contact_header}>Contact</h1>
      <div className={styles.info_container}>
        <div className={styles.contact_info}>
          <div className={styles.phone_info}>
            <p>Phone</p>
            <h3>+49 30 915-88492</h3>
          </div>
          <div className={styles.adresse_info}>
            <p>Address</p>
            <h3>Wallstraẞe 9-13, 10179 Berlin, Deutschland</h3>
          </div>
        </div>
        <div className={styles.sozial_netvork_oppening_hours}>
          <div className={styles.sozial_network}>
            <p>Socials</p>
            <div className={styles.sozial_network_container}>
              <a href="#">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="#">
                <img src={Whatsapp} alt="Watsapp" />
              </a>
            </div>
          </div>
          <div className={styles.oppening_hours}>
            <p>Working Hours</p>
            <h3>24 hours a day</h3>
          </div>
        </div>
      </div>
      <img src={Map} alt="map" className={styles.map} />
    </div>
  );
}

export default Footer;

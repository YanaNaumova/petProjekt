import styles from "./styles.module.css";
import Whatsapp from "../../assets/icons/ic-whatsapp.svg";
import Instagram from "../../assets/icons/ic-instagram.svg";
import Map from "../../assets/images/map.png";

function Footer() {
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

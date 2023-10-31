import SectionHeader from "../../ui/SectionHeader";
import styles from "./style.module.css";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <SectionHeader
          title="About Us"
          subTitle="This is about us"
          className="section-header"
        />
        <div className={styles.aboutContainer}>
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quibusdam.
            </p>
          </div>
          <div>
            <img
              src="/src/assets/images/about.jpg"
              alt="About Us"
              className={styles.aboutImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import styles from "./about-content.module.scss";

export default function AboutContent() {
  return (
    <section className={styles.wrap} aria-label="About content">
      <div className="container">
        <h2 className={styles.kicker}>ABOUT</h2>

        <div className={styles.copy}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            urna nisl, congue nec purus nec, elementum commodo metus. Mauris
            egestas euismod neque, pellentesque vulputate nunc iaculis in. Cras
            vehicula elit felis, quis commodo urna consectetur vitae. Cras ac
            cursus lorem. Proin at hendrerit lectus. Quisque sit amet faucibus
            nulla. Mauris ac lobortis mauris.
          </p>
          <p>
            Ut at luctus neque. Nunc eros lacus, blandit non urna eu, sagittis
            mattis nibh. Quisque tempor leo sed euismod sodales. Aliquam viverra
            dolor eget leo facilisis, ac aliquam mi accumsan. Fusce ante leo,
            mollis in feugiat nec, cursus eu justo. Vestibulum eu nibh in lacus
            malesuada elementum vitae sed nisi. Nulla facilisi. Proin sed lorem
            finibus, placerat leo in, sodales erat. Aenean rhoncus nec urna at
            vulputate. Aliquam a nibh nisl. Pellentesque ut tempus massa. Ur
            gravida lobortis risus suscipit consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

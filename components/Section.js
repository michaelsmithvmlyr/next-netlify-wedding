import styles from './Section.module.css'

export default function Section(props) {
  let sectionStyle =`${styles.section}`;
  if (props.type === 'condensed') {
    sectionStyle=`${sectionStyle} section--condensed`;
  }

  return (
    <div className={sectionStyle} id={props.id} name={props.id}>
      <div className={styles.fullwidth}><h2>{props.title}</h2></div>
      {props.children}
    </div>
  );
}
import PageNav from "./PageNav";
import styles from './Contact.module.css'


function Contact(){
    return (
        <>
            <PageNav/>
            <div className={styles.body}>
            <div className={styles.contactForm}>
    <h2>Contact Us</h2>
    <form>
      <div className={styles.formGroup}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" className={styles.formControl} placeholder="Enter your name"></input>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" className={styles.formControl} placeholder="Enter your email"></input>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone No.</label>
        <input type="text" id="phone" className={styles.formControl} placeholder="Enter your Phone no."></input>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" className={styles.formControl} rows="5" placeholder="Enter your message"></textarea>
      </div>
      <button type="submit" className={styles.submitBtn}>Send Message</button>
    </form>
  </div>
  </div>
        </>

    )
}
export default Contact;
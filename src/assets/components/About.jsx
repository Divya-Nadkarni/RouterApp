import PageNav from "./PageNav";
import styles from './About.module.css'
function About(){
    return (
        <>

        <PageNav/>
        <div className={styles.content}>
            <h1 className={styles.heading}>What are we</h1>

            <div className={styles.outer}>
                <div className={styles.box}>
                    <h3>
                    Global Leaders in training
                    </h3>
                    <hr></hr>
                    <p>We have trainers hailing from the fortune companies who understand the real-time business cases and can train individuals based on them.</p>
                </div>
                <div className={styles.box}>
                    <h3>
                    Practical oriented approach
                    </h3>
                    <hr></hr>
                    <p>Our training methodology isn’t confined to theoretical one; We have an exposure towards the real-time industry training by industry experts professionals.</p>
                </div>
                <div className={styles.box}>
                    <h3>
                    100% Placement Assistance
                    </h3>
                    <hr></hr>
                    <p>We promise Career Transformation; Having collaborations with top-notch companies and dedicated placement vertical to help trainees aspire to aspirations.</p>
                </div>
                <div className={styles.box}>
                    <h3>
                    Hands-on projects & Internship
                    </h3>
                    <hr></hr>
                    <p>We have trainers hailing from the fortune companies who understand the real-time business cases and can train individuals based on them.</p>
                </div>

            </div>
        </div>
        </>
   
    );
}
export default About;
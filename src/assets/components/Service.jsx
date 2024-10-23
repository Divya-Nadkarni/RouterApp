import PageNav from "./PageNav";
import styles from './Service.module.css'
function Service(){
 return(
    <>
        <PageNav/>
        <h2>Courses and Internships</h2>
        <div className={styles.container}>
            <div className={styles.card}>
<img src="https://www.innomatics.in/wp-content/uploads/2023/01/No-1-best-data-science-course-training-institute-in-hyderabad.jpg"></img>
<h3>
NASSCOM Futureskills Prime Certified Data Science
</h3>
<p>This is a great choice for tech geeks, students, working professionals and aspiring data scientists who want to upskill and build a better foundation is the stream of Data Science.</p>
            </div>
            <div className={styles.card}>
<img src="https://www.innomatics.in/wp-content/uploads/2023/01/Full-Stack-Web-Development-training-program-Innomatics-research-labs-india.png"></img>
<h3>
Full Stack Development
</h3>
<p>Learn the right skills to break into a development career & advance yourself as a full-stack Developer. It includes Frontend, Backend, databases, debugging & testing.</p>
            </div>
            <div className={styles.card}>
<img src="https://www.innomatics.in/wp-content/uploads/2023/01/big-data-analytics-with-hadoop-training-in-hyderabad-india.jpg"></img>
<h3>
NASSCOM Futureskills Prime Certified Predictive Analytics
</h3>
<p>Predictive Analytics Modeler is to gain knowledge in analytics models to collect, data mining, data collection, data visualization, and integration, nodes, and statistical analysis.
</p>
            </div>
        </div>
    </>
 )
}
export default Service;
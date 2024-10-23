import styles from './Home.module.css'
import PageNav from "./PageNav";
function Home(){
    return(
        <>
        <PageNav></PageNav>
        <div className={styles.flow}>
        <div className={styles.pic}>
        </div>
        <div className={styles.para}>
        <p>  <span className={styles.highlight}>We just don’t train,We transform the careers.....</span>

Innomatics Research Labs is a pioneer in “Transforming Careers and Lives” of individuals in the Digital Space by catering advanced training on NASSCOM Future skills prime Certified Data Science, Python, Predictive Analytics Modeler, Machine Learning, Artificial Intelligence (AI),Full-stack web development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, Digital Marketing, and Career Launching program for students who are willing to showcase their skills in the competitive job market with valuable credentials, and also can complete courses with a certificate.</p></div>
       

</div>
   </>
    )
   
   
}
export default Home;
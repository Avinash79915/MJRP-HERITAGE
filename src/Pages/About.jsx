
import jyotiba from "../Assets/Images/role_model/mahatma-jyotiba.png";
import savitribai from "../Assets/Images/role_model/savitribai-phule.png";
import "../Styles/About.css";
const About =() => {
      return (
        <>
           <div className="about_school">
         <div className="left_section">
         <h1>About </h1>
         <h2>Our School...</h2>
         </div>
          <div className="right_section">
            <h2>Education is the integration of traditional and modern ideas.MJRP Heritage School is a  perfect blend of our ancient knowledge and culture with modern technics and science. As the school name suggests, MJRP stands for <span  className="monu"> “MAHATAMA JYOTI RAO PHULE” </span>  a true social reformer, Guru of learned Dr.Bhim Rao Ambedkar, a pioneer in many ways, who along with his wife - smt. Savitribai Phule ,established schools for girls and for children from vulnerable communities at a time when this was virtually unheard of. The word HERITAGE preambles the virtue of kindness and determination of our pujya pitaji  <span className="monu">late Shri Ramjeet Singh Kushwaha</span> , along with pujya mataji <span className="monu">late smt. Punam Kushwaha</span>, who had been key component in MJRP public school, ghazipur and MJRP Academy Tiwaripur,in past 30 years. </h2>
            <br />
            <h2><span className="monu">MJRP HERITAGE SCHOOL</span> along with its predecessors, strives to carry the legacy of past 30 years of excellent educational services to the society, focusing on the underprivilleged.With State of art building, set in two blocks in two acres of lush green land, with 60 classrooms and spacious,fully equipped science and computer labs and fully furnished Library along with sports facilities for cricket, badminton, volleyball, kho-kho,basketball and many others.There are provision of ample amount of extracurricular Activities on the international norms of CBSE  for holistic development of child.

</h2>
          </div>
         </div>



         <div className="rolemodel">
         <h1>Our Role Model</h1>
         <div className="Headline">
         <div className="card">
                    <a href="https://en.wikipedia.org/wiki/Jyotirao_Phule" target='blank'><img src={jyotiba} alt="Role Model 1" /></a>
                    <div className="name-circle"><h2>महात्मा ज्योतिराव गोविंदराव फुले</h2></div>
                </div>

        <div className="card">
                    <a href="https://en.wikipedia.org/wiki/Savitribai_Phule"target='blank' ><img src={savitribai} alt="Role Model 1" /></a>
                    <div className="name-circle"><h2>सावित्रीबाई ज्योतिराव फुले</h2></div>
                </div>
         </div>
        
         </div>
        
        </>
      );
}

export default About;


import "../Styles/Admission.css";
import AdmissionAnimation from "../Animations/Admission-animation";


const Admission = ()=>{
    return(
        <>
        <div className="Admission-main">

    
        <div className="Add_Animation">
        <AdmissionAnimation/>
        </div>
        <div className="Admission_main_content">
            <h1>How to Apply </h1>
            <br />
            <p>     
Dear Parents, <br />
Choosing the right school for your child is an overwhelming but exciting process , we wish to make it more smoother.
This COVID had change the world and we had aligned ourselves too. Now you can access school admission by online as well as offline means. 
<br />
<br />

Please follow below Procedure.<br /><br />

* Fill online enquiry forms. <br /><br />

* Attending the online enquiry session Via Teams. <br /><br />

* If Shortlisted the candidates receive mail or call confirmation for completing admission formalities in set duration of time. 
<br />
<br />

  
Please note - if your child is completing 4 years of Age you can apply for LKG.<br /><br />

School needs following documents -
Parents Aadhaar Card and Pan Card 
Students Aadhaar, Date of Birth Certificates, Most recent report card. 

            </p>
        </div>
        </div>
        </>
    )
};
export default Admission;
//import Logo from "../Assets/Images/DARK.svg";
import React, { useState } from 'react';
import StudentAnimation from "../Animations/Student-animation";
import service1 from "../Assets/Images/Services/service1.jpg";
import service2 from "../Assets/Images/Services/service2.jpg";
import service3 from "../Assets/Images/Services/service3.jpg";
import service4 from "../Assets/Images/Services/service4.jpg";
import '../Styles/Home.css';
import School1 from "../Assets/Images/School/School1.jpeg";
import School2 from "../Assets/Images/School/School2.jpeg";
import School3 from "../Assets/Images/School/School3.jpeg";
import School4 from "../Assets/Images/School/School4.jpeg";
import School5 from "../Assets/Images/School/School5.jpeg";
import { useNavigate } from 'react-router-dom';
import NewsTicker from '../Component/NewsTicker';
import Blog from '../Component/Blog';



const Home=() =>{

  
    const navigate = useNavigate();
  
    const handleEnrollClick = () => {
      navigate('/Admission');
    };

    return(
       <>
       <div className="main">
             <div class="bgimg">
                <h1>Your Child, Our Priority!</h1>
                <hr />
                <h2>Welcome to MJRP HERITAGE</h2>
             </div>
         </div>
         <div className="news">
         <NewsTicker />
         <Blog />
         </div>


         <div className="Admission">
         <div className="Admission_Animation">
           <StudentAnimation/>
          </div>
          <div className="Admission_Content">
            <h1>ADMISSIONS</h1>
            <p>Educating vibrant students from all domain is specialty of our MJRP Heritage. 
            <br />
            <br />
            "Today is the first day of the rest of your life " we believe in holistic development of child by emphasizing continuous improvement in various curriculum. Now one can apply online for admission</p>

            <button class="button type1" onClick={handleEnrollClick}>
               <span class="btn-txt" >Enroll</span>
            </button>
          </div>
         </div>
        



         <div className="Services">
             <h1 >OUR SERVICES</h1>

 <div className="cards">

 
  <div className="ServiceCard">
    <img src={service1} alt="Service 1" />
    <h3>Primary School</h3>
    <br />

    <p>
    We aim to give the best primary schooling for a stronger foundation by offering exclusive learning programmes.
    </p>
  </div>

  {/* Card 2 */}
  <div className="ServiceCard">
    <img src={service2} alt="Service 2" />
    <h3>Sports</h3>
    <br />
    <p>
    We firmly believe that participation in sports is an essential part of the learning process of a child.

    </p>
  </div>

  {/* Card 3 */}
  <div className="ServiceCard">
    <img src={service3} alt="Service 3" />
    <h3>Extra-curricular Activities</h3>
    <br />
    <p>
    The school also conducts extra-curricular activities - yoga & meditation, specially designed for the students.

    </p>
  </div>

  {/* Card 4 */}
  <div className="ServiceCard">
    <img src={service4} alt="Service 4" />
    <h3>Experienced Learning
</h3>
    <br />

    <p>
    We conduct various character building activities for students to strengthen their morals effectively.

    </p>
  </div>
</div>
<h1 id='gall'>GALLARY</h1>

</div>



<div className="Gallary">
<ul>
	<li>
		<a href="#" >
			<figure>
      <img src={School1} alt="Service 1" />
				<figcaption>Side Front View</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="#">
			<figure>
      <img src={School2} alt="Service 1" />				<figcaption>Front View</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="#">
			<figure>
      <img src={School3} alt="Service 1" />				<figcaption>Side Viwe</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="#">
			<figure>
      <img src={School4} alt="Service 1" />				<figcaption>Hiking trails</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="#">
			<figure>
      <img src={School5} alt="Service 1" />				<figcaption>Street scenes</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="#">
			<figure>
      <img src={School1} alt="Service 1" />				<figcaption>Trending</figcaption>
			</figure>
		</a>
	</li>
</ul>
</div>
 </>

    );
}
export default Home;


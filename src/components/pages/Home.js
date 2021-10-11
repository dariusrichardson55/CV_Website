import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Profile_Image from '../images/Profile-Image.png';
import '../pages/CSS/Home.css'

function Home() {
  return (
    <>
      <title>Home | CV Website</title>
      <h2 className="Personal_Profile_label">Personal Profile</h2>
      <p className="Personal_Profile_Container">A hard working, BSc Computer Science graduate from the University of Lincoln who has a deep passion in
        technology especially in software development. A deep understanding of programming and an effective
        problem solver who identifies an issue and proposes solutions. A strong desire for engaging in the work
        environment and communicating with new people. Having an interest in learning new things especially when
        working on projects, individual or when leading in a team that would help move the team forward to success.</p>
      <div className="Profile_Container">
        <h2 style={{ fontFamily: "Times New Roman, Times, serif", textAlign: "center", position: "relative", top: "10px" }}>CV Details</h2>
        <img className="ProfileImage" src={Profile_Image} alt="ProfilePicture"></img>
        <h3 className="name_label">Darius Richardson</h3>
        <p className="graduate_label">Graduate</p>
        <p className="university_of_lincoln_label">University of Lincoln</p>
        <p className="View_Linkedin_Profile"><Link to={{ pathname: "https://www.linkedin.com/in/darius-richardson/" }} target="_blank">View Linkedin Profile</Link></p>
      </div>
    </>
  )
}

export default Home;

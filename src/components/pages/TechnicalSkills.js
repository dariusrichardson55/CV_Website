import React from 'react';
import '../../App.css';
import '../pages/CSS/TechnicalSkills.css'

export default function TechnicalSkills() {
    return (
        <>
            <title>Technical Skills | CV Website</title>
            <h2 style={{ fontFamily: "Times New Roman, Times, serif", position: "relative", width: "50%", top: "35px", left: "40px" }}>Technical Skills</h2>
            <div class="main_skills_container">
                <p className="labels">C#</p>
                <div className="Skills_container">
                    <div className="Skills Csharp">50%</div>
                </div>

                <p className="labels">C++</p>
                <div className="Skills_container">
                    <div className="Skills Cplusplus">40%</div>
                </div>

                <p className="labels">HTML</p>
                <div className="Skills_container">
                    <div className="Skills HTML">90%</div>
                </div>


                <p class="labels">CSS</p>
                <div class="Skills_container">
                    <div class="Skills CSS">80%</div>
                </div>

                <p class="labels">JavaScript</p>
                <div class="Skills_container">
                    <div class="Skills Javascript">40%</div>
                </div>

                <p class="labels">Node.js</p>
                <div class="Skills_container">
                    <div class="Skills Node_js">45%</div>
                </div>

                <p class="labels">Agile Methodology</p>
                <div class="Skills_container">
                    <div class="Skills Agile_Methodology">70%</div>
                </div>
            </div>
        </>
    )
}
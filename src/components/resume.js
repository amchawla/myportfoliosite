import React, {Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from "./skills";
import image from '../images/Amit.png';

class Resume extends Component{
    render (){
        return <div>
            <Grid>
              <Cell col={4}>
                <div style={{ textAlign: "center" }}>
                <img src={image} alt="avatar" style={{ height: "200px" }} />
                </div>
                <h2 style={{ paddingTop: "2em" }}>Amit Chawla</h2>
                <h4 style={{ color: "grey" }}>Sr. Manager</h4>
                <hr style={{ borderTop: "3px sold #833fb2", width: "50%" }} />
                <p>More than 18 years of Experience. Working as Technical Leader</p>
                <hr style={{ borderTop: "3px sold #833fb2", width: "50%" }} />
                <h5>Address</h5>
                <p>Pune, India</p>
                <h5>Phone</h5>
                <p>8087087880</p>
                <h5>Email</h5>
                <p>amazing.cool@gmail.com</p>
                <h5>Web</h5>
                <p>Website.com</p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>

                <Education startYear={2002} endYear={2006} schoolName="My University" schoolDescription="Filler Text" />
                <Education startYear={2007} endYear={2009} schoolName="My 2nd University" schoolDescription="Filler Text" />
                <hr style={{ borderTop: "3px solid #e22947" }} />

                <h2>Experience</h2>
                <Experience startYear={2009} endYear={2011} jobName="My University" jobDescription="Filler Text" />
                <Experience startYear={2012} endYear={2016} jobName="My 2nd University" jobDescription="Filler Text" />
                <hr style={{borderTop: '3px solid #e22947'}} />
                <h2>Skills</h2>
                <Skills 
                    skill="javascript"
                    progress={100}
                />
                <Skills
                    skill="HTML/CSS"
                    progress={100}
                />
                <Skills
                    skill="React"
                    progress={100}
                />
                <Skills
                    skill="Vic"
                    progress={25}
                />
                <Skills
                    skill="javascript"
                    progress={100}
                />
              </Cell>

            </Grid>
          </div>;
    }
}

export default Resume;
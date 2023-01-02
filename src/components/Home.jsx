import React from "react";
import "./Home.css"
import logo  from './Travelbuddy.png'

function Home() {
  return (
    <div className="home">
      <img src={logo}></img>
      <h2>Informed Consent of Participation</h2>
      <div class="container-home">
       
        
          
            <p className="intro">
            You are invited to participate in the online study Fitts' Task In Virtual Reality Using Avatar Hands initiated and conducted by Maxy Musterfrau and Maxy Musterfrau and Prof. Dr. Sven Mayer. The research is supervised by Prof. Dr. Sven Mayer by Prof. Dr. Sven Mayer at the LMU Munich. This study is funded and financed by the research project GEVAKUB. Please note:

Your participation is entirely voluntary
The online study will last approximately 60 minutes
We will take photos during the session
We will record videos during the session
We may publish our results from this and other sessions in our reports, but all such reports will be confidential and will neither include your name nor cannot be associated with your identity
If you have any questions or complaints about the whole informed consent process of this research study or your rights as a human research subject, please contact our ethical comitte office: DFG/BMBF/Uni-Regensburg. You should carefully read the information below. Please take as much time as you need to read the consent form.

<h3>1. Purpose and Goal of this Research</h3>
The purpose of this research is to study human performance in a pointing task with different avatar hands in virtual reality. The goal of this research is to understand how visual signals of the own body are incorporated into the own body scheme. Your participation will help us achieve this goal. The results of this research may be presented at scientific or professional meetings or published in scientific proceedings and journals.

<h3>2. Participation and Compensation</h3>
Your participation in this online study is completely voluntary. You will be one of approximately 36 people being surveyed for this research. You will receive no compensation. You may withdraw and discontinue participation at any time without penalty. If you decline to participate or withdraw from the online study, no one on the campus will be told. You may refuse to answer any questions you do not want to answer.

<h3>3. Procedure</h3>
After confirming your informed consent, you will be guided through the following steps:

<li>1. You will get a virtual reality headset and will be introduced with virtual hands in the environment</li>
<li>2. You will see a virtual questionnaire. Tap on the table with you index finger to fill out the questionnaire.</li>
<li>3. In multiple rounds, you have to point at virtual circles highlighted in red.</li>
<li>4. This procedure will repeat multiple times using different hand conditions.</li>



The complete procedure of this online study will last approximately 60 minutes.

<h3>4. Risks and Benefits</h3>
There are no risks associated with this online study. Discomforts or inconveniences will be minor and are not likely to happen. If any discomforts become a problem, you may discontinue your participation. You will not directly benefit through participation in this online study. We hope that the information obtained from your participation may help to bring forward the research in this field.

<h3>5. Data Protection and Confidentiality</h3>
The researcher will not identify you by your real name in any reports using information obtained from this online study, and your confidentiality as a participant in this online study will remain secure and encrypted. All data you provide in this online study will be published anonymized and treated confidentially in compliance with the General Data Protection Regulation (GDPR) of the European Union (EU). Subsequent uses of records and data will be subject to standard data use policies that protect the participating individuals' anonymity. In all cases, uses of records and data will be subject to the GDPR. Faculty and administrators from the campus will not have access to raw data or transcripts. This precaution will prevent your individual comments from having any negative repercussions. This site uses cookies and other tracking technologies to conduct the research, to improve the user experience, the ability to interact with the system and to provide additional content from third parties. Despite careful control of content, the researchers assume no liability for damages, which directly or indirectly result from the use of this online application. No one outside this research project can view any recordings unless we have you sign a separate permission form allowing us to use them (see below). Records that have not been made public will be deleted after the end of the research. The records will be destroyed if you contact the researcher to destroy or delete them immediately. As with any publication or online-related activity, the risk of a breach of confidentiality is always possible. According to the GDPR, the researchers will inform the participant if a breach of confidential data is detected.
              
            <h4 className="warning">*By clicking on the "Start" button you consent to participation rules</h4> 
            </p>

            <a href="./Likes" target="_self" rel="noreferrer">
            <button title="By clicking this button you consent to participation rules" className="start">Start</button>
            </a>
            
        
        
      </div>
    </div>
  );
}

export default Home;
import React from 'react';

export const ResumeTemplate: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
      <div id="resume-template" className="resume-container">
        <h1 className="resume-name">VIBHA SHREESHAIL B V</h1>
        <p className="resume-subtitle">Entry-level Android App Developer | Specialized in Android & Generative AI</p>
        <p className="resume-contact">6362848134 | vibhashreeshail@gmail.com | www.linkedin.com/in/vibha-shreeshail-29801629a | Bangalore</p>

        <h2 className="resume-section-title">SUMMARY</h2>
        <hr className="resume-divider" />
        <p className="resume-text">
          As a computer science engineering student, I possess expertise in HTML, CSS, JavaScript, Kotlin, Jetpack Compose, and large language models (LLMs). Demonstrates a strong commitment to software development with experience in creating Android applications. Consistently collaborated with cross-functional teams to resolve complex challenges and quickly acquire new skills, demonstrating professionalism and adaptability.
        </p>

        <h2 className="resume-section-title">INTERNSHIP</h2>
        <hr className="resume-divider" />
        <p className="resume-bold-text">Android Development Intern | MindMatrix</p>
        <p className="resume-text">
          Completed Android app development internship projects utilizing generative AI, developing mobile applications with Kotlin, Android Studio, Firebase and Jetpack Compose. Completed technical projects and currently developing “Grama-Vasathi,” a real-world hospitality application.
        </p>

        <h2 className="resume-section-title">EDUCATION</h2>
        <hr className="resume-divider" />
        <div className="resume-education-item">
          <p className="resume-bold-text">1. KNS Institute of Technology (2022 - 2026)</p>
          <p className="resume-text">B.E (Computer Science and Engineering) | 9.0 CGPA</p>
        </div>
        <div className="resume-education-item">
          <p className="resume-bold-text">2. Vision girls PU college (2021 - 2022)</p>
          <p className="resume-text">PUC | 8.5 CGPA</p>
        </div>
        <div className="resume-education-item">
          <p className="resume-bold-text">3. Mahatma Gandhi English Medium High School (2019 - 2020)</p>
          <p className="resume-text">SSLC | 9.8 CGPA</p>
        </div>

        <h2 className="resume-section-title">TECHNICAL SKILLS & STRENGTHS</h2>
        <hr className="resume-divider" />
        <p className="resume-text">1. Core Tech: Kotlin, Jetpack Compose, Firebase, JavaScript, HTML, CSS</p>
        <p className="resume-text">2. AI: Android Studio, Google AI Studio, Generative AI, RESTful APIs, Large Language Models (LLMs), Git.</p>
        <p className="resume-text">3. Strengths: Debugging, Project-based learning, Firebase integration.</p>

        <h2 className="resume-section-title">PROJECTS</h2>
        <hr className="resume-divider" />
        <div className="resume-project-item">
          <p className="resume-bold-text">1. Grama-Vasathi (Hospitality)</p>
          <p className="resume-text">Completed the innovative “The Grama-Vasathi” mobile application for the tourism industry, leveraging Kotlin, Jetpack Compose and Firebase. Uses a 'host readiness' model for homestays.</p>
        </div>
        <div className="resume-project-item">
          <p className="resume-bold-text">2. Calculating water footprints for daily-use products</p>
          <p className="resume-text">Designed and deployed an AI-powered Water Footprint Calculator using Python and JavaScript that translates complex freshwater usage data into actionable conservation strategies.</p>
        </div>
        <div>
          <h2 className="resume-section-title">Symposium</h2>
          <hr className="resume-divider" />
          <p className="resume-text">Presented 'Software Application to Calculate the Water Footprints for Daily-Use Products' at the National Conference on Smart Knowledge Discovery in Information Technology and Communication Engineering (SKITE 2025) at KNSIT, Bangalore.</p>
        </div>
        <div>
          <h2 className="resume-section-title">Passion</h2>
          <hr className="resume-divider" />
          <p className="resume-text">Pursuing Carnatic Music at Naadalahari Institution.</p>
        </div>
      </div>
    </div>
  );
};

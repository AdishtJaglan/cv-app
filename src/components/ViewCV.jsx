/* eslint-disable react/prop-types */
import "../styles/ViewCV.css";

export default function ViewCV({ formData }) {
  return (
    <div className="right-aside">
      <div className="cv-container">
        <div className="cv">
          <h1>{formData.name}</h1>
          <p>{formData.title}</p>
          <p>{formData.email}</p>

          <h2>Experience</h2>
          <p>{formData.experience}</p>
          <p>
            {formData.jobTitle} {formData.company}
          </p>
          <p>{formData.role}</p>

          <h2>Education</h2>
          <p>{formData.college}</p>
          <p>{formData.course}</p>
          <p>{formData.duration}</p>

          <h2>Skills</h2>
          <p>Frontend: {formData.frontend}</p>
          <p>Backend: {formData.backend}</p>
          <p>Others: {formData.others}</p>

          <h2>Project</h2>
          <p>{formData.project}</p>
          <a href={formData.link} target="_blank" rel="noopener noreferrer">
            Project Link
          </a>

          <h2>Certifications</h2>
          <p>{formData.certifications}</p>
          <p>Issued By: {formData.issuedBy}</p>
        </div>
      </div>
    </div>
  );
}

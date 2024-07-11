/* eslint-disable react/prop-types */
import "../styles/InputInfoCV.css";
import Heading from "./Heading";
import PersonalFields from "./PersonalFields";
import ExperienceFields from "./ExperienceFields";
import EducationFields from "./EducationFields";
import SkillFields from "./SkillFields";
import ProjectFields from "./ProjectFields";
import CertificationFields from "./CertificationFields";

export default function InputInfoCV({ formData, handleChange }) {
  return (
    <div className="left-aside">
      <div className="cv-input-fields-container">
        <Heading />
        <PersonalFields handleChange={handleChange} formData={formData} />
        <ExperienceFields handleChange={handleChange} formData={formData} />
        <EducationFields handleChange={handleChange} formData={formData} />
        <SkillFields handleChange={handleChange} formData={formData} />
        <ProjectFields handleChange={handleChange} formData={formData} />
        <CertificationFields handleChange={handleChange} formData={formData} />
      </div>
    </div>
  );
}

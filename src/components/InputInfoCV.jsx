import "../styles/InputInfoCV.css";
import Heading from "./Heading";
import PersonalFields from "./PersonalFields";
import ExperienceFields from "./ExperienceFields";
import EducationFields from "./EducationFields";
import SkillFields from "./SkillFields";
import ProjectFields from "./ProjectFields";
import CertificationFields from "./CertificationFields";
import { useState } from "react";

export default function InputInfoCV() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    experience: "",
    role: "",
    jobTitle: "",
    company: "",
    college: "",
    course: "",
    duration: "",
    backend: "",
    frontend: "",
    others: "",
    project: "",
    link: "",
    certifications: "",
    issuedBy: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

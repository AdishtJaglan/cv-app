/* eslint-disable react/prop-types */
import InputField from "./InputField";
import "../styles/ProjectFields.css";

export default function ProjectFields({ formData, handleChange }) {
  return (
    <div className="input-project">
      <InputField
        label="Project"
        name="project"
        value={formData.project}
        onChange={handleChange}
        placeholder="project"
      />
      <InputField
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="link"
      />
    </div>
  );
}

/* eslint-disable react/prop-types */
import InputField from "./InputField";

export default function ExperienceFields({ formData, handleChange }) {
  return (
    <div className="input-experience">
      <InputField
        label="Experience"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Enter your experience"
      />
      <InputField
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="company name"
      />
      <InputField
        name="role"
        value={formData.role}
        onChange={handleChange}
        placeholder="role"
      />
    </div>
  );
}

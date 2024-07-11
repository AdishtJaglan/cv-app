/* eslint-disable react/prop-types */
import InputField from "./InputField";

export default function SkillFields({ formData, handleChange }) {
  return (
    <div className="input-skills">
      <InputField
        label="Skills"
        name="frontend"
        value={formData.frontend}
        onChange={handleChange}
        placeholder="frontend"
      />
      <InputField
        name="backend"
        value={formData.backend}
        onChange={handleChange}
        placeholder="backend"
      />
      <InputField
        name="others"
        value={formData.others}
        onChange={handleChange}
        placeholder="others"
      />
    </div>
  );
}

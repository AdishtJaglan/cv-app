/* eslint-disable react/prop-types */
import InputField from "./InputField";

export default function EducationFields({ formData, handleChange }) {
  return (
    <div className="input-education">
      <InputField
        label="Education"
        name="college"
        value={formData.college}
        onChange={handleChange}
        placeholder="college"
      />
      <InputField
        name="course"
        value={formData.course}
        onChange={handleChange}
        placeholder="course"
      />
      <InputField
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="duration"
      />
    </div>
  );
}

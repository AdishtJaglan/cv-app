/* eslint-disable react/prop-types */
import InputField from "./InputField";
import "../styles/CertificationFields.css";

export default function CertificationFields({ formData, handleChange }) {
  return (
    <div className="input-certifications">
      <InputField
        label="Certifications"
        name="certifications"
        value={formData.certifications}
        onChange={handleChange}
        placeholder="certifications"
      />
      <InputField
        name="issuedBy"
        value={formData.issuedBy}
        onChange={handleChange}
        placeholder="issued by"
      />
    </div>
  );
}

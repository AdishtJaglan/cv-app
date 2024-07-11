/* eslint-disable react/prop-types */
import InputField from "./InputField";
import "../styles/PersonalFields.css";

export default function PersonalFields({ formData, handleChange }) {
  return (
    <div className="input-personal-info">
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <InputField
        label="Title"
        type="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter your title"
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
    </div>
  );
}

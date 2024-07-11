import "./App.css";
import ViewCV from "./components/ViewCV";
import InputInfoCV from "./components/InputInfoCV";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "Adisht Jaglan",
    email: "adisht7524@gmail.com",
    title: "Software Developer",
    experience: "1 YoE",
    role: "Web Development Intern",
    company: "Suvidha Mahila Mandal",
    college: "Maharaja Agrasen Institute of Technology",
    course: "Btech, Computer Science",
    duration: "2022-2026",
    backend: "Node.js, Express.js, MongoDB, django, postgreSQL",
    frontend: "HTML, CSS, JavaScript, React",
    others: "Git",
    project: ":0",
    link: "fake-link.com",
    certifications: "what are those?",
    issuedBy: "Joe",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <InputInfoCV
        className="left-side"
        handleChange={handleChange}
        formData={formData}
      />
      <ViewCV className="right-side" formData={formData} />
    </>
  );
}

export default App;

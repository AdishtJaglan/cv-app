import "./App.css";
import ViewCV from "./components/ViewCV";
import InputInfoCV from "./components/InputInfoCV";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "CV",
  });

  const handleDownloadPdf = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("CV.pdf");
  };

  return (
    <>
      <button onClick={handlePrint}>Print</button>
      <button onClick={handleDownloadPdf}>Download as PDF</button>
      <InputInfoCV
        className="left-side"
        handleChange={handleChange}
        formData={formData}
      />
      <div ref={componentRef}>
        <ViewCV className="right-side" formData={formData} />
      </div>
    </>
  );
}

export default App;

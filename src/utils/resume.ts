import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadResume = async () => {
  const resume = document.getElementById("resume-template");

  if (!resume) return;

  const canvas = await html2canvas(resume, {
    scale: 3,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const width = 210;
  const height = (canvas.height * width) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, width, height);

  pdf.save("Vibha_Resume.pdf");
};

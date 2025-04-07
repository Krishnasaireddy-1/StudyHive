import React, { useState } from "react";

const QnAGenerator = () => {
  const [file, setFile] = useState(null);
  const [qna, setQna] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF first.");

    setLoading(true);
    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await fetch("https://studyhive-q61e.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setQna(data);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">
        Upload & Generate
      </button>

      {loading && <p>Generating questions...</p>}

      {qna.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Generated Questions</h2>
          <ul>
            {qna.map((item, index) => (
              <li key={index} className="mt-2">
                <strong>Q:</strong> {item.question} <br />
                <strong>A:</strong> {item.answer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QnAGenerator;

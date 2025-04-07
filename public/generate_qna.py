import sys
import json
import PyPDF2
from transformers import pipeline

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        for page in reader.pages:
            text += page.extract_text() + "\n"
    return text

def generate_qna(text):
    qna_pipeline = pipeline("question-generation")
    qna = qna_pipeline(text)
    return qna

if __name__ == "__main__":
    pdf_path = sys.argv[1]  # Get the PDF path from Node.js
    text = extract_text_from_pdf(pdf_path)
    questions_and_answers = generate_qna(text)
    
    # Print JSON output for Node.js to capture
    print(json.dumps(questions_and_answers))

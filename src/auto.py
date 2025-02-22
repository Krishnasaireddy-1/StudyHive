import os
import sys
import json
import google.generativeai as genai

def extract_text_from_file(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            return file.read()
    except Exception as e:
        return str(e)

def generate_questions(text):
    os.environ["GOOGLE_API_KEY"] = "AIzaSyChwjmmQQUKO56LR_Xop-vV9dH7Dvdpqj0"  # Replace with your actual API key
    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
    model = genai.GenerativeModel("models/gemini-1.5-pro")
    
    prompt = f"Generate multiple-choice questions from the following text:\n{text}"
    response = model.generate_content(prompt)
    
    return response.text if response else "Error generating questions"

def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "File path is required"}))
        return
    
    file_path = sys.argv[1]
    text = extract_text_from_file(file_path)
    questions = generate_questions(text)
    
    print(json.dumps({"questions": questions}))

if _name_ == "_main_":
    main()
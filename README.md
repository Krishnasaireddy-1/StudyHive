# Gamified learning platform

## Overview
This project is designed as an interactive learning platform where teachers can conduct quizzes, students can access study material, experience gamified learning, and socially connect with friends. Additionally, it allows users to upload a PDF file, generate questions and answers from its content, and engage with the generated questions on the frontend.

## Features
- Upload a PDF file
- Extract text from the PDF
- Conduct quizzes for students
- Provide study materials for enhanced learning
- Gamified learning experience
- Social features to connect with friends
- User-friendly interface for interaction

## Tech Stack
- **Backend:** Node.js
- **Frontend:** React.js,Tailwind Css
- **Database:** MongoDB / Firebase (if needed for storage)
- **Storage:** Local / Cloud storage for PDFs

## Installation
### Prerequisites
- Python 3.8+
- Node.js 16+
- Virtual environment (optional but recommended)

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/your-repo/pdf-qa-generator.git
cd pdf-qa-generator/backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Run the backend
uvicorn main:app --reload  # If using FastAPI
# OR
python app.py  # If using Flask
```

### Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

## Usage
1. Open the frontend in a browser.
2. Upload a PDF file.
3. Wait for the system to process and generate questions and answers.
4. Teachers can create quizzes.
5. Students can access learning materials and participate in gamified learning.
6. Users can socially connect with friends.

## Future Enhancements
- Improve question generation accuracy
- Support multiple languages
- Export Q&A to different formats (CSV, JSON, etc.)
- Add user authentication for saving progress
- Enhance gamification features
- Introduce leaderboards and rewards

## Contributing
Pull requests are welcome. Please follow the contribution guidelines.

## License
This project is licensed under the MIT License.

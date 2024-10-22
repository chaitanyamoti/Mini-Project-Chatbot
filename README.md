# Mini-Project-Chatbot
Mini Project  Chatbot 
# AI Chatbot Application

This is a simple Flask-based AI chatbot application that utilizes Google Generative AI (Gemini) for generating responses to user queries.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [License](#license)

## Features

- Simple user interface for chatting with the AI.
- Supports code formatting in responses.
- User questions and bot responses are displayed in a chat-like format.

## Requirements

- Python 3.7 or higher
- Flask
- Google Generative AI (Gemini) SDK

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git](https://github.com/chaitanyamoti/Mini-Project-Chatbot.git

   cd your-repo-name

    Create a virtual environment:

    bash

python -m venv venv

Activate the virtual environment:

    On Windows:

    bash

venv\Scripts\activate

On macOS/Linux:

bash

    source venv/bin/activate

Install the required packages:

bash

    pip install -r requirements.txt

    Ensure that requirements.txt includes the necessary dependencies, such as Flask and google-generative-ai.

Environment Variables

You need to set an environment variable for your API key to access the Google Generative AI service.
Setting the Environment Variable

    On Windows:

    bash

set API_KEY=your_api_key_here

On macOS/Linux:

bash

    export API_KEY=your_api_key_here

Replace your_api_key_here with your actual API key.
Running the Application

To start the Flask application, use the following command:

bash

python3 app.py

The application will run on http://127.0.0.1:5000/ by default.
Usage

    Open your web browser and go to http://127.0.0.1:5000/.
    Type your message in the input field and click the "Send" button or press Enter.
    The AI will respond with an answer, which may include formatted code snippets.


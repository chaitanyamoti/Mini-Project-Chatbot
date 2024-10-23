from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
from dotenv import load_dotenv
import os

app = Flask(__name__)

# Load the environment variables from the .env file
load_dotenv()


# Configure the Gemini API
genai.configure(api_key=os.getenv("API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    user_query = request.json.get('query')
    if not user_query:
        return jsonify({"response": "I didn't understand that. Can you please clarify?"})
    
    response = model.generate_content(user_query)
    return jsonify({"response": response.text})

if __name__ == '__main__':
    app.run(debug=True)


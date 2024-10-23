const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Initialize the Google Generative AI instance
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Chatbot API endpoint
app.post('/api/chatbot', async (req, res) => {
    const userQuery = req.body.query;

    console.log('Received user query:', userQuery); // Log the received user query

    if (!userQuery) {
        console.log('User query is empty'); // Log if the user query is empty
        return res.json({ response: "I didn't understand that. Can you please clarify?" });
    }

    try {
        // Generate content using the model
        const result = await model.generateContent(userQuery);
        
        console.log('Generated response:', result); // Log the generated response

        // Check if the result is structured as expected
        if (result && result.response && result.response.text) {
            return res.json({ response: result.response.text() });
        } else {
            console.error('Unexpected response format:', result);
            return res.status(500).json({ response: 'Unexpected response format from API.' });
        }
    } catch (error) {
        console.error('Error communicating with the Generative API:', error.response?.data || error.message);
        return res.status(500).json({ response: 'Error occurred while communicating with the API.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


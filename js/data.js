/* ================================================
   AD Lab Portfolio — js/data.js
   ================================================
   This is the ONLY file you need to edit to update
   your experiment details.

   For each experiment, fill in:
   - title     : Name of your experiment
   - desc      : Short 2-3 line description
   - stack     : Technologies used
   - date      : Month & Year
   - objective : One-line goal
   - status    : 'completed' or 'progress'
   - pdf       : Your Google Drive share link
                 e.g. 'https://drive.google.com/file/d/YOUR_ID/view?usp=sharing'
                 Leave as '' if not uploaded yet.
   ================================================ */

const experiments = [
  {
    num: '01',
    title: 'Build a Resume using HTML/CSS',
    desc: 'Design and develop a professional resume webpage with sections for Header, Skills, Projects, Work Experience, and Education. Uses Flexbox/Grid for a fully responsive layout tested across devices.',
    stack: 'HTML, CSS',
    date: 'Jan 2026',
    objective: 'Design a responsive professional resume using HTML and CSS',
    status: 'completed',
    pdf: 'https://drive.google.com/file/d/1gJpEzZmyZvrRLAKozt9RSfqlaft9SfuN/view?usp=drive_link'
  },
  {
    num: '02',
    title: 'Machine Learning for Classification and Regression',
    desc: 'Classify cat vs. dog images using SVM, Random Forest, CNN and other ML models, and predict stock prices using Linear Regression and LSTM. Flask backend serves both model pipelines with an interactive frontend.',
    stack: 'Python, Flask, OpenCV, Scikit-learn, TensorFlow, HTML, CSS',
    date: 'Jan 2026',
    objective: 'Build ML pipelines for image classification and stock price regression',
    status: 'completed',
    pdf: 'https://drive.google.com/file/d/1P6Exax64AiYysfSRZdroGWv75h53N_rj/view?usp=drive_link'
  },
  {
    num: '03',
    title: 'Conversational Chatbot with File Reader and Web Scraper',
    desc: 'Build a chatbot that answers queries from uploaded PDF/Word/Excel files using local LLMs (LLaMA/Gemma via Ollama) and LlamaIndex/LangChain. Includes a web scraper module that fetches and summarises live web content via LLMs.',
    stack: 'Python, Flask, Ollama, LlamaIndex, LangChain, BeautifulSoup, HTML, CSS',
    date: 'Feb 2026',
    objective: 'Create an LLM-powered chatbot for document Q&A and web scraping',
    status: 'completed',
    pdf: 'https://drive.google.com/file/d/1yuKZNm6OJvr8BEB2Fz_oaMLDr2MGVWBf/view?usp=drive_link'
  },
  {
    num: '04',
    title: 'User Authentication and Document Management System',
    desc: 'Develop a Flask-based web app with MySQL/MongoDB for user signup, login, profile management, and grade viewing. Implements secure authentication flows and a responsive frontend for all user interactions.',
    stack: 'Python, Flask, MySQL, MongoDB, HTML, CSS',
    date: 'Feb 2026',
    objective: 'Implement user authentication and a document management system using Flask',
    status: 'completed',
    pdf: 'https://drive.google.com/file/d/1cgLJU04eYAxYk7FKNLxOWcBNLPtUOwY3/view?usp=drive_link'
  },
  {
    num: '05',
    title: 'Natural Language Database Interaction with LLMs and MCP',
    desc: 'Interact with MySQL/MongoDB databases using plain English queries converted to SQL/NoSQL commands by an LLM via MCP. Flask backend bridges the LLM and database, while the frontend displays query results in real time.',
    stack: 'Python, Flask, MySQL, MongoDB, LLM, MCP',
    date: 'Mar 2026',
    objective: 'Enable natural language querying of databases using LLMs and MCP',
    status: 'completed',
    pdf: 'https://drive.google.com/file/d/1Vl90T_dG3DPTrDu0Bg8dVBp3V790puof/view?usp=drive_link'
  },
  {
    num: '06',
    title: 'Sentiment Prediction API Using FastAPI and X Tweets',
    desc: 'Build a FastAPI service that fetches live tweets via Tweepy for a given keyword and analyses their sentiment (Positive/Negative/Neutral) using TextBlob. Exposes REST endpoints testable via Postman or a browser.',
    stack: 'Python, FastAPI, Tweepy, TextBlob, Scikit-learn, Uvicorn',
    date: 'Mar 2026',
    objective: 'Create a sentiment analysis API for X (Twitter) tweets using FastAPI',
    status: 'completed',
    pdf: 'https://drive.google.com/file/d/1nHvKxkggVpvhvbIsKsbXryliSRUb03AM/view?usp=drive_link'
  },
  {
    num: '07',
    title: 'Basic Calculator App Using Android Studio',
    desc: 'Design and implement a functional Android calculator app in Kotlin that supports addition, subtraction, multiplication, and division. Includes a clean UI with 12 buttons, a result display, error handling, and decimal support.',
    stack: 'Kotlin, Android Studio, XML',
    date: 'Mar 2026',
    objective: 'Build a basic arithmetic calculator Android app with Kotlin',
    status: 'completed',
    pdf: 'https://drive.google.com/file/d/1ZPEXKmOipGDzfKMqriMFJITPxISTdM94/view?usp=drive_link'
  },
  {
    num: '08',
    title: 'Sleep Tracker App Using Android Studio',
    desc: 'Develop an Android sleep-tracking app with start/stop controls, a Chronometer for real-time duration display, sleep stage detection, and SharedPreferences-based history. Includes bedtime goal setting and average sleep analytics.',
    stack: 'Kotlin, Android Studio, SharedPreferences, XML',
    date: 'Mar 2026',
    objective: 'Build a sleep tracker Android app with history and goal-setting features',
    status: 'completed',
    pdf: 'https://drive.google.com/file/d/1bZFKfjD7LYHZovGevXkd-zApJ_KL3xPF/view?usp=drive_link'
  }
];
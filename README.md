# hng12_stage1

---

# Number Properties and Fun Facts API

This is a simple Node.js API that takes a number as input and returns interesting mathematical properties about it, along with a fun fact fetched from the [Numbers API](http://numbersapi.com/).

## Features
- *Mathematical Properties*: Determines if the number is a prime number, perfect number, an Armstrong number and whether it is odd or even.
- *Fun Fact*: Fetches a fun mathematical fact about the number from the Numbers API.
- *Simple and Lightweight*: Built using Express and Axios.

## Endpoint
### GET /number/:num
- *Description*: Returns mathematical properties and a fun fact about the provided number.
- *Parameters*:
  - :num (required): The number to analyze.
- *Response*:
  json
  {
    "number": 42,
    "properties": ["even"],
    "funFact": "42 is the 5th Catalan number."
  }
  

## Setup and Installation
1. *Clone the repository*:
   bash
   git clone https://github.com/your-username/number-properties-api.git
   cd number-properties-api
   

2. *Install dependencies*:
   bash
   npm install
   

3. *Start the server*:
   bash
   node server.js
   

4. *Access the API*:
   - Open your browser or use a tool like curl or Postman.
   - Navigate to http://localhost:3000/number/42 (replace 42 with any number).



## Dependencies
- [Express](https://expressjs.com/): A fast and minimalist web framework for Node.js.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making requests to the Numbers API.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### How to Use This README
1. Copy the content above into a file named README.md in the root of your project directory.
2. Replace your-username in the clone URL with your actual GitHub username.
3. Customize the README further if needed (e.g., add more details about your project or update the license).

This README provides a clear overview of your project, making it easy for others to understand, use, and contribute to your API.
  

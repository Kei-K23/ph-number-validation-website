# Phone Number Verification Web App

This is a web application for verifying phone numbers using the API provided by apilayer. It allows users to enter a phone number along with its country code and checks if the phone number is valid, providing additional information such as carrier and formatting details.

## Features

- Input a phone number with a country code.
- Validate the phone number using the apilayer API.
- Display information about the phone number's validity, carrier, and formatting.
- User-friendly interface with country code selection.

## Prerequisites

Before running this application, make sure you have the following:

- [Node.js](https://nodejs.org/) installed.
- API key from [apilayer](https://apilayer.com/).

## Installation and Usage

1. Clone this repository to your local machine:
   git clone https://github.com/your-username/phone-number-verification.git

2. Change into the project directory:  
   cd phone-number-verification

3. Install the dependencies:
   npm install

4. Add your APILayer API key from [APILayer](https://apilayer.com/):
   header.append("apikey", YOUR_APIKEY);

5. Run local server:
   npm run dev

## Contribution

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m "Add feature or fix".
4. Push to your forked repository: git push origin feature-name.
5. Create a pull request to the original repository.

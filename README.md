# COVID-19 Tracker with Contact Creation and Global Map

This project is a COVID-19 tracker application built using React. It allows users to create and manage contacts while also providing real-time COVID-19 case data and a global map visualizing the COVID-19 situation in different countries.

## Features

- Contact Creation:
  - Users can create and manage their contacts through a user-friendly interface.
  - The contact creation form includes fields for name, email, phone number, and address.
  - Submitted contacts are stored in a database for future reference and management.

- COVID-19 Case Data:
  - Real-time COVID-19 case data is fetched from a reliable data source or API.
  - Users can view the total number of COVID-19 cases, recoveries, and deaths globally.
  - The data is presented in a visually appealing and informative manner.

- Global Map:
  - The application displays a world map with interactive markers representing different countries.
  - Each marker provides information about the COVID-19 situation in that country, such as confirmed cases, recoveries, and deaths.
  - Users can interact with the map by zooming in/out, panning, and clicking on markers for detailed information.

## Installation

1. Clone the repository: `git clone https://github.com/sanjana332001/Assignment.git`
2. Navigate to the project directory: `cd Assignment`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and go to `http://localhost:3000` to access the application.

## Technologies Used

- React
- JavaScript
- HTML/CSS
- Tailwind CSS (for responsive styling)

## APIs Used


- [covidAll]("https://disease.sh/v3/covid-19/all")
- [covidCountries]("https://disease.sh/v3/covid-19/countries")
- [covidHistorical]("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

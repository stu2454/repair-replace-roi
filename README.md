# ROI Simulator Documentation

## Overview

The **ROI Simulator for Assistive Technology (AT)** was developed to provide a clear and interactive way to quantify the financial benefits of investing in the repair or replacement of assistive technology. The tool simulates the costs of additional daily living support required during periods of AT failure and compares these to the costs incurred when AT is repaired or replaced immediately.

The simulator is designed to:

- Support decision-making processes for funding and resource allocation.
- Provide evidence for cost-saving arguments associated with proactive AT investments.
- Highlight the cumulative financial impact of delayed or absent AT repairs/replacements.

**Note**: This simulator is based on simplistic assumptions and does not account for complex real-world variables. The ROI is computed from the relative cumulative costs on the final day of the period during which additional daily living supports were required.

---

## Key Features

### Customisable Input Parameters:
- Daily assistance costs (weekday, Saturday, Sunday rates).
- Typical daily assistance hours.
- Additional hours required during AT failure.
- Number of days with increased assistance.
- AT repair or replacement cost.

### Dynamic ROI Calculation:
- Calculates the cumulative costs of two scenarios:
  1. Without AT repair/replacement (additional support needed).
  2. With immediate AT repair/replacement.
- Computes the savings during the failure period.
- Provides the ROI as a percentage based on the savings.

### Interactive Chart Visualisation:
- Plots cumulative costs over time for both scenarios.
- Highlights key events with annotations (failure and recovery points).

### Web Deployment:
- Fully accessible via a web browser.
- Hosted on Render for easy sharing and collaboration.

---

## Motivation

Assistive technology plays a crucial role in enabling individuals with disabilities to lead independent lives. However, when AT fails and is not repaired or replaced promptly, the reliance on personal daily living support increases significantly. This imposes:

- Increased financial costs for caregivers, institutions, and funding bodies.
- Decreased quality of life for individuals relying on AT.

---

## Objectives of the Simulator

- **Demonstrate Financial Impact**: Show how delays in repairing or replacing AT lead to higher cumulative costs.
- **Support Advocacy**: Provide evidence-based arguments for funding AT repairs/replacements.
- **Enable Better Planning**: Help stakeholders anticipate costs and allocate resources effectively.

---

## Technical Implementation

### Frontend:
- Built with HTML, CSS, and JavaScript.
- Implements dynamic input forms and chart visualisation using Chart.js.

### Backend:
- Developed with Node.js and Express.
- Serves the frontend and handles any future extensions for data persistence or APIs.

### Deployment:
- Hosted on Render as a web service.
- Accessible via a unique URL for easy sharing.

---

## Development Details

### Project Structure:
```
project-root/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
└── README.md
```

### Frontend:
- The frontend consists of static HTML, CSS, and JavaScript files.
- The `index.html` file provides the user interface, including input forms for custom parameters.
- The `script.js` file handles calculations, chart rendering, and ROI computation.

### Backend:
- The backend uses Node.js with Express to serve the frontend files and enable future API integrations.
- The `server.js` file configures routes to serve the frontend and handle static files.

### Chart Integration:
- The simulator uses Chart.js for visualising cumulative costs.
- Dynamic datasets are updated based on user input, and annotations highlight critical points.

### Deployment:
- Render is used for deployment, configured as a web service.
- The backend runs on Node.js, serving the frontend files directly.
- Environment variables (e.g., `PORT`) ensure compatibility with Render’s hosting environment.

---

## How It Works

### User Inputs:
- The user specifies daily assistance costs, hours, and other key parameters through an interactive form.

### Simulation:
- The simulator calculates cumulative costs for both scenarios (with and without replacement).
- Highlights savings and computes ROI based on the input data.

### Visualisation:
- Displays results in a clear and interactive chart, showing the financial trajectory over time.
- Annotates critical points such as the failure and recovery dates.

### Results and Insights:
- Summarises key metrics including cumulative costs, savings, and ROI.

---

## Example Use Case

### Scenario:
- Weekday rate: $64/hour
- Saturday rate: $90/hour
- Sunday rate: $70/hour
- Typical daily assistance hours: 6
- Additional daily assistance hours during failure: 4
- Number of days with increased assistance: 84 days
- AT repair cost: $5,000

### Results:
- Cumulative cost without replacement: $57,707
- Cumulative cost with immediate replacement: $34,607
- Savings: $23,100
- ROI: 462%

---

## Future Enhancements

- **Data Export**: Enable users to export results and charts as PDF or CSV for reporting purposes.
- **API Integration**: Allow integration with external systems for real-time data inputs.
- **Scenario Comparison**: Support multiple scenarios for comparative analysis.

---

## Conclusion

The ROI Simulator is a powerful tool for illustrating the financial benefits of proactive AT investments. By quantifying the cost savings and ROI, it supports stakeholders in making informed decisions and advocating for effective resource allocation.



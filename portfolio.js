import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PortfolioApp extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <header>
          <h1>My Portfolio</h1>
        </header>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of Project 1.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of Project 2.</p>
          </div>
          {/* Add more projects as needed */}
        </section>
        <footer>
          <p>&copy; 2023 My Portfolio</p>
        </footer>

        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }

            .portfolio-container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }

            header {
              background-color: #007bff;
              color: #fff;
              padding: 10px;
              text-align: center;
            }

            .projects {
              margin-top: 20px;
            }

            .project {
              background-color: #f9f9f9;
              margin-bottom: 10px;
              padding: 10px;
              border: 1px solid #ddd;
            }

            footer {
              margin-top: 20px;
              text-align: center;
              font-size: 14px;
            }
          `}
        </style>
      </div>
    );
  }
}

ReactDOM.render(<PortfolioApp />, document.getElementById('root'));


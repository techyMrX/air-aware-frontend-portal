
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">About AirAware</h1>
          <p className="text-gray-500 mb-8">
            Using artificial intelligence to predict and monitor air quality
          </p>

          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Frontend</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>React with TypeScript</li>
                      <li>Tailwind CSS for responsive design</li>
                      <li>Chart libraries for data visualization</li>
                      <li>User authentication system</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Backend & AI</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Machine learning models for prediction</li>
                      <li>Data processing pipelines</li>
                      <li>API integration with weather services</li>
                      <li>Cloud-based infrastructure</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Air Quality Parameters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-1">PM2.5</h3>
                    <p className="text-sm text-gray-600">
                      Fine particulate matter smaller than 2.5 micrometers, which can penetrate deep into the lungs and even enter the bloodstream.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">PM10</h3>
                    <p className="text-sm text-gray-600">
                      Inhalable particles with diameters generally 10 micrometers and smaller, which can irritate the eyes, nose, and throat.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Ozone (O₃)</h3>
                    <p className="text-sm text-gray-600">
                      A gas that occurs both in the Earth's upper atmosphere and at ground level, where it can harm lung function.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Nitrogen Dioxide (NO₂)</h3>
                    <p className="text-sm text-gray-600">
                      A gaseous air pollutant produced primarily during combustion processes, can cause inflammation of airways.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Sulfur Dioxide (SO₂)</h3>
                    <p className="text-sm text-gray-600">
                      A gas produced from burning fossil fuels, can cause respiratory problems and contribute to acid rain.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Carbon Monoxide (CO)</h3>
                    <p className="text-sm text-gray-600">
                      An odorless, colorless gas that can be harmful when inhaled in large amounts, reducing oxygen delivery to organs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">AI Model Information</h2>
                <p className="mb-4">
                  The core of AirAware is a deep learning model trained on several years of historical air quality data. 
                  The prediction model incorporates:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Historical air quality measurements from monitoring stations</li>
                  <li>Weather data including temperature, humidity, wind patterns</li>
                  <li>Traffic density information for urban areas</li>
                  <li>Seasonal and temporal patterns that affect pollution levels</li>
                  <li>Special events data (such as wildfires, construction activities)</li>
                </ul>
                <p>
                  The model utilizes a combination of recurrent neural networks (RNNs) and time series analysis 
                  to identify patterns and make predictions with up to 7 days of forecast capability. 
                  The system continuously retrains as new data becomes available, improving accuracy over time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">About the Developer</h2>
                <p className="mb-4">
                  This project was created as a final year project in Computer Science/Environmental Engineering. 
                  It represents the culmination of research into artificial intelligence applications for 
                  environmental monitoring and public health.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
                    FYP
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Student Name</h3>
                    <p className="text-gray-600 mt-1">Bachelor of Science, Computer Science</p>
                    <p className="text-gray-600">University Name, Class of 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="mb-4">
                  For more information about this project, including research papers, source code access, 
                  or collaboration opportunities, please contact:
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="font-medium">email@university.edu</p>
                  <p className="text-gray-600 mt-1">Department of Computer Science</p>
                  <p className="text-gray-600">University Name</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

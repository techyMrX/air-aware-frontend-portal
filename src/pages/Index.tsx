
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Activity, AlertTriangle, ThumbsUp, BarChart2 } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-primary">AI-Powered</span> Air Quality Prediction
              </h1>
              <p className="text-xl text-gray-600">
                Make informed decisions with accurate, real-time air quality data and predictive forecasts powered by machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Dashboard
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 flex flex-col items-center justify-center text-center p-8">
                    <Activity className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Real-time Air Quality</h3>
                    <p className="text-gray-600">
                      Monitor live air quality indexes and pollutant levels in your area
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full z-[-1]"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600">
              Our advanced air quality prediction platform combines real-time data with AI to provide accurate insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">AI Predictions</h3>
                <p className="text-gray-600">
                  Machine learning models analyze patterns to forecast air quality up to 7 days ahead.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary">
              <CardContent className="pt-6">
                <div className="rounded-full bg-secondary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Health Alerts</h3>
                <p className="text-gray-600">
                  Receive personalized notifications when air quality might affect your health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Real-time Data</h3>
                <p className="text-gray-600">
                  Access up-to-the-minute readings from air quality monitoring stations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary">
              <CardContent className="pt-6">
                <div className="rounded-full bg-secondary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <ThumbsUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Recommendations</h3>
                <p className="text-gray-600">
                  Get smart advice on how to reduce exposure during poor air quality events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Air Quality Index Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Understanding Air Quality</h2>
            <p className="text-gray-600">
              Learn about air quality indexes and how they impact your health and daily activities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4">Air Quality Index (AQI) Levels</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-8 bg-airquality-good rounded"></div>
                    <div>
                      <h4 className="font-medium">Good (0-50)</h4>
                      <p className="text-sm text-gray-600">Air quality is considered satisfactory, and air pollution poses little or no risk.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-8 bg-airquality-moderate rounded"></div>
                    <div>
                      <h4 className="font-medium">Moderate (51-100)</h4>
                      <p className="text-sm text-gray-600">Air quality is acceptable; however, some pollutants may be a concern for a small number of people.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-8 bg-airquality-unhealthy rounded"></div>
                    <div>
                      <h4 className="font-medium">Unhealthy (101-200)</h4>
                      <p className="text-sm text-gray-600">Everyone may begin to experience health effects; members of sensitive groups may experience more serious effects.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-8 bg-airquality-hazardous rounded"></div>
                    <div>
                      <h4 className="font-medium">Hazardous (201+)</h4>
                      <p className="text-sm text-gray-600">Health warnings of emergency conditions. The entire population is more likely to be affected.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to monitor your air quality?</h2>
              <p className="text-lg opacity-90 mb-6">
                Sign up now to access personalized air quality alerts, predictions, and health recommendations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/signup">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Create an Account
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

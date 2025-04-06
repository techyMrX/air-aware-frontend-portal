
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Search, MapPin, Thermometer, Wind, Droplets, CloudRain } from "lucide-react";

// Mock data for the charts
const airQualityData = [
  { time: '00:00', pm25: 12, pm10: 22, aqi: 42 },
  { time: '03:00', pm25: 15, pm10: 25, aqi: 48 },
  { time: '06:00', pm25: 35, pm10: 55, aqi: 78 },
  { time: '09:00', pm25: 45, pm10: 75, aqi: 95 },
  { time: '12:00', pm25: 30, pm10: 60, aqi: 82 },
  { time: '15:00', pm25: 22, pm10: 40, aqi: 65 },
  { time: '18:00', pm25: 18, pm10: 30, aqi: 55 },
  { time: '21:00', pm25: 14, pm10: 24, aqi: 45 },
];

const forecastData = [
  { day: 'Today', aqi: 55, pm25: 18, pm10: 30 },
  { day: 'Tomorrow', aqi: 62, pm25: 22, pm10: 35 },
  { day: 'Wed', aqi: 45, pm25: 14, pm10: 24 },
  { day: 'Thu', aqi: 70, pm25: 27, pm10: 42 },
  { day: 'Fri', aqi: 58, pm25: 20, pm10: 32 },
  { day: 'Sat', aqi: 40, pm25: 12, pm10: 20 },
  { day: 'Sun', aqi: 35, pm25: 10, pm10: 18 },
];

const getAirQualityStatus = (aqi: number): { status: string; color: string } => {
  if (aqi <= 50) return { status: 'Good', color: 'text-airquality-good' };
  if (aqi <= 100) return { status: 'Moderate', color: 'text-airquality-moderate' };
  if (aqi <= 200) return { status: 'Unhealthy', color: 'text-airquality-unhealthy' };
  return { status: 'Hazardous', color: 'text-airquality-hazardous' };
};

const weatherData = {
  location: "New York City",
  temperature: 22,
  humidity: 65,
  windSpeed: 12,
  condition: "Partly Cloudy",
  airQuality: 55, // AQI value
};

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  
  const airQualityStatus = getAirQualityStatus(weatherData.airQuality);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Air Quality Dashboard</h1>
          <p className="text-gray-500">
            Monitor and predict air quality in real-time using advanced AI models
          </p>
        </div>

        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              placeholder="Search for a location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
            <Button type="submit" disabled={isSearching}>
              <Search className="h-4 w-4 mr-2" />
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Current Location</CardDescription>
              <CardTitle className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                {weatherData.location}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Temperature</CardDescription>
              <CardTitle className="flex items-center">
                <Thermometer className="h-4 w-4 mr-1 text-primary" />
                {weatherData.temperature}°C
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Humidity</CardDescription>
              <CardTitle className="flex items-center">
                <Droplets className="h-4 w-4 mr-1 text-primary" />
                {weatherData.humidity}%
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Wind Speed</CardDescription>
              <CardTitle className="flex items-center">
                <Wind className="h-4 w-4 mr-1 text-primary" />
                {weatherData.windSpeed} km/h
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Air Quality Index (AQI)</CardTitle>
              <CardDescription>
                Real-time air quality measurements over the past 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={airQualityData}>
                  <defs>
                    <linearGradient id="colorAqi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="aqi" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorAqi)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Air Quality</CardTitle>
              <CardDescription>Live air quality status for {weatherData.location}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full">
                  <CloudRain className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-7xl font-bold">{weatherData.airQuality}</div>
                  <div className={`text-xl font-medium ${airQualityStatus.color}`}>
                    {airQualityStatus.status}
                  </div>
                  <div className="text-gray-500">US EPA Air Quality Index</div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">PM2.5</span>
                  <span className="font-medium">18 µg/m³</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">PM10</span>
                  <span className="font-medium">32 µg/m³</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">O3 (Ozone)</span>
                  <span className="font-medium">48 ppb</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">NO2</span>
                  <span className="font-medium">15 ppb</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Air Quality Forecast</CardTitle>
              <CardDescription>AI-powered prediction for the next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="aqi">
                <TabsList className="mb-4">
                  <TabsTrigger value="aqi">AQI</TabsTrigger>
                  <TabsTrigger value="pm25">PM2.5</TabsTrigger>
                  <TabsTrigger value="pm10">PM10</TabsTrigger>
                </TabsList>
                <TabsContent value="aqi">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={forecastData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="aqi" stroke="#0ea5e9" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="pm25">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={forecastData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="pm25" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="pm10">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={forecastData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="pm10" stroke="#6366f1" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Health Recommendations</CardTitle>
              <CardDescription>Based on current air quality conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-0.5 rounded-full bg-green-100 p-1">
                    <svg className="h-3 w-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>It's a moderate air quality day. Sensitive individuals should consider reducing prolonged outdoor activities.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-0.5 rounded-full bg-green-100 p-1">
                    <svg className="h-3 w-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Keep windows closed during peak traffic hours to avoid outdoor pollution entering your home.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-0.5 rounded-full bg-green-100 p-1">
                    <svg className="h-3 w-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Using air purifiers indoors can help reduce exposure to particulate matter.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pollution Sources</CardTitle>
              <CardDescription>Current major contributors to air pollution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Traffic Emissions</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Industrial Activity</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Residential Heating</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Natural Sources</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

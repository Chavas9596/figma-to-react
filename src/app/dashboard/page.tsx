"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SkeletonLoading from "./loading";

interface DashboardItem {
  image: string;
  title: string;
  description: string;
  price: number;
}

const Dashboard = () => {
  const [resData, setResData] = useState<DashboardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/dashboard/api`);
        const { data } = await response.json();
        setResData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <SkeletonLoading />;
  }

  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {resData.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-md">
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-lg font-semibold mt-2">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

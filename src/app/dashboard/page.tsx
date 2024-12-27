"use client";

import { Suspense, use } from "react";
import Image from "next/image";
import SkeletonLoading from "./loading";

interface DashboardItem {
  image: string;
  title: string;
  description: string;
  price: number;
}

// Create a function to fetch data
async function fetchDashboardData(): Promise<{ data: DashboardItem[] }> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${baseUrl}/dashboard/api`);
  return data.json();
}

const Dashboard = () => {
  // Use the `use` Hook directly with the Promise
  const { data: resData } = use(fetchDashboardData());

  return (
    <section className="min-h-screen flex items-center">
      <Suspense fallback={<SkeletonLoading />}>
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
      </Suspense>
    </section>
  );
};

export default Dashboard;

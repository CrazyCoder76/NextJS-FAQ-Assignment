"use client"
import React, { useEffect, useState } from 'react';
import QACard from './qaCard';

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/faqs.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch the JSON file');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching the JSON data:', error);
      });
  }, []);

  return (
    <>
      {data ? (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Q&A List</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((item: any, index: number) => (
              <QACard
                key={index}
                question={item.Q}
                answer={item.A}
                tag={item.T}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <p className="text-3xl">Loading data...</p>
        </div>
      )}
    </>
  );
};
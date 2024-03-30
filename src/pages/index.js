import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const cars = require("./data/data.json").cars;

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto box-border mt-6">
      <h1 className="text-4xl text-center font-medium text-cyan-900 mb-10">Список машин</h1>
      <ul className="flex items-center flex-col justify-center gap-4">
        {cars.map((car) => (
          <li key={car.brand + car.model} className="border border-cyan-900 rounded-lg w-80 px-8 py-4">
            <Link href={`/car/${car.brand}`}>
              <p className="text-2xl text-cyan-900 font-semibold">{car.brand} {car.model}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { useRouter } from "next/router";

const cars = require("../data/data.json").cars;
export default function CarPage() {
  const router = useRouter();
  const { brand } = router.query;

  const car = cars.find((car) => car.brand === brand);

  if (!car) {
    return <div>Машина не найдена</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto box-border mt-10">
      <h2 className="text-4xl text-center font-medium text-cyan-900 mb-10">Информация о машине</h2>
      <div className="flex flex-col items-center justify-center gap-2 w-96 border mx-auto border-cyan-900 rounded-lg px-8 py-4">
      <p className="text-xl font-medium text-cyan-900">Бренд: {car.brand}</p>
      <p className="text-cyan-900 text-lg">Модель: {car.model}</p>
      <p className="text-cyan-900 text-lg">Тип кузова: {car.carbody}</p>
      <p className="text-cyan-900 text-lg">Цвет: {car.color}</p>
      <p className="text-cyan-900 text-lg">Цена: {car.price}</p>
      <p className="text-cyan-900 text-lg">Год выпуска: {car.year}</p>
      </div> 
    </div>
  );
}
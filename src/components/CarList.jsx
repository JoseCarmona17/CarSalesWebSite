import React from 'react';

const CarList = () => {
  const cars = [
    {
      year: 1970,
      make: 'Chevrolet',
      model: 'Corvette',
      miles: 996,
      transmission: '4 Speed Manual',
      fuel: 'Petrol',
      price: "$24,995",
    },
    {
      year: 1963,
      make: 'Chevrolet',
      model: 'Corvette',
      miles: 1863,
      transmission: '4 Speed Manual',
      fuel: 'Petrol',
      price: "$24,995",
    },
    {
      year: 1966,
      make: 'Pontiac',
      model: 'GTO',
      miles: 75889,
      transmission: '4 Speed Manual',
      fuel: 'Petrol',
      price: "$24,995",
    },
    {
        year: 1966,
        make: 'Pontiac',
        model: 'GTO',
        miles: 75889,
        transmission: '4 Speed Manual',
        fuel: 'Petrol',
        price: "$24,995",
      },
  ];

  return (
    <div className="p-4 bg-[#936363]">
      <h1 className="text-3xl font-bold mb-4 ml-15 text-[#222732] p-5">20 Results</h1>
      <div className="space-y-4">
        {cars.map((car, index) => (
          <div key={index} className="p-7 border rounded-lg shadow-sm bg-amber-50 ml-20 mr-20">
            <h2 className="text-xl font-semibold">{car.year} {car.make} {car.model}</h2>
            <p><span className="font-medium">Miles:</span> {car.miles.toLocaleString()}</p>
            <p><span className="font-medium">Transmission:</span> {car.transmission}</p>
            <p><span className="font-medium">Fuel:</span> {car.fuel}</p>
            <p><span className="font-medium">Price:</span> {car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
  import React from "react";

  const cars = [
    {
      id: 1,
      image: "https://angrypatsauto.com/wp-content/uploads/2024/12/1-20-1024x630.jpg",
      title: "1970 Chevrolet Corvette",
      price: "$24,995",
      year: "1970",
      miles: "996 miles",
      transmission: "4 Speed Manual",
      fuel: "Petrol",
      imagesCount: 17,
    },
    {
      id: 2,
      image: "https://angrypatsauto.com/wp-content/uploads/2024/12/1-19-1024x629.jpg",
      title: "1963 Chevrolet Corvette",
      price: "$39,995",
      year: "1963",
      miles: "1,963 miles",
      imagesCount: 15,
    },
    {
      id: 3,
      image: "https://angrypatsauto.com/wp-content/uploads/2024/12/1-17-1024x631.jpg",
      title: "1966 Pontiac GTO",
      price: "$64,200",
      year: "1966",
      miles: "75,889 miles",
      imagesCount: 17,
    },
    {
      id: 4,
      image: "https://angrypatsauto.com/wp-content/uploads/2024/12/1-18-1024x575.jpg",
      title: "1968 Dodge Charger",
      price: "$63,200",
      year: "1968",
      miles: "851 miles",
      imagesCount: 17,
    },
    {
      id: 5,
      image: "https://angrypatsauto.com/wp-content/uploads/2024/12/1-16-1024x575.jpg",
      title: "1968 Dodge Coronet Super Bee",
      price: "$38,995",
      year: "1968",
      miles: "62,507 miles",
      imagesCount: 16,
    },
  ];

  const CarCard = ({ car, large = false }) => {
    return (
      <div className={`flex bg-white rounded-2xl shadow-lg overflow-hidden ${large ? "h-full" : "h-1/2"}`}>
        <img src={car.image} alt={car.title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{car.title}</h3>
          <p className="text-xl font-bold text-orange-500">{car.price}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <span className="bg-gray-200 px-2 py-1 rounded">{car.year}</span>
            <span>{car.miles}</span>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-sm bg-black text-white px-2 py-1 rounded">
          📷 {car.imagesCount}
        </div>
      </div>
    );
  };

  const CarGallery = () => {
    return (
      <div className="max-w-9xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-4 h-[500px]">
          {/* Primera columna: Imagen grande */}
          <div className="col-span-1">
            <CarCard car={cars[0]} large={true} />
          </div>

          {/* Segunda columna: Dos imágenes apiladas */}
          <div className="col-span-1 flex flex-col gap-4">
            <CarCard car={cars[1]} />
            <CarCard car={cars[2]} />
          </div>

          {/* Tercera columna: Dos imágenes apiladas */}
          <div className="col-span-1 flex flex-col gap-4">
            <CarCard car={cars[3]} />
            <CarCard car={cars[4]} />
          </div>
        </div>
      </div>
    );
  };

  export default CarGallery;

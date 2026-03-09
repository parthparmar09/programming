import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CarContext = createContext();

export const useCarContext = () => useContext(CarContext);

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCars = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`api/users/${id}/cars`);
      setCars(response.data.cars);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addCar = async (newCar) => {
    setLoading(true);

    try {
      let car = { id: Math.floor(Math.random() * 100000), ...newCar };
      await axios.post("/api/addCar", { car });
      setCars([car, ...cars]);
      toast.success("Advertisement posted");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteCar = async (carId) => {
    setLoading(true);

    try {
      await axios.delete("/api/cars/" + carId);
      setCars(cars.filter((car) => car.id !== carId));
      toast.success("Advertisement deleted");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const modifyCar = async (carId, carBody) => {
    setLoading(true);

    try {
      let car = cars.find((c) => c.id === carId);
      if (carBody.price) {
        car.price = carBody.price;
      }
      if (carBody.status) {
        car.status = carBody.status;
      }
      await axios.put("/api/cars/" + carId, car);

      setCars([car, ...cars.filter((car) => car.id !== carId)]);
      toast.success("Advertisement modified");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CarContext.Provider
      value={{ cars, loading, getCars, addCar, deleteCar, modifyCar }}
    >
      {children}
    </CarContext.Provider>
  );
};

import { rest } from "msw";
import carData from "../data/cars.json";
import userData from "../data/users.json";
const cars = [...carData];
const users = [...userData];

export default [
  rest.post("/api/addCar", (req, res, ctx) => {
    const { car } = req.body;
    cars.push(car);
    console.log(cars);
    return res(ctx.status(200), ctx.json({ success: true, car }));
  }),

  rest.get("/api/cars", (req, res, ctx) => {
    let url = new URL(req.url);
    const {
      search,
      brands,
      price,
      kmsDriven,
      fuelType,
      transmission,
      bodyType,
    } = JSON.parse(url.searchParams.get("filter"));

    let filteredCars = [...cars];

    if (brands && brands.length > 0) {
      filteredCars = filteredCars.filter((car) => brands.includes(car.brand));
    }
    if (price && price.length > 0) {
      filteredCars = filteredCars.filter(
        (car) => car.price >= price[0] && car.price <= price[1]
      );
    }
    if (kmsDriven && kmsDriven.length > 0) {
      filteredCars = filteredCars.filter(
        (car) => car.mileage >= kmsDriven[0] && car.mileage <= kmsDriven[1]
      );
    }
    if (bodyType && bodyType.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        bodyType.includes(car.bodyType)
      );
    }
    if (transmission && transmission.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        transmission.includes(car.transmission)
      );
    }
    if (fuelType && fuelType.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        fuelType.includes(car.fuelType)
      );
    }
    if (search) {
      filteredCars = filteredCars.filter(
        (car) =>
          car.brand.toLowerCase().includes(search.toLowerCase()) ||
          car.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ success: true, cars: filteredCars })
    );
  }),

  rest.get("/api/users/:id/cars", (req, res, ctx) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));
    const car = cars.filter((c) => c.owner_id === user.id);

    if (car) {
      return res(ctx.status(200), ctx.json({ success: true, cars: car }));
    } else {
      return res(
        ctx.status(404),
        ctx.json({ success: false, message: "No cars found" })
      );
    }
  }),

  rest.get("/api/cars/:id", (req, res, ctx) => {
    const { id } = req.params;
    const car = cars.find((c) => c.id === parseInt(id));
    const owner = users.find((u) => car.owner_id === u.id);
    if (car) {
      return res(
        ctx.status(200),
        ctx.json({ success: true, data: { car, owner } })
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({ success: false, message: "Car not found" })
      );
    }
  }),

  rest.put("/api/cars/:id", (req, res, ctx) => {
    const { id } = req.params;
    const updatedCar = req.body;
    const index = cars.findIndex((c) => c.id === parseInt(id));
    if (index !== -1) {
      cars[index] = updatedCar;
      return res(ctx.status(200), ctx.json({ success: true, car: updatedCar }));
    } else {
      return res(
        ctx.status(404),
        ctx.json({ success: false, message: "Car not found" })
      );
    }
  }),

  rest.delete("/api/cars/:id", (req, res, ctx) => {
    const { id } = req.params;
    const index = cars.findIndex((c) => c.id === parseInt(id));
    if (index !== -1) {
      const deletedCar = cars.splice(index, 1)[0];
      return res(ctx.status(200), ctx.json({ success: true, car: deletedCar }));
    } else {
      return res(
        ctx.status(404),
        ctx.json({ success: false, message: "Car not found" })
      );
    }
  }),
];

import "../src/env";
import { connectMongo } from "../src/db";
import { Vehicle } from "../src/models/Vehicle";

await connectMongo(process.env.MONGODB_URI!);

await Vehicle.deleteMany({});
await Vehicle.insertMany([
  {
    slug: "fiat-egea-2022-auto",
    brand: "Fiat",
    model: "Egea",
    year: 2022,
    category: "economy",
    transmission: "automatic",
    fuel: "gasoline",
    seats: 5,
    status: "active",
    imageUrl: "/images/egea.jpg",
  },
  {
    slug: "renault-clio-2023-man",
    brand: "Renault",
    model: "Clio",
    year: 2023,
    category: "economy",
    transmission: "manual",
    fuel: "gasoline",
    seats: 5,
    status: "active",
    imageUrl: "/images/clio.jpg",
  },
]);

console.log("Mongo seed ok");
process.exit(0);

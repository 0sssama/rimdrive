import { cars } from "@/data/cars";

function SEO() {
  return (
    <div className="sr-only">
      <h1>RimDrive</h1>
      <ul>
        <li>Location Voitures Fes</li>
        <li>Location Voitures Fez</li>
        <li>Location Voitures Rabat</li>
        <li>Location Voitures Casablanca</li>
        <li>Location Voitures Tanger</li>
        <li>Location Voitures Tetouan</li>
        <li>Location Voitures Oujda</li>
        <li>Location Voitures Agadir</li>
        <li>Location Voitures Maroc</li>
        {cars.map((car) => (
          <li key={car.name}>{`Location ${car.name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default SEO;

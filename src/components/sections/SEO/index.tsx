import { cars } from "@/data/cars";

function SEO() {
  return (
    <section className="sr-only">
      <h1>RimDrive</h1>
      <article>
        {`Découvrez la Liberté sur Quatre Roues avec RimDrive Fes Que vous
        cherchiez une location de voiture à Fes, une voiture de luxe pour votre
        escapade marocaine, ou simplement un moyen de transport fiable pour vos
        déplacements, RimDrive Fes est votre solution. Nous comprenons les
        besoins variés de nos clients. C'est pourquoi nous proposons une gamme
        complète de véhicules, allant des berlines élégantes aux voitures de
        sport puissantes. Si vous envisagez une location de voiture à long terme
        ou même une location de courte durée, nos tarifs compétitifs et notre
        service clientèle inégalé garantissent votre satisfaction. Notre flotte
        de véhicules est soigneusement entretenue et prête à vous emmener
        partout où votre cœur désire au Maroc. En cherchant des offres de
        location de voitures à Fes, faites confiance à RimDrive Fes pour
        combiner qualité, commodité, et coût. N'attendez plus, trouvez la
        meilleure location de voiture à Fes et profitez de chaque instant sur la
        route marocaine avec RimDrive Fes.`}
        <ul>
          <li>Location Voiture Fes</li>
          <li>Location Voiture Fez</li>
          <li>Location Voiture Rabat</li>
          <li>Location Voiture Casablanca</li>
          <li>Location Voiture Tanger</li>
          <li>Location Voiture Tetouan</li>
          <li>Location Voiture Oujda</li>
          <li>Location Voiture Agadir</li>
          <li>Location Voiture Marrakech</li>
          <li>Location Voiture Maroc</li>
          {cars.map((car) => (
            <li key={car.name}>{`Location ${car.name}`}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default SEO;

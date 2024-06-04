
import { propertyVideos } from "./property-grid-files"

const IdealPropertyGrid = () => {
  return (
    <>
      <section className="container">
        <h1 className="align-tx-c">Discover your Ideal Property Type</h1>

        <div className="property-grid-videos">
          <div className="grid-2">
            {propertyVideos.map((property) => (
              <div className="grid-item-2" key={property.id}>
                <img src={property.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default IdealPropertyGrid
import path from "path";
import constants from "@/components/lib/constants";
const baseURI = process.env[constants.DATABASE_URL_KEY];

export default async function ResearchAreas() {
  const researchAreas = await (
    await fetch(path.join(baseURI, "api", "research-page-areas/?populate=*"))
  ).json();


  const extractedData = researchAreas.data.map((item) => {
    console.log(item.attributes.value);
    const heading = item.attributes.heading[0]?.children[0]?.text || "";
    const description = item.attributes.description[0]?.children[0]?.text || "";
    const imageUrls = item.attributes.images.data.map(
      (image) => image.attributes.url
    );

    return { heading, description, imageUrls };
  });

  return (
    <div className="App">
      {extractedData.map((item, index) => (
        <div key={index} className="card">
          <h2>{item.heading}</h2>
          <p>{item.description}</p>
          <div className="images">
            {item.imageUrls.map((url, i) => (
              <img key={i} src={url} alt={`Image ${i}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

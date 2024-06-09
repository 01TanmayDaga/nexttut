import path from "path";
import constants from "@/components/lib/constants";
const baseURI = process.env[constants.DATABASE_URL_KEY];

export default async function ProjectsPage() {
  const publications = await (
    await fetch(path.join(baseURI, "api", "project-page-projects?populate=*"))
  ).json();


  const extractedData = publications.data.map((item) => {
    console.log(item.attributes.value);
    const heading = item.attributes.heading?.data?.attributes.heading|| "";
    const description = item.attributes.value[0]?.children[0]?.text || "";

    return { heading, description};
  });

  return (
    <div className="App">
      {extractedData.map((item, index) => (
        <div key={index} className="card">
          <h2>{item.heading}</h2>
          <p>{item.description}</p>
          <div className="images">
           
          </div>
        </div>
      ))}
    </div>
  );
}

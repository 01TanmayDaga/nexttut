const Resources = () => {
  const data = {
    resources_developed_by_the_lab: [
      {
        name: "BioEquipZone",
        description: "Platform for Researchers to access specific instruments",
      },
      {
        name: "Open Data Resources",
        datasets: [
          {
            name: "Single Cell Portal",
            description: "Single-cell datasets",
          },
          {
            name: "Human Cell ATLAS (HCA)",
            description: "Single-cell dataset",
          },
          {
            name: "10X genomics",
            description: "Single-cell datasets",
          },
          {
            name: "Covid-19 Cell ATLAS",
            description: "Single-cell datasets for Covid-19",
          },
          {
            name: "Aging ATLAS",
            description:
              "Multi omics (also single cell) data for aging-related research",
          },
          {
            name: "cBioPortal",
            description: "Cancer genomics datasets",
          },
          {
            name: "Mix-seq Data",
            description:
              "Cancer transcriptome data from cell-lines treated with different drugs",
          },
          {
            name: "Figshare",
            description: "Different types of open access datasets",
          },
          {
            name: "SpatialDB",
            description:
              "Public database on spatial gene expression profiles in tissues",
          },
        ],
      },
    ],
    python_libraries: [
      {
        name: "UMAP",
        description: "Non-linear dimension reduction (for single-cell data)",
      },
      {
        name: "Adobo",
        description: "Single-cell RNA sequencing data analysis",
      },
      {
        name: "SCVI",
        description: "Probabilistic modeling of single-cell omics data",
      },
      {
        name: "Squidpy",
        description: "Spatial Single Cell Analysis in Python",
      },
    ],
    r_packages: [
      {
        name: "UMAP",
        description: "Non-linear dimension reduction (for single-cell data)",
      },
      {
        name: "Splatter",
        description: "R package to simulate scRNA-seq data",
      },
    ],
    important_tools: [
      {
        name: "CellProfiler",
        description: "Cell image analysis software",
      },
      {
        name: "Awesome Multi-omics",
        description: "List of available multi-omics tools",
      },
      {
        name: "Awesome Single-Cell",
        description: "List of available single-cell tools",
      },
      {
        name: "DeepImpute",
        description: "Deep learning based scRNA-seq imputation method",
      },
      {
        name: "Granatum",
        description: "GUI based scRNA-seq analysis pipeline",
      },
      {
        name: "scRNA",
        description:
          "Catalogue of software packages designed for the analysis of scRNA-seq data",
      },
      {
        name: "CellRank",
        description:
          "Toolkit to uncover cellular dynamics based on Markov state modeling of single-cell data",
      },
      {
        name: "BABEL",
        description:
          "Deep learning model written in Python designed to translate between multiple single cell modalities",
      },
      {
        name: "SPOTlight",
        description:
          "Deconvolution of mixtures of cells from a single-cell reference",
      },
    ],
  };

  return (
    <>

      <div className="container mx-auto px-4 py-8 bg-skyblue">
        <h1 className="text-3xl font-semibold mb-8"><i class="fa-solid fa-flask text-2xl"></i> Lab Resources</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {data.resources_developed_by_the_lab.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-2">{resource.name}</h2>
              {resource.description && <li>{resource.description}</li>}
              {resource.datasets && (
                <ul className="list-disc pl-5">
                  {resource.datasets.map((dataset, index) => (
                    <li key={index} className="mb-1">
                      {dataset.name}: {dataset.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2"><i class="fa-brands fa-python text-2xl text-yellow-500"></i>      Python Libraries</h2>
            <ul className="list-disc pl-5">
              {data.python_libraries.map((library, index) => (
                <li key={index} className="mb-1">
                  {library.name}: {library.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2"><i class="fa-brands fa-r-project text-2xl text-red-500"></i>       R Packages</h2>
            <ul className="list-disc pl-5">
              {data.r_packages.map((name, index) => (
                <li key={index} className="mb-1">
                  {name.name}: {name.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2">Important Tools</h2>
            <ul className="list-disc pl-5">
              {data.important_tools.map((tool, index) => (
                <li key={index} className="mb-1">
                  {tool.name}: {tool.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;

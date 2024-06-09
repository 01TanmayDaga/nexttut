
const PublicationList = () => {

  const data = {
    "2022": [
      "Gupta A, Parveen A, Kumar A, Yadav P*. Advancement in Deep Learning Methods for Diagnosis and Prognosis of Cervical Cancer. Current Genomics (accepted)."
    ],
    "2019-21": [
      "Mathur P, Goyal P, Verma G, Yadav P*. Entropy based analysis of SARS-CoV-2 spread  in India using informative subtype markers. Sci Rep. 2021 Aug 5;11(1):15972. doi: 10.1038/s41598-021-95247-5. PMID: 34354142, PMCID: PMC8342543",
      "Rangrez AY, Kilian L, Stiebeling K, Dittmann S, Yadav P, Schulze-Bahr E, Frey N, Frank D. Data on the role of cardiac α-actin (ACTC1) gene mutations on SRF-signaling. Data Brief. 2020 Feb;28:105071. doi: 10.1016/j.dib.2019.105071. eCollection 2020 Feb. PubMed PMID: 31921954; PubMed Central PMCID: PMC6950782",
      "Parveen A, Mustafa S, Yadav P, Kumar A. Applications of machine learning in miRNA discovery and target prediction. Current Genomics. 2019;8:20. doi: 10.2174/1389202921666200106111813.",
      "Frank D, Yusuf Rangrez A, Friedrich C, Dittmann S, Stallmeyer B, Yadav P, Bernt A, Schulze-Bahr E, Borlepawar A, Zimmermann WH, Peischard S, Seebohm G, Linke WA, Baba HA, Krüger M, Unger A, Usinger P, Frey N, Schulze-Bahr E. Cardiac α-Actin (ACTC1) Gene Mutation Causes Atrial-Septal Defects Associated With Late-Onset Dilated Cardiomyopathy. Circ Genom Precis Med. 2019 Aug;12(8):e002491. doi: 10.1161/CIRCGEN.119.002491. Epub 2019 Aug 20. PubMed PMID: 31430208.",
      "Chattopadhyay S, Thomsen H, Yadav P, da Silva Filho MI, Weinhold N, Nöthen MM, Hoffman P, Bertsch U, Huhn S, Morgan GJ, Goldschmidt H, Houlston R, Hemminki K, Försti A. Genome-wide interaction and pathway-based identification of key regulators in multiple myeloma. Commun Biol. 2019;2:89. doi: 10.1038/s42003-019-0329-2. eCollection 2019. PubMed PMID: 30854481; PubMed Central PMCID: PMC6399257."
    ],
    "2016-18": [
      "Yadav P*, Merz M, Mai EK, Försti A, Jauch A, Goldschmidt H, Hemminki K. Cytogenetic aberrations in multiple myeloma are associated with shifts in serum immunoglobulin isotypes distribution and levels. Haematologica. 2018 Apr;103(4):e162-e164. doi: 10.3324/haematol.2017.184226. Epub 2018 Feb 1. PubMed PMID: 29419430; PubMed Central PMCID: PMC5865437.",
      "Yadav P, Ellinghaus D, Rémy G, Freitag-Wolf S, Cesaro A, Degenhardt F, Boucher G, Delacre M, Peyrin-Biroulet L, Pichavant M, Rioux JD, Gosset P, Franke A, Schumm LP, Krawczak M, Chamaillard M, Dempfle A, Andersen V. Genetic Factors Interact With Tobacco Smoke to Modify Risk for Inflammatory Bowel Disease in Humans and Mice.Gastroenterology. 2017 Aug;153(2):550-565. doi: 10.1053/j.gastro.2017.05.010. Epub 2017 May 12. PubMed PMID: 28506689; PubMed Central PMCID: PMC5526723.",
      "Yadav P (2016). Improved case-only approch to study genome-wide gene-environment interaction. Italian Statistical Society Meeting [Conference proceeding]."
    ],
    "2013-15": [
      "Yadav P, Freitag-Wolf S, Lieb W, Dempfle A, Krawczak M. Allowing for population stratification in case-only studies of gene-environment interaction, using genomic control. Hum Genet. 2015 Oct;134(10):1117-25. doi: 10.1007/s00439-015-1593-y. Epub 2015 Aug 22. PubMed PMID: 26297539.",
      "Yadav P, , Freitag-Wolf S, Lieb W, Krawczak M. The role of linkage disequilibrium in case-only studies of gene-environment interactions. Hum Genet. 2015 Jan;134(1):89-96. doi: 10.1007/s00439-014-1497-2. Epub 2014 Oct 11. PubMed PMID: 25304818.",
      "Yadav P, Freitag-Wolf S, Krawczak M (2013). Exploiting linkage disequilibrium to detect G×E interactions in case-only studies. Human Heredity 76:86–113"
    ]
  }
  
  return (
    <div className="container mx-auto py-8">
      {Object.entries(data).map(([heading, descriptions]) => (
        <div key={heading} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">{heading}</h2>
          <ul className="list-disc pl-6">
            {descriptions.map((description, index) => (
              <li key={index} className="mb-2 text-gray-800">{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PublicationList;
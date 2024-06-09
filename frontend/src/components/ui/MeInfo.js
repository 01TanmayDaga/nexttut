import Image from "next/image";

const MeInfo = async () => {
  const academicRecords = [
    "PhD, Statistical Genetics, University of Kiel, Germany (2015)",
    "MSc, Life Science Informatics, University of Bonn, Germany (2012)",
    "Bachelor of Engineering, Biotechnology, Panjab University, India (2009)",
    "Scientist, University of Kiel, Germany (Oct 2015 – Sept 2016)",
    "Research Assistant, Helmholtz Research Center, Munich, Germany (Apr 2012 – Nov 2012)",
  ];
  const professionalCareer = [
    "Assistant Professor, Indian Institute of Technology, Jodhpur (Jun 2019­ – present)",
    "Senior Data Scientist, Reliance Jio Infocomm Limited, Hyderabad, India (Jan 2019 ­­– Jun 2019)",
    "Research Scientist, Corteva Agriscience, Hyderabad, India (Aug 2018 – Dec 2018)",
    "Scientist, German Cancer Research Center (DKFZ), Heidelberg, Germany (Nov 2016 – July 2018)",
  ];

  const awardsHonours = [
    "Invited Editor, Human and Medical Genomics, Frontiers in Genetics (2021)",
    "Returning Expert Award, Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ; 2019)",
    "DST INSPIRE Faculty Award (DST/INSPIRE/04/2018/00109; 2018 declined)",
    "Invited Speaker, 48th Scientific Meeting, Italian Statistical Society, Salerno, Italy (2016)",
    "Deutsche Krebshilfe Postdoctoral Fellowship (2016 -2018)",
    "German Research Foundation Postdoctoral Fellowship (2015-2016)",
    "Visiting scientist, University of Liege, Belgium (2015)",
    "Supervised RISE scholar, German Academic Exchange Service (DAAD, 2014)",
    "Undergraduate Scholarship, Panjab University, India (2005-2009)",
    "2nd Prize Academics (Class 12), GMSS School Sector-19C, Chandigarh (2005)",
  ];

  return (
    <section className="flex md:flex-row justify-between px-6  max-md:flex-col-reverse">
      <div className="flex flex-col w-full">
        <article
          className="mt-8 inline-block bg-white p-2 shadow-2xl max-w-3xl w-full"
          data-aos="fade-right"
        >
          <h2 className="my-2 text-2xl mx-1 border-b-4 border-b-blue-300 pb-3">
            Academic Records
          </h2>
          <ul className="list-none space-y-2 text-lg mx-2">
            {academicRecords.map((ele) => {
              return (
                <li
                  key={ele.id}
                  dangerouslySetInnerHTML={{
                    __html: ele,
                  }}
                  className="before:fas before:fa-heart"
                ></li>
              );
            })}
          </ul>
        </article>

        <article
          className="mt-8 inline-block bg-white p-2 shadow-2xl max-w-3xl w-full"
          data-aos="fade-left"
        >
          <h2 className="my-2 text-2xl mx-1 border-b-4 border-b-blue-300 pb-3">
            Professional Career
          </h2>
          <ul className="list-none space-y-2 text-lg mx-2">
            {professionalCareer.map((ele) => {
              return (
                <li
                  key={ele.id}
                  dangerouslySetInnerHTML={{
                    __html: ele,
                  }}
                ></li>
              );
            })}
          </ul>
        </article>

        <article
          className="mt-8 inline-block bg-white p-2 shadow-2xl max-w-3xl w-full mb-8"
          data-aos="fade-right"
        >
          <h2 className="my-2 text-2xl mx-1 border-b-4 border-b-blue-300 pb-3">
            Awards and Honours
          </h2>
          <ul className="list-none space-y-2 text-lg mx-2">
            {awardsHonours.map((ele) => {
              return (
                <li
                  key={ele.id}
                  dangerouslySetInnerHTML={{
                    __html: ele,
                  }}
                ></li>
              );
            })}
          </ul>
        </article>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col justify-center gap-4">
              <div className="relative h-8 w-8">
                <Image src="/orcid.png" fill={true} objectFit="stretch" />
              </div>
              <div className="relative h-8 w-8">
                <Image src="/linkdein.png" fill={true} objectFit="stretch" />
              </div>
              <div className="relative h-8 w-16">
                <Image src="/scopus.png" fill={true} objectFit="stretch" />
              </div>
            </div>
            <div className="h-[250px] w-[200px] border border-blue-200 self-center"></div>
          </div>

          <h3 className="text-center text-2xl mt-2 font-semibold font-sans">
            Dr Pankaj Yadav
          </h3>
          <p className="text-center">Assistant Professor</p>
          <p className="text-center">
            {" "}
            BioScience and BioEngineering Department
          </p>
          <p className="text-center">
            Indian Institute of Technology, Jodhpur, India
          </p>
          <button className="bg-transparent outline-none border border-blue-200 p-3 rounded-lg hover:bg-sky-300 transition-colors duration-300">
            Download CV
        </button>
        </div>

       
      </div>
    </section>
  );
};
export default MeInfo;

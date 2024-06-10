import style from "@/components/HomePage/workExperience.module.css";
const WorkExperience = () => {
  return (
    <section className={`container px-4 xl:px-10 m-auto ${style.container}`}>
      <div className={`flex justify-end ${style.header}`}>
        <h2>Work</h2>
      </div>
      <div className={`w-full flex justify-between ${style.item_container}`}>
        <div className={`${style.first_column} flex flex-col`}>
          2022 -<p>2+ years</p>
        </div>
        <p>Indus net technologies</p>
        <p>Software Engineer | Node.js, Express.js, next.js, React.js</p>
      </div>
      <div className={`flex justify-end `}>
        <div className={`flex flex-col ${style.bottom}`}>
          <p>Work experience</p>
          <p className={`${style.highlight}`}>
            <i>2+ years</i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

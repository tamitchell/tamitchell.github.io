import { backEnd, dataBases, design, frontEnd, methodologies, softSkills } from "../data/text";
import CustomCollapsible from "./CustomCollapsible";
import SectionTitle from "./SectionTitle";

export default function Skills(): JSX.Element {

  const skillCategories = [
    { title: "Front End", content: frontEnd, id: 1 },
    { title: "Back End", content: backEnd, id: 2 },
    { title: "Databases", content: dataBases, id: 3 },
    { title: "Methodologies", content: methodologies, id: 4 },
    { title: "Design", content: design, id: 5 },
    { title: "Soft Skills", content: softSkills, id: 6 },
  ];


    return (
  <div className="w-full p-6">
      <SectionTitle title="Skills" />

      {/* Mapping over skill categories to render collapsibles */}
      <div className="skill-list-container space-y-4">
        {skillCategories.map((category, index) => (
          <div key={category.id} className="animate-fadeUp delay-100">
            <CustomCollapsible
              className="subtle-collapsible"
              title={category.title}
              content={category.content}
              id={category.id}
            />
          </div>
        ))}
      </div>
    </div>
      );
}
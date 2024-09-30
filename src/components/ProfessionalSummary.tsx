import { summaryData } from "../data/text";
import FadeUp from "./FadeUp/FadeUp";
import SectionTitle from "./SectionTitle";

export default function ProfessionalSummary(): JSX.Element {
    return   <FadeUp cascade className="w-full p-4">
      <SectionTitle title="About Me" />
    <section>
      <p>{summaryData.paragraph1}</p>
      <p>{summaryData.paragraph2}</p>
    </section>
  </FadeUp>
}
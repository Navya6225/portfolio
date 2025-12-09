import ParaWrapper from "../layout/ParaWrapper.jsx";
import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function About({ about }) {
  return (
    <SectionWrapper id="about" title="About">
      {about.map((para, idx) => (
        <ParaWrapper key={idx} parts={para.parts} />
      ))}
    </SectionWrapper>
  );
}

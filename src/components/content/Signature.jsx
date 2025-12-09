import ParaWrapper from "../layout/ParaWrapper.jsx";
import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function Signature({ signature }) {
  return (
    <SectionWrapper id="signature" title="">
      {signature.map((para, idx) => (
        <ParaWrapper key={idx} parts={para.parts} />
      ))}
    </SectionWrapper>
  );
}

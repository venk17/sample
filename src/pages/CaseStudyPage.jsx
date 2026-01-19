import CaseStudiesHero from "../components/CaseStudy/CaseStudiesHero";
import CaseStudyShowcase from "../components/CaseStudy/CaseStudyShowcase";
import CaseStudiesLoadMoreGrid from "../components/CaseStudy/CaseStudiesLoadMoreGrid";
import { caseStudyCards ,caseStudiesGridData} from "../data/caseStudyCards";


const CaseStudies = () => {
  return (
    <main>
      <CaseStudiesHero />

      {/* Big image showcase */}
      <CaseStudyShowcase data={caseStudyCards} />

      {/* Grid with View More */}
      <CaseStudiesLoadMoreGrid data={caseStudiesGridData} />
    </main>
  );
};

export default CaseStudies;

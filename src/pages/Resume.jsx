import { FrameWrapper } from '../components/ui/frameWrapper';

function AboutPage() {
  const resumeLink =
    'https://docs.google.com/document/d/e/2PACX-1vS71dChpXsHghcLFp8WFo1eW7ypMYzmYmYmj0YN0lji_KY-CHItRViOAlvuATBjY1dWKSxNTXpuCIZ4/pub?embedded=true';
  return (
    <div className="">
      {/* Google Docs iFrame :D */}
      <FrameWrapper html={resumeLink} />
    </div>
  );
}

export default AboutPage;

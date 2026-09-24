import { ArrowUpRight } from "lucide-react";
const resumeLink =
  "https://docs.google.com/document/d/e/2PACX-1vS71dChpXsHghcLFp8WFo1eW7ypMYzmYmYmj0YN0lji_KY-CHItRViOAlvuATBjY1dWKSxNTXpuCIZ4/pub";
export default function Resume() {
  return (
    <section className="resume-page page-width">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Experience & background</p>
          <h1>My résumé.</h1>
        </div>
        <a
          className="text-link"
          href={resumeLink}
          target="_blank"
          rel="noreferrer"
        >
          Open résumé in a new tab <ArrowUpRight size={17} />
        </a>
      </div>
      <iframe title="Alain Núñez résumé" src={`${resumeLink}?embedded=true`} />
      <p className="field-hint">
        If the document doesn’t load, use the link above to view it directly.
      </p>
    </section>
  );
}

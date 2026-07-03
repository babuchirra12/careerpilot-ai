"use client";

import { useMemo, useState } from "react";
import ResumeList from "../../../components/dashboard/ResumeList";
import ResumePreview from "../../../components/dashboard/ResumePreview";
import ExportModal from "../../../components/dashboard/ExportModal";

const resumeModels = [
  {
    id: "product-manager",
    name: "Product Manager Resume",
    title: "Product Manager",
    summary: "Product leader focused on AI-driven platforms and cross-functional delivery.",
    skills: ["Product Strategy", "AI", "Roadmapping", "Stakeholder Management"],
    experience: [
      {
        id: "pm-1",
        company: "Lumina Labs",
        role: "Senior Product Manager",
        dates: "2022 - Present",
        description: "Led AI platform features and improved matching accuracy by 23%.",
      },
      {
        id: "pm-2",
        company: "Nexa Insights",
        role: "Product Manager",
        dates: "2020 - 2022",
        description: "Owned roadmap delivery for analytics products used by enterprise teams.",
      },
    ],
  },
  {
    id: "data-scientist",
    name: "Data Scientist Resume",
    title: "Data Scientist",
    summary: "Analytical data scientist specializing in modeling, experimentation, and scalable ML solutions.",
    skills: ["Machine Learning", "Python", "Statistics", "Data Visualization"],
    experience: [
      {
        id: "ds-1",
        company: "Quantive",
        role: "Data Scientist",
        dates: "2023 - Present",
        description: "Built recommendation pipelines and performance dashboards for customer insights.",
      },
      {
        id: "ds-2",
        company: "OptiMetrics",
        role: "Junior Data Scientist",
        dates: "2021 - 2023",
        description: "Developed forecasting models to improve operations planning by 18%.",
      },
    ],
  },
];

type ResumeTemplate = "classic" | "modern" | "creative" | "professional" | "minimal" | "executive";

const resumeTemplates: Array<{ id: ResumeTemplate; name: string }> = [
  { id: "classic", name: "Classic" },
  { id: "modern", name: "Modern" },
  { id: "creative", name: "Creative" },
  { id: "professional", name: "Professional" },
  { id: "minimal", name: "Minimal" },
  { id: "executive", name: "Executive" },
];

export default function ResumePage() {
  const [selectedId, setSelectedId] = useState(resumeModels[0].id);
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>("classic");
  const [showExport, setShowExport] = useState(false);
  const selectedResume = useMemo(
    () => resumeModels.find((model) => model.id === selectedId) || resumeModels[0],
    [selectedId]
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Resume center</h1>
              <p className="text-slate-300">Select a resume model, preview it, and download it as PDF or DOCX.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {resumeModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedId(model.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedId === model.id ? "bg-sky-500 text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                  }`}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold">Choose a design</h2>
                <p className="text-slate-400">Pick the resume layout you want before exporting.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {resumeTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selectedTemplate === template.id ? "bg-sky-500 text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    {template.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            <ResumePreview resume={selectedResume} template={selectedTemplate} />
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Export</h3>
              <p className="mt-2 text-slate-400">Download the selected resume in the format you need.</p>
              <div className="mt-5 grid gap-3">
                <button
                  onClick={() => setShowExport(true)}
                  className="rounded-full bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400"
                >
                  Download PDF / DOCX
                </button>
                <a
                  href={`/resume/edit/${selectedResume.id}`}
                  className="rounded-full bg-slate-950/90 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Customize this resume
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Saved resumes</h3>
              <ResumeList
                resumes={resumeModels.map((model) => ({ id: model.id, name: model.name, updated: "just now" }))}
                onDownload={(item) => {
                  setSelectedId(item.id);
                  setShowExport(true);
                }}
              />
            </div>
          </div>
        </section>
      </div>
      {showExport ? (
        <ExportModal
          id={selectedResume.id}
          name={selectedResume.name}
          title={selectedResume.title}
          summary={selectedResume.summary}
          skills={selectedResume.skills}
          experience={selectedResume.experience}
          template={selectedTemplate}
          onClose={() => setShowExport(false)}
        />
      ) : null}
    </main>
  );
}

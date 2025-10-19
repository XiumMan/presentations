// Hand Hygiene Audit IPC Week 2025 Data
export const presentation1Data = {
  title: "Hand Hygiene Audit IPC Week 2025",
  slides: [
    {
      id: 1,
      type: "title",
      title: "HAND HYGIENE COMPETITION",
      subtitle: "INFECTION PREVENTION WEEK 2025 – 19TH TO 25TH OCTOBER",
      theme: {
        background: "linear-gradient(135deg, #1A5F5D 0%, #006666 100%)",
        textColor: "#FFFFFF",
        accentColor: "#006666"
      }
    },
    {
      id: 2,
      type: "content",
      title: "HAND HYGIENE AUDIT",
      content: [
        {
          type: "paragraph",
          text: "Hand hygiene audit was conducted from 1st to 17th October 2025 by trained auditors from different departments."
        },
        {
          type: "heading",
          text: "Audit Methodology:"
        },
        {
          type: "bullet",
          items: [
            "30 hand hygiene opportunities were observed per department.",
            "Observations of clinical and non-clinical staff were carried out discreetly during routine clinical care.",
            "Hand hygiene was assessed based on WHO 5 moments and 7 steps of hand hygiene technique.",
            "Compliance rate was calculated using: Compliance (%) = Actions / Opportunities × 100"
          ]
        }
      ]
    },
    {
      id: 3,
      type: "chart",
      title: "Hand Hygiene Challenge Audit Data Analysis",
      chartData: {
        type: "bar3d",
        data: [
          { department: "GYNAE WARD / LABOUR ROOM", compliance: 53.3 },
          { department: "REPRODUCTIVE HEALTH CENTER", compliance: 46.6 },
          { department: "OUTPATIENT DEPARTMENT", compliance: 60 },
          { department: "MALDIVES BLOOD SERVICES", compliance: 36.6 },
          { department: "DMRC", compliance: 33.3 },
          { department: "DIALYSIS UNIT", compliance: 50 },
          { department: "EMERGENCY ROOM", compliance: 43.3 },
          { department: "PRIVATE WARD", compliance: 43.3 },
          { department: "INTENSIVE CARE UNIT", compliance: 76.6 },
          { department: "NEONATAL INTENSIVE CARE UNIT", compliance: 66.6 },
          { department: "PUBLIC HEALTH UNIT", compliance: 20 },
          { department: "DENTAL DEPARTMENT", compliance: 40 },
          { department: "OPHTHALMOLOGY DEPARTMENT", compliance: 50 },
          { department: "OPERATION THEATER", compliance: 46.6 },
          { department: "RADIOLOGY DEPARTMENT", compliance: 40 },
          { department: "ONCOLOGY DEPARTMENT", compliance: 70 },
          { department: "MALDIVES AIRPORT CLINIC", compliance: 26.6 },
          { department: "LABORATORY SERVICES", compliance: 46.6 },
          { department: "SURGICAL WARD", compliance: 40 },
          { department: "MEDICAL WARD", compliance: 43.3 },
          { department: "PEDIATRIC WARD", compliance: 33.3 }
        ]
      }
    },
    {
      id: 4,
      type: "winner",
      title: "WINNER OF HAND HYGIENE COMPETITION",
      winner: "INTENSIVE CARE UNIT (ICU)",
      celebration: true
    }
  ]
};

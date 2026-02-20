import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  BorderStyle,
  TabStopType,
  TabStopPosition,
} from 'docx'
import { CV } from '../constants'
import type { CVData } from '../data/cvData'

// Match PDF styling: sizes in half-points (10pt=20, 11pt=22, 9pt=18, 22pt=44)
const SIZE_NAME = 44
const SIZE_TITLE = 22
const SIZE_HEADING = 22
const SIZE_BODY = 20
const SIZE_SMALL = 18
const GRAY = '6E6E6E' // PDF gray 110/255
const BORDER_GRAY = 'C8C8C8' // PDF divider 200
const SECTION_SPACING = 360 // Space before each section header (twips, ~18pt)

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export async function generateCVDoc(cvData: CVData, langCode: 'EN' | 'ES'): Promise<void> {
  const filename = `Alexis_Moreno_CV_(${langCode}).docx`

  const contact = [
    CV.personal_info.phone,
    CV.personal_info.email,
    CV.personal_info.website.replace('https://', ''),
    CV.personal_info.location,
  ].join('  •  ')

  const children: Paragraph[] = [
    new Paragraph({
      children: [
        new TextRun({
          text: CV.personal_info.name.toUpperCase(),
          bold: true,
          size: SIZE_NAME,
        }),
      ],
      spacing: { after: 100 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: cvData.personal_info.title,
          color: GRAY,
          size: SIZE_TITLE,
        }),
      ],
      spacing: { after: 100 },
    }),
    new Paragraph({
      children: [new TextRun({ text: contact, size: SIZE_SMALL })],
      spacing: { after: 200 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: cvData.sections.profile.toUpperCase(),
          bold: true,
          size: SIZE_HEADING,
        }),
      ],
      border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_GRAY } },
      spacing: { before: SECTION_SPACING, after: 100, beforeAutoSpacing: false, afterAutoSpacing: false },
    }),
    new Paragraph({
      children: [new TextRun({ text: cvData.profile.summary, size: SIZE_BODY })],
      spacing: { after: 200 },
    }),
    new Paragraph({ text: '', spacing: { after: SECTION_SPACING } }),
    new Paragraph({
      children: [
        new TextRun({
          text: cvData.sections.experience.toUpperCase(),
          bold: true,
          size: SIZE_HEADING,
        }),
      ],
      border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_GRAY } },
      spacing: { before: SECTION_SPACING, after: 100, beforeAutoSpacing: false, afterAutoSpacing: false },
    }),
  ]

  for (const exp of cvData.experience) {
    children.push(
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
        children: [
          new TextRun({ text: `${exp.role} — ${exp.company}`, bold: true, size: SIZE_BODY }),
          new TextRun({ text: '\t' }),
          new TextRun({ text: exp.period, color: GRAY, size: SIZE_BODY }),
        ],
        spacing: { after: 60 },
      })
    )
    for (const resp of exp.responsibilities) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: `• ${resp}`, size: SIZE_BODY })],
          indent: { left: 360 },
          spacing: { after: 40 },
        })
      )
    }
    children.push(new Paragraph({ text: '', spacing: { after: SECTION_SPACING } }))
  }

  if (cvData.startup_experience?.length) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: cvData.sections.startupExperience.toUpperCase(),
            bold: true,
            size: SIZE_HEADING,
          }),
        ],
        border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_GRAY } },
        spacing: { before: SECTION_SPACING, after: 100, beforeAutoSpacing: false, afterAutoSpacing: false },
      })
    )
    for (const exp of cvData.startup_experience) {
      children.push(
        new Paragraph({
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          children: [
            new TextRun({ text: `${exp.role} — ${exp.company}`, bold: true, size: SIZE_BODY }),
            new TextRun({ text: '\t' }),
            new TextRun({ text: exp.period, color: GRAY, size: SIZE_BODY }),
          ],
          spacing: { after: 60 },
        })
      )
      for (const resp of exp.responsibilities) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: `• ${resp}`, size: SIZE_BODY })],
            indent: { left: 360 },
            spacing: { after: 40 },
          })
        )
      }
      children.push(new Paragraph({ text: '', spacing: { after: SECTION_SPACING } }))
    }
  }

  const skills = CV.technical_skills.map((s) => s.name).join('  •  ')
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: cvData.sections.technicalSkills.toUpperCase(),
          bold: true,
          size: SIZE_HEADING,
        }),
      ],
      border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_GRAY } },
      spacing: { before: SECTION_SPACING, after: 100, beforeAutoSpacing: false, afterAutoSpacing: false },
    }),
    new Paragraph({
      children: [new TextRun({ text: skills, size: SIZE_BODY })],
      spacing: { after: 200 },
    }),
    new Paragraph({ text: '', spacing: { after: SECTION_SPACING } }),
    new Paragraph({
      children: [
        new TextRun({
          text: cvData.sections.education.toUpperCase(),
          bold: true,
          size: SIZE_HEADING,
        }),
      ],
      border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_GRAY } },
      spacing: { before: SECTION_SPACING, after: 100, beforeAutoSpacing: false, afterAutoSpacing: false },
    }),
    new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
      children: [
        new TextRun({ text: cvData.education.degree, bold: true, size: SIZE_BODY }),
        new TextRun({ text: '\t' }),
        new TextRun({ text: cvData.education.period, color: GRAY, size: SIZE_BODY }),
      ],
      spacing: { after: 60 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `${cvData.education.institution} — ${cvData.education.location}`,
          size: SIZE_BODY,
        }),
      ],
      spacing: { after: 200 },
    }),
    new Paragraph({ text: '', spacing: { after: SECTION_SPACING } }),
    new Paragraph({
      children: [
        new TextRun({
          text: cvData.sections.references.toUpperCase(),
          bold: true,
          size: SIZE_HEADING,
        }),
      ],
      border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_GRAY } },
      spacing: { before: SECTION_SPACING, after: 100, beforeAutoSpacing: false, afterAutoSpacing: false },
    })
  )

  for (const ref of cvData.references) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${ref.name} — ${ref.role} @ ${ref.company}`,
            size: SIZE_SMALL,
          }),
        ],
        spacing: { after: 60 },
      })
    )
  }

  const doc = new Document({
    sections: [
      {
        children,
      },
    ],
  })

  const blob = await Packer.toBlob(doc)
  downloadBlob(blob, filename)
}

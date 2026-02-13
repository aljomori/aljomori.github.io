import { jsPDF } from 'jspdf'
import { CV } from '../constants'
import type { CVData } from '../data/cvData'

const MARGIN = 20
const PAGE_WIDTH = 210
const PAGE_HEIGHT = 297
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

const LINE_HEIGHT = 6
const SECTION_SPACING = 12

const FONT_SIZE_NAME = 22
const FONT_SIZE_TITLE = 11
const FONT_SIZE_HEADING = 11
const FONT_SIZE_BODY = 10
const FONT_SIZE_SMALL = 9

const GRAY = 110

function wrapText(doc: jsPDF, text: string, x: number, y: number, maxWidth: number): number {
  const lines = doc.splitTextToSize(text, maxWidth)
  doc.text(lines, x, y)
  return y + lines.length * LINE_HEIGHT
}

function checkPageBreak(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > PAGE_HEIGHT - MARGIN) {
    doc.addPage()
    return MARGIN
  }
  return y
}

function drawSectionHeader(doc: jsPDF, title: string, y: number): number {
  doc.setFontSize(FONT_SIZE_HEADING)
  doc.setFont('helvetica', 'bold')
  doc.text(title.toUpperCase(), MARGIN, y)

  // subtle divider line
  doc.setDrawColor(200)
  doc.line(MARGIN, y + 2, PAGE_WIDTH - MARGIN, y + 2)

  return y + 8
}

export function generateCVPDF(cvData: CVData, langCode: 'EN' | 'ES'): void {
  const filename = `Alexis_Moreno_CV_(${langCode}).pdf`
  const doc = new jsPDF()
  let y = MARGIN

  // ===== HEADER =====
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(FONT_SIZE_NAME)
  doc.text(CV.personal_info.name.toUpperCase(), MARGIN, y)

  y += 8

  doc.setFontSize(FONT_SIZE_TITLE)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(GRAY)
  doc.text(cvData.personal_info.title, MARGIN, y)
  doc.setTextColor(0)
  y += 8

  const contact = [
    CV.personal_info.phone,
    CV.personal_info.email,
    CV.personal_info.website.replace('https://', ''),
    CV.personal_info.location,
  ].join('  •  ')

  doc.setFontSize(FONT_SIZE_SMALL)
  y = wrapText(doc, contact, MARGIN, y, CONTENT_WIDTH)

  y += SECTION_SPACING

  // ===== PROFILE =====
  y = drawSectionHeader(doc, cvData.sections.profile, y)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(FONT_SIZE_BODY)
  y = wrapText(doc, cvData.profile.summary, MARGIN, y, CONTENT_WIDTH)
  y += SECTION_SPACING

  // ===== EXPERIENCE =====
  y = drawSectionHeader(doc, cvData.sections.experience, y)

  for (const exp of cvData.experience) {
    y = checkPageBreak(doc, y, 40)

    // Role + Company (left)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(FONT_SIZE_BODY)
    doc.text(`${exp.role} — ${exp.company}`, MARGIN, y)

    // Period (right aligned)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(GRAY)
    doc.text(exp.period, PAGE_WIDTH - MARGIN, y, { align: 'right' })
    doc.setTextColor(0)

    y += LINE_HEIGHT + 2

    // Responsibilities
    doc.setFontSize(FONT_SIZE_BODY)
    for (const resp of exp.responsibilities) {
      y = checkPageBreak(doc, y, 10)
      y = wrapText(doc, `• ${resp}`, MARGIN + 4, y, CONTENT_WIDTH - 4)
      y += 2
    }

    y += 6
  }

  // ===== STARTUP EXPERIENCE =====
  if (cvData.startup_experience?.length) {
    y = checkPageBreak(doc, y, 40)
    y = drawSectionHeader(doc, cvData.sections.startupExperience, y)
    for (const exp of cvData.startup_experience) {
      y = checkPageBreak(doc, y, 40)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(FONT_SIZE_BODY)
      doc.text(`${exp.role} — ${exp.company}`, MARGIN, y)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(GRAY)
      doc.text(exp.period, PAGE_WIDTH - MARGIN, y, { align: 'right' })
      doc.setTextColor(0)
      y += LINE_HEIGHT + 2
      for (const resp of exp.responsibilities) {
        y = checkPageBreak(doc, y, 10)
        y = wrapText(doc, `• ${resp}`, MARGIN + 4, y, CONTENT_WIDTH - 4)
        y += 2
      }
      y += 6
    }
    y += SECTION_SPACING
  }

  // ===== TECHNICAL SKILLS =====
  y = checkPageBreak(doc, y, 40)
  y = drawSectionHeader(doc, cvData.sections.technicalSkills, y)

  const skills = CV.technical_skills.map((s) => s.name)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(FONT_SIZE_BODY)

  y = wrapText(doc, skills.join('  •  '), MARGIN, y, CONTENT_WIDTH)
  y += SECTION_SPACING

  // ===== EDUCATION =====
  y = checkPageBreak(doc, y, 40)
  y = drawSectionHeader(doc, cvData.sections.education, y)

  const edu = cvData.education

  doc.setFont('helvetica', 'bold')
  doc.text(`${edu.degree}`, MARGIN, y)

  doc.setFont('helvetica', 'normal')
  doc.setTextColor(GRAY)
  doc.text(edu.period, PAGE_WIDTH - MARGIN, y, { align: 'right' })
  doc.setTextColor(0)

  y += LINE_HEIGHT

  y = wrapText(
    doc,
    `${edu.institution} — ${edu.location}`,
    MARGIN,
    y,
    CONTENT_WIDTH
  )

  y += SECTION_SPACING

  // ===== REFERENCES =====
  y = checkPageBreak(doc, y, 40)
  y = drawSectionHeader(doc, cvData.sections.references, y)

  doc.setFontSize(FONT_SIZE_SMALL)
  doc.setFont('helvetica', 'normal')

  for (const ref of cvData.references) {
    y = checkPageBreak(doc, y, 12)
    doc.text(
      `${ref.name} — ${ref.role} @ ${ref.company}`,
      MARGIN,
      y
    )
    y += LINE_HEIGHT
  }

  doc.save(filename)
}

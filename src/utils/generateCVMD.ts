import { CV } from '../constants'
import type { CVData } from '../data/cvData'

function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function generateCVMD(cvData: CVData, langCode: 'EN' | 'ES'): void {
  const filename = `Alexis_Moreno_CV_(${langCode}).md`

  const lines: string[] = [
    `# ${CV.personal_info.name.toUpperCase()}`,
    '',
    cvData.personal_info.title,
    '',
    `${CV.personal_info.phone}  •  ${CV.personal_info.email}  •  ${CV.personal_info.website.replace('https://', '')}  •  ${CV.personal_info.location}`,
    '',
    `## ${cvData.sections.profile}`,
    '',
    cvData.profile.summary,
    '',
    `## ${cvData.sections.experience}`,
    '',
  ]

  for (const exp of cvData.experience) {
    lines.push(`### ${exp.role} — ${exp.company} \`${exp.period}\``)
    lines.push('')
    for (const resp of exp.responsibilities) {
      lines.push(`- ${resp}`)
    }
    lines.push('')
  }

  if (cvData.startup_experience?.length) {
    lines.push(`## ${cvData.sections.startupExperience}`)
    lines.push('')
    for (const exp of cvData.startup_experience) {
      lines.push(`### ${exp.role} — ${exp.company} \`${exp.period}\``)
      lines.push('')
      for (const resp of exp.responsibilities) {
        lines.push(`- ${resp}`)
      }
      lines.push('')
    }
  }

  const skills = CV.technical_skills.map((s) => s.name)
  lines.push(`## ${cvData.sections.technicalSkills}`)
  lines.push('')
  lines.push(skills.join('  •  '))
  lines.push('')
  lines.push(`## ${cvData.sections.education}`)
  lines.push('')
  lines.push(`**${cvData.education.degree}** — ${cvData.education.period}`)
  lines.push('')
  lines.push(`${cvData.education.institution} — ${cvData.education.location}`)
  lines.push('')
  lines.push(`## ${cvData.sections.references}`)
  lines.push('')

  for (const ref of cvData.references) {
    lines.push(`- ${ref.name} — ${ref.role} @ ${ref.company}`)
  }

  const markdown = lines.join('\n')
  downloadFile(markdown, filename, 'text/markdown;charset=utf-8')
}

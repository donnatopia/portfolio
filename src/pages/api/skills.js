import fs from 'fs';
import path from 'path';

export default function getSkills(req, res) {
  const skillsDir = path.join(process.cwd(), `public/assets/skills/${req.query.skillType}`);
  const skills = fs.readdirSync(skillsDir);
  res.status(200).json(skills.map(skill => skill.replace(/.png/, '')));
}
import fs from 'fs';
import path from 'path';

const skillsTypeDir = path.join(process.cwd(), 'public/assets/skills');

export default function getDirectories(req, res) {
  const skillTypes = fs.readdirSync(skillsTypeDir);
  res.status(200).json(skillTypes);
}
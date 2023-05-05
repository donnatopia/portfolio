import backend from './backend.js';
import collab from './collab.js';
import deployment from './deployment.js';
import frontend from './frontend.js';
import languages from './languages.js';
import other from './other.js';
import testing from './testing.js';

const tech = [
  {
    category: 'Languages',
    stack: languages,
  },
  {
    category: 'Frontend',
    stack: frontend,
  },
  {
    category: 'Backend',
    stack: backend,
  },
  {
    category: 'Testing',
    stack: testing,
  },
  {
    category: 'Deployment',
    stack: deployment,
  },
  {
    category: 'Collab',
    stack: collab,
  },
  {
    category: 'Other',
    stack: other,
  },
];

export default tech;
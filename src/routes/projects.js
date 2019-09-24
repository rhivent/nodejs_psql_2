import { Router } from 'express';

const router = Router();

import { createProject, editProject, getProjects, getOneProject, deleteProject } from '../controllers/project.controller';

// /api/projects/
router.post('/',createProject);
router.get('/',getProjects);

// /api/projects/:projectId
router.get('/:id',getOneProject);
router.delete('/:id',deleteProject);
router.put('/:id',editProject);

export default router;
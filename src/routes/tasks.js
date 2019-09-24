import { Router } from 'express';
import '@babel/polyfill';

const router = Router();

import { getTasks, createTask, updateTask, getOneTask, deleteTask, getTasksByProject } from '../controllers/task.controller';
// /api/tasks
router.post('/',createTask);
router.get('/',getTasks);

// /api/tasks/:id
router.get('/:id',getOneTask);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);

// /api/tasks/project/:projectid
router.get('/project/:projectid',getTasksByProject);

export default router;
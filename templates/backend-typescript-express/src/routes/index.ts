import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

router.get('/info', (req: Request, res: Response) => {
  res.json({
    name: '<%= projectName %>',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
});

export default router;


import { Router } from 'express';
import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from '../controllers/eventController';

const router = Router();

const asyncHandler = (fn: Function) => {
    return (req: any, res: any, next: any) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };

router.post('/events', createEvent);
router.get('/events', getEvents);
router.get('/events/:id', asyncHandler(getEventById));
router.put('/events/:id', asyncHandler(updateEvent));
router.delete('/events/:id', asyncHandler(deleteEvent));

export default router;

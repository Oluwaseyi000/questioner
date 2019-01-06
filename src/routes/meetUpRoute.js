import express from 'express';
import controller from '../controller/meetUpController';
import validate from '../helpers/middleware';

const router = express.Router();
const time = (req, res, next) => {
  req.reqTime = Date.now();
  next();
};

router.get('/', time, controller.home);
router.post('/meetups', validate.meetUp, controller.createMeetUps);
router.get('/meetups', validate.checkMeetUpEmpty, controller.allMeetUps);
router.get('/meetups/1/:meetupId', validate.checkMeetUpId, controller.findMeetUpsById);
router.get('/meetups/upcoming', validate.checkMeetUpEmpty, controller.upComingMeetUps);
router.post('/questions', validate.question, controller.questionEntry);
router.patch('/questions/:questionId/upvote', validate.checkQuestionId, controller.upVote);
router.patch('/questions/:questionId/downvote', validate.checkQuestionId, controller.downVote);
router.post('/meetups/:meetupId/rsvps', validate.rsvp, validate.checkMeetUpId, controller.rsvp);

export default router;


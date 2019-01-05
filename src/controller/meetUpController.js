import model from '../model/meetUpModel';

class Controller {
  static home(req, res) {
    return res.status(200).json({
      status: 200,
      data: `Welcome to Questioner ${req.reqTime}`,
    });
  }

  // Create an meetup record.
  static createMeetUps(req, res) {
    const newMeetUp = req.body;
    const result = model.createMeetUp(newMeetUp);
    return res.status(201).json({
      status: 201,
      data: [result],
    });
  }
}
export default Controller;
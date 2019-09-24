"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTasks = getTasks;
exports.createTask = createTask;
exports.updateTask = updateTask;
exports.getOneTask = getOneTask;
exports.deleteTask = deleteTask;
exports.getTasksByProject = getTasksByProject;

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

var _Project = _interopRequireDefault(require("../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTasks(_x, _x2) {
  return _getTasks.apply(this, arguments);
}

function _getTasks() {
  _getTasks = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Tasks["default"].findAll({
              attributes: ['id', 'projectid', 'name', 'done'],
              order: [['id', 'DESC']]
            });

          case 2:
            tasks = _context.sent;
            res.json({
              tasks: tasks
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTasks.apply(this, arguments);
}

function createTask(_x3, _x4) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, done, projectid, newTask;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectid = _req$body.projectid;
            _context2.next = 4;
            return _Tasks["default"].create({
              name: name,
              done: done,
              projectid: projectid
            }, {
              fields: ['name', 'done', 'projectid']
            });

          case 4:
            newTask = _context2.sent;
            res.json({
              message: "New Task created",
              data: newTask
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.json({
              message: 'There are Something wrong !' + _context2.t0,
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _createTask.apply(this, arguments);
}

function updateTask(_x5, _x6) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, projectid, name, done, task, updatedTask;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, projectid = _req$body2.projectid, name = _req$body2.name, done = _req$body2.done;
            _context3.next = 4;
            return _Tasks["default"].findOne({
              attributes: ['name', 'projectid', 'done', 'id'],
              where: {
                id: id
              }
            });

          case 4:
            task = _context3.sent;
            _context3.next = 7;
            return _Tasks["default"].update({
              name: name,
              done: done,
              projectid: projectid
            }, {
              where: {
                id: id
              }
            });

          case 7:
            updatedTask = _context3.sent;
            res.json({
              message: 'Task Updated!',
              updatedTask: updatedTask
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateTask.apply(this, arguments);
}

function getOneTask(_x7, _x8) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Tasks["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'projectid', 'name', 'done']
            });

          case 3:
            task = _context4.sent;
            res.json({
              task: task
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getOneTask.apply(this, arguments);
}

function deleteTask(_x9, _x10) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Tasks["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            res.json({
              message: 'Task deleted !'
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _deleteTask.apply(this, arguments);
}

function getTasksByProject(_x11, _x12) {
  return _getTasksByProject.apply(this, arguments);
}

function _getTasksByProject() {
  _getTasksByProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var projectid, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectid = req.params.projectid;
            _context6.next = 3;
            return _Tasks["default"].findAll({
              attributes: ['id', 'projectid', 'done', 'name'],
              where: {
                projectid: projectid
              }
            });

          case 3:
            tasks = _context6.sent;
            res.json({
              tasks: tasks
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getTasksByProject.apply(this, arguments);
}
var Student = require('../models/student');

var async = require('async');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all students.
exports.student_list = function(req, res) {
    Student.find({}, 'name roll_no ')
     .exec(function (err, list_students) {
       if (err) { return next(err); }
       //Successful, so render
       res.render('student_list', { title: 'Student List', student_list: list_students });
    });
};

// Display detail page for a specific student.
exports.student_detail = function(req, res) {
       res.send('NOT IMPLEMENTED : Student_detail');
};

// Display student create form on GET.
exports.student_create_get = function(req, res) {
    res.render('student_form', { title: 'Create Student'});
};

// Handle student create on POST.
exports.student_create_post = [

    // Validate fields.
    body('name').isLength({ min: 1 }).trim().withMessage('Name must be specified.')
        .isAlphanumeric().withMessage('name has non-alphanumeric characters.'),
    body('roll_no').isLength({ min: 1 }).trim().withMessage('Roll number must be specified.')
        .isAlphanumeric().withMessage('roll_no has non-alphanumeric characters.'),

    // Sanitize fields.
    sanitizeBody('name').trim().escape(),
    sanitizeBody('roll_no').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('student_form', { title: 'Create student', student: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an student object with escaped and trimmed data.
            var student = new Student(
                {
                    name: req.body.name,
                    roll_no: req.body.roll_no
                });
            student.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new student record.
                res.redirect(student.url);
            });
        }
    }
];

// Display student delete form on GET.
exports.student_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: student delete GET');
};

// Handle student delete on POST.
exports.student_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: student delete POST');
};

// Display student update form on GET.
exports.student_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: student update GET');
};

// Handle student update on POST.
exports.student_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: student update POST');
};
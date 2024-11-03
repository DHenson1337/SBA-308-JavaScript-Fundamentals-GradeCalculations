# SBA-308-JavaScript-Fundamentals-GradeCalculations

Goal of this js:
A script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use is provided below.

Pseudo Code:

1) Create the function to accept the inputs:
 
 getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.

 2) If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.  if (CourseInfo.id === AssignmentGroup.course_id;)

3) Filter and Process Assignments Based on Due dates:
For each assignment in AssignmentGroup.assignments, exclude assignments that haven’t yet reached their due date (due_at should be compared to the current date).
For late submissions (where submitted_at is later than due_at), apply a 10% penalty on the score.

4) Calculate Scores

For each LearnerSubmission, calculate the score as a percentage (submission.score / points_possible).
Organize each learner’s scores by assignment ID in the final output format.

5) Calculate Weighted Average

For each learner, calculate the weighted average score. This will involve:
Multiplying each assignment’s score by its points_possible.
Summing these values and dividing by the total points_possible for all assignments.

6) Output Structure

The result should be an array of objects, each containing:
id (learner’s ID),
avg (the weighted average score),
keyed assignments (each assignment_id mapped to the percentage score).
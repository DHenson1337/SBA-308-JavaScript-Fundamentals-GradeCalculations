# SBA-308-JavaScript-Fundamentals-GradeCalculations

Pseudo Code:

1) Take the learner Submissions group and group them
so that the Id only appears once.

Turn learner_id into a unique key and
submissions into an array.
something like this:

learner_id: 125,
    submissions: [
      { assignment_id: 1, submitted_at: "2023-01-25", score: 47 },
      { assignment_id: 2, submitted_at: "2023-02-12", score: 150 },
      { assignment_id: 3, submitted_at: "2023-01-25", score: 400 }

Call it studentData: (Assignment Group)

2) Confirm if an AssignmentGroup does belong to the right course.
create a new variable with that info called:
confirmedGroup (Course Info)

function confirmAssignmentGroup(courseInfo, assignmentGroup) {
  return courseInfo.id === assignmentGroup.course_id;
}

console.log(confirmAssignmentGroup(CourseInfo, AssignmentGroup));
console.log(CourseInfo.id);
console.log(AssignmentGroup.course_id);

3) create a new variable for AssignmentGroup.assignments (so I can have the array)
call the variable homework (LearnerSubmission)


?) Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above
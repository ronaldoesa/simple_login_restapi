const ROLE = {
  TEACHER: 'teacher',
  STUDENT: 'student',
  PARENT: 'parent'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Kyle Korver', role: ROLE.TEACHER },
    { id: 2, name: 'Lebron James', role: ROLE.PARENT },
    { id: 3, name: 'Stephen James', role: ROLE.STUDENT },
    { id: 4, name: 'Sally James', role: ROLE.STUDENT },
    { id: 5, name: 'Jimmmy Crowder', role: ROLE.PARENT },
    { id: 6, name: 'Joe Crowder', role: ROLE.STUDENT },
  ]
}
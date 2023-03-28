export default function getListStudentsIds(students) {
  if (students instanceof Arra) {
    return students.map(student) => student.id);
  }
  return [];
}

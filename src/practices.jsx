export const Practices = () => {
  const student = [5, 6];

  return (
    <>
      {/* <p>{student.length && "No student found "}</p> */}
      {/* 1st */}
      {/*<p>{student.length === 0 && "No student found"}</p>*/}
      {/* 2nd */}
      <p>{!student.length && "No student found"}</p>
      <p> Number of students : {student.length}</p>
    </>
  );
};

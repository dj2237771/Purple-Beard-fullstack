export default function AnimalInfo() {
  const animals = ["horse", "turtle", "elephant", "monkey"];
  return (
    <ul>
      <h1>Many Animals</h1>
      {animals.map((animal, idx) => {
        return <li key={idx}>{animal}</li>;
      })}
    </ul>
  );
}

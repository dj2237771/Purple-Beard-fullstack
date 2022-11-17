import animals from "./data";

export default function AnimalInfo() {
  return (
    <div>
      {animals.forEach((element) => {
        <h3>{element}</h3>;
      })}
    </div>
  );
}

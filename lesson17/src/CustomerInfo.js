import customer from "./customer";

export default function CustomerInfo(name) {
  name = customer;
  return (
    <div>
      <h1> Customer Info</h1>
      My name is {name.first_name} {name.last_name}
    </div>
  );
}

import customer from "./customer";

export default function CustomerInfo(name) {
  name = customer;
  return (
    <div>
      My name is {name.first_name} {name.last_name}
    </div>
  );
}

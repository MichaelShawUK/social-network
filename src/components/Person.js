import { Link } from "react-router-dom";

const Person = ({ person }) => {
  const name = `${person.firstName} ${person.lastName}`;

  return (
    <Link to={`/profile/${person._id}`}>
      <div className="person">
        <img src={person.avatar} alt=""></img>
        <div>{name}</div>
      </div>
    </Link>
  );
};

export default Person;

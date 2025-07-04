function Students(props) {
  return (
    <div className="container p-4 bg-success my-3 rounded">
      <div className="row border p-2">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${props.name}`}
            style={{ maxWidth: "50px" }}
          ></img>
        </div>
        <div className="col-8">
          {props.name}
          <br />
          Coading Expereience {props.experience} years
        </div>
      </div>
    </div>
  );
}

export default Students;

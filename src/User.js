const User = (props) => {
  console.log("User component");
  console.log(props.user);
  return (
    <>
      <div>
        <span> Name: {props.user.Name} </span>
        <span> Email: {props.user.email} </span>
        <span> Password: {props.user.password} </span>
      </div>
    </>
  );
};

export default User;

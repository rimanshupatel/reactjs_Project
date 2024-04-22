export default function Alert(props) {
  return (
    <div className="h-[80px]">
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

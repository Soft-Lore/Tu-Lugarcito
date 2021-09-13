export default function ControlInput({ lbl, plc, cls, type, children, ...rest }) {
  return (
    <div className={"group-input " + cls}>
      <label className="label">{lbl}</label>
      <div className={"control-input input-" + cls}>
        {children}
        <input
          className={"input input-" + cls}
          type={type}
          placeholder={plc}
          {...rest}
        />
      </div>
    </div>
  );
}

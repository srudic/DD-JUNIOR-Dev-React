const Stopwatch = ({ seconds, minutes }) => {
  return (
    <div style={{ textAlign: "center", color: "gray" }}>
      <div style={{ fontSize: "2.5rem" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
};

export default Stopwatch;

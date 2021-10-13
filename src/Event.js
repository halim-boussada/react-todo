function Event() {
  function eventHandler(a) {
    console.log("clicked", a);
  }
  return (
    <div>
      <button onClick={() => eventHandler(" hello")}>click</button>
    </div>
  );
}
export default Event;

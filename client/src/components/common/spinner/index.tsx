
function Spinner({ color = '#ff0d58' }: { color?: string }) {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner-inner">
        <div className="loading-spinner-circle" style={{ backgroundColor: color }}></div>
        <div className="loading-spinner-circle" style={{ backgroundColor: color }}></div>
        <div className="loading-spinner-circle" style={{ backgroundColor: color }}></div>
        <div className="loading-spinner-circle" style={{ backgroundColor: color }}></div>
        <div className="loading-spinner-circle" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}

export default Spinner;
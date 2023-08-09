export default function Footer({ currentTime }) {
  const currentHour = currentTime.getHours();

  return (
    <footer className="timer">
      {currentTime.toLocaleTimeString()}:
      <span className="open">
        {currentHour >= 12 || currentHour < 23 ? "Open!" : "Closed!"}
      </span>
    </footer>
  );
}

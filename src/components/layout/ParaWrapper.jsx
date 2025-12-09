export default function ParaWrapper({ parts }) {
  return (
    <p className="mb-4">
      {parts.map((part, i) =>
        part.bold ? (
          <strong key={i} className="font-semibold text-slate-200">
            {part.text}
          </strong>
        ) : (
          <span key={i}>{part.text}</span> // <-- use curly braces
        )
      )}
    </p>
  );
}

/** Punkt karty usługi; przy `labeled` "Etap: opis" dostaje pogrubioną nazwę etapu. */
export default function StepText({ text, labeled = false }: { text: string; labeled?: boolean }) {
  const i = text.indexOf(": ");
  if (!labeled || i < 0) return <>{text}</>;
  return (
    <span>
      <span className="font-semibold text-brand-text">{text.slice(0, i)}:</span> {text.slice(i + 2)}
    </span>
  );
}

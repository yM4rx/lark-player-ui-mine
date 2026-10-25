interface Props {
  gender: string;
}
export default function Gender({ gender }: Props) {
  return (
    <div>
      {/* Icono */}
      <h3>{gender}</h3>
    </div>
  );
}

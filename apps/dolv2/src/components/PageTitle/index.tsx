export default function PageTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full h-48 bg-gray-800 text-white rounded shadow-lg">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      {description && <p className="m-1 text-lg text-center">{description}</p>}
    </div>
  );
}

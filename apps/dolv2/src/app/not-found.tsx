export default function NotFoundPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[400px]">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-50">
        Oops! 404
      </h1>

      <p className="max-w-[700px] text-gray-500 dark:text-gray-400 my-5">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}

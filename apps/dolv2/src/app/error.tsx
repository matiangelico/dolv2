"use client";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[400px]">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-50">
        Oh no! 500
      </h1>

      <p className="max-w-[700px] text-gray-500 dark:text-gray-400 my-5">
        An error occurred on the server. Please try again later.
      </p>
    </div>
  );
}

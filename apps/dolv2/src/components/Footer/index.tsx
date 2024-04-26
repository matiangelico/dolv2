import packagejson from "package.json";

export default function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-center w-full h-20">
      <p className="text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Dolores v{packagejson.version}
      </p>
    </footer>
  );
}

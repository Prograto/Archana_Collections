import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-luxe flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="display-lg mt-5 max-w-[16ch]">This page has slipped off the shelf.</h1>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="eyebrow mt-8 inline-block bg-primary px-7 py-4 text-primary-foreground">
        Return home
      </Link>
    </div>
  );
}

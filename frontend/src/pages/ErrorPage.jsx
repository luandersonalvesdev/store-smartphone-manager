import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      id="error-page"
    >
      <h1 className="text-5xl mb-10">Oops!</h1>
      <p className="text-xl">
        {'It looks like you got lost but don\'t worry, get back to the route by'}
        <Link
          className="p-1 font-bold hover:bg-green-100
          duration-300 rounded"
          to="/"
        >
          clicking here
        </Link>
      </p>
    </div>
  );
}

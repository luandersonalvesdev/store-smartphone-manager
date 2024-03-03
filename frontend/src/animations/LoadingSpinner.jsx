export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-t-2 border-green-400
        border-opacity-50 h-6 w-6"
      />
    </div>
  );
}

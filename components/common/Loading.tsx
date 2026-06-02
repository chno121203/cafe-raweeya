export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-900 rounded-full animate-spin" />
        <p className="text-amber-900 font-semibold">Loading...</p>
      </div>
    </div>
  );
}

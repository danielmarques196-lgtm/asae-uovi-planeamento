export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-[#111111] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">TL</span>
            </div>
            <span className="text-xl font-bold text-[#111111]">Tecnolareiras</span>
          </a>
        </div>
        {children}
      </div>
    </div>
  );
}

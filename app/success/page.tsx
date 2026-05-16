export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-xl text-center">
        <h1 className="text-5xl font-black mb-6">
          Dziękujemy 🚀
        </h1>

        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Twoja wiadomość została wysłana poprawnie.
          Skontaktujemy się z Tobą możliwie szybko.
        </p>

        <a
          href="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg"
        >
          Powrót do strony
        </a>
      </div>
    </div>
  );
}
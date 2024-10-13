import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <header className="row-start-1 flex justify-center items-center">
        <h1 className="text-4xl sm:text-6xl font-bold">Welcome to Next.js</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        <table className="table-auto border-collapse border border-gray-200 text-sm text-left mt-8">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Feature</th>
              <th className="border border-gray-300 px-4 py-2">Next.js</th>
              <th className="border border-gray-300 px-4 py-2">Remix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Data Fetching
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Static Generation, Server-side Rendering
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Loader Functions
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Routing</td>
              <td className="border border-gray-300 px-4 py-2">
                File-based Routing
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Nested Routes
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">API Routes</td>
              <td className="border border-gray-300 px-4 py-2">
                Built-in API Routes
              </td>
              <td className="border border-gray-300 px-4 py-2">
                No Built-in API Routes
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Styling</td>
              <td className="border border-gray-300 px-4 py-2">
                CSS-in-JS, CSS Modules, Global CSS
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Any CSS Solution
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Deployment</td>
              <td className="border border-gray-300 px-4 py-2">Vercel</td>
              <td className="border border-gray-300 px-4 py-2">Any Platform</td>
            </tr>
          </tbody>
        </table>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

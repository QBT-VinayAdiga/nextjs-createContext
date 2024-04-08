"use client";
import { SecretContext } from "./providers/secretProvider";
import { useContext } from "react";

export default function Home() {
  const { secrets } = useContext(SecretContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="font-semibold">
          <ul className="list-disc">
            {secrets.map((a) => (
              <li key={a.key}>{a.key}-{a.value}</li>
            ))}
          </ul>
        </div>
    </main>
  );
}

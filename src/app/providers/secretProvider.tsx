"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

interface SecretContextType {
  secrets: { key: string; value: string }[];
}

const defaultValue = [
  {
    key: "name",
    value: "batman",
  },
];

export const SecretContext = createContext<SecretContextType>({
  secrets: defaultValue,
});

interface Props {
  children: ReactNode;
}

const SecretsProvider: React.FC<Props> = ({ children }) => {
  const [secrets, setSecrets] =
    useState<{ key: string; value: string }[]>(defaultValue);

  useEffect(() => {
    fetch("./secrets.json").then(res=>res.json()).then((res) => {
      console.log(res);
      setSecrets(res);
    });
  }, []);

  return (
    <SecretContext.Provider value={{ secrets: secrets }}>
      {children}
    </SecretContext.Provider>
  );
};

export default SecretsProvider;

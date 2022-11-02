"use client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren
} from "react";

export const useRQStore = () => ({
  store: useQuery(["store"], () => ({ name: "hello" }), {
    enabled: false,
    initialData: { name: "hello" }
  }).data
});

const Store = createContext<{ name: string } | null>(null);

const client = new QueryClient();

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [name, setName] = useState("hello");
  const store = useMemo(() => ({ name, setName }), []);

  return (
    <Store.Provider value={store}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </Store.Provider>
  );
};

export const useStore = () => {
  const store = useContext(Store);
  if (!store) return;

  return store;
};

import { useQuery } from "@tanstack/react-query";
import { atom, useAtomValue } from "jotai";
import { FichaFiltros, FichaService } from "~/services/FichaService";

const QUERY_KEY = "ficha";

export const filtroAtom = atom({} as FichaFiltros);
export const fichaAtom = atom({} as FichaFiltros);
export const editaModalOpenAtom = atom(false);

export function useFicha() {
  const filtros = useAtomValue(filtroAtom);

  return useQuery({
    queryKey: [QUERY_KEY, filtros],
    queryFn: () => FichaService.findAll(filtros),
  });
}

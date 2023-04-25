import { api } from "./api";

interface ISituacao {
  id: string;
  descricao: string;
}

async function findAll() {
  const res = await api.get("/situacao");
  return res.data as ISituacao[];
}

export const SituacaoService = { findAll };

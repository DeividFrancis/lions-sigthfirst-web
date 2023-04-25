import { z } from "zod";
import { api } from "./api";

export const fichaUpdateSchema = z.object({
  situacao: z
    .object({
      id: z.string(),
    })
    .optional(),
  observacao: z.string().optional(),
  notaOlhoDireito: z.coerce.number().optional(),
  notaOlhoEsquerdo: z.coerce.number().optional(),
});
export type FichaUpdate = z.infer<typeof fichaUpdateSchema>;

const fichaFindSchema = z.object({
  escola: z.string().optional(),
  aluno: z.string().optional(),
  turma: z.string().optional(),
  turno: z.string().optional(),
  comissao: z.string().optional(),
  situacao: z.object({ id: z.string() }).optional(),
  especial: z.coerce.boolean().optional(),
  apresentaProblema: z.boolean().optional(),
  observacao: z.string().optional(),
  exameRealizado: z.coerce.boolean().optional(),
});

export type FichaFiltros = z.infer<typeof fichaFindSchema>;

export interface IFicha {
  id: string;
  escola: string;
  professor: string;
  turma: string;
  turno: string;
  comissao: string;
  aluno: string;
  notaOlhoDireito?: number;
  notaOlhoEsquerdo?: number;
  notaOlhoTotal?: number;
  especial?: boolean;
  observacao?: string;
  apresentaProblema?: boolean;
  exameRealizado?: boolean;
  createdAt: string;
  updatedAt: string;
  situacao: {
    id: string;
    descricao: string;
    cor: string;
  };
}

async function findAll(filtros: FichaFiltros) {
  const res = await api.get("/ficha", {
    params: filtros,
  });

  return res.data.data as IFicha[];
}

async function update(id: string, body: FichaUpdate) {
  const bodyFinal = fichaUpdateSchema.parse(body);
  const res = await api.put(`/ficha/${id}`, bodyFinal);

  return res.data.message as string;
}

async function upload(form: FormData) {
  const res = await api.post("/ficha/upload", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}

export const FichaService = {
  findAll,
  upload,
  update,
};

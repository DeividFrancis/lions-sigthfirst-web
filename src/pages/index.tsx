import { useAtom, useSetAtom } from "jotai";
import { Button } from "~/components/Button";
import { DialogAlterar } from "~/components/DialogAlterar";
import { DialogFiltros } from "~/components/DialogFiltros";
import { Table } from "~/components/Table";
import { editaModalOpenAtom, fichaAtom, useFicha } from "~/queries/ficha-query";

export default function Home() {
  const { data: fichas } = useFicha();
  const [ficha, setFicha] = useAtom(fichaAtom);
  const setOpenEditar = useSetAtom(editaModalOpenAtom);

  console.log("fichas", fichas);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button className="mr-8">Importar dados</Button>
        <DialogFiltros />
        <DialogAlterar />
      </div>
      <div className="relative overflow-x-auto mt-10">
        <Table>
          <Table.Head
            className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400`}
          >
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Aluno</Table.HeaderCell>
              <Table.HeaderCell>Escola</Table.HeaderCell>
              <Table.HeaderCell>Olho Esq.</Table.HeaderCell>
              <Table.HeaderCell>Olho Dir.</Table.HeaderCell>
              <Table.HeaderCell>Olho Total</Table.HeaderCell>
              <Table.HeaderCell>Situação</Table.HeaderCell>
              <Table.HeaderCell>Acões</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {fichas?.map((ficha) => (
              <Table.Row
                key={ficha.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <Table.HeaderCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {ficha.id}
                </Table.HeaderCell>
                <Table.HeaderCell>{ficha.aluno}</Table.HeaderCell>
                <Table.HeaderCell>{ficha.escola}</Table.HeaderCell>
                <Table.HeaderCell>{ficha.notaOlhoEsquerdo}</Table.HeaderCell>
                <Table.HeaderCell>{ficha.notaOlhoDireito}</Table.HeaderCell>
                <Table.HeaderCell>
                  <span
                    className={`${ficha.apresentaProblema && "text-red-500"}`}
                  >
                    {ficha.notaOlhoTotal}
                  </span>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <div
                    className="px-2 py-1"
                    style={{
                      display: "flex",
                      backgroundColor: ficha.situacao.cor,
                      borderRadius: 6,
                      justifyContent: "center",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {ficha.situacao.descricao}
                  </div>
                </Table.HeaderCell>
                <Table.HeaderCell
                  onClick={() => {
                    setOpenEditar(true);
                    setFicha(ficha);
                  }}
                >
                  <b className="font-bold underline cursor-pointer">Editar</b>
                </Table.HeaderCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

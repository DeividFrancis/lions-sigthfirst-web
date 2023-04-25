import { Button } from "~/components/Button";
import { DialogAlterar } from "~/components/DialogAlterar";
import { DialogFiltros } from "~/components/DialogFiltros";
import { Table } from "~/components/Table";
import { useFicha } from "~/queries/ficha-query";

export default function Home() {
  const { data } = useFicha();
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button className="mr-8">Importar dados</Button>
        <DialogFiltros />
        <DialogAlterar />
      </div>
      <div className="relative overflow-x-auto">
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
              <Table.HeaderCell>Situação</Table.HeaderCell>
              <Table.HeaderCell>Acões</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <Table.HeaderCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17
              </Table.HeaderCell>
              <Table.HeaderCell>Silver</Table.HeaderCell>
              <Table.HeaderCell>Laptop</Table.HeaderCell>
              <Table.HeaderCell>$2999</Table.HeaderCell>
            </Table.Row>
            <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <Table.HeaderCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </Table.HeaderCell>
              <Table.HeaderCell>White</Table.HeaderCell>
              <Table.HeaderCell>Laptop PC</Table.HeaderCell>
              <Table.HeaderCell>$1999</Table.HeaderCell>
            </Table.Row>
            <Table.Row className="bg-white dark:bg-gray-800">
              <Table.HeaderCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </Table.HeaderCell>
              <Table.HeaderCell>Black</Table.HeaderCell>
              <Table.HeaderCell>Accessories</Table.HeaderCell>
              <Table.HeaderCell>$99</Table.HeaderCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

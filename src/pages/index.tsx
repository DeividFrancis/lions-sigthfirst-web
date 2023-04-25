import { Button } from "~/components/Button";
import { DialogAlterar } from "~/components/DialogAlterar";
import { DialogFiltros } from "~/components/DialogFiltros";
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
    </div>
  );
}

import { Button } from "~/components/Button";
import { DialogFiltros } from "~/components/DialogFiltros";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button className="mr-8">Importar dados</Button>
        <DialogFiltros />
      </div>
    </div>
  );
}

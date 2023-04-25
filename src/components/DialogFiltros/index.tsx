import { Button } from "../Button";
import { Dialog } from "../Dialog";

export function DialogFiltros() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Filtros</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <h1>Teste</h1>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

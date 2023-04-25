import { Dialog } from "~/components/Dialog";
import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { Checkbox } from "../Checkbox";
import { ToggleInput } from "../ToggleInput";

export function DialogFiltros() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Filtros</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <div className="">
            <div className="grid gap-6">
              <TextInput name="aluno" label="Aluno" />
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <ToggleInput name="especial" label="Especial" />
                <ToggleInput
                  name="apresentaProblema"
                  label="Apresenta problema"
                />
                <ToggleInput name="exameRealizado" label="Exame realizado" />
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <TextInput name="escola" label="Escola" />
                <TextInput name="professor" label="Professor" />
                <TextInput name="turma" label="Turma" />
                <TextInput name="turno" label="Turno" />
                <TextInput name="comisao" label="Comisão" />
                <TextInput name="situacao" label="Situação" />
              </div>

              <div>
                <TextInput name="observacao" label="Observação" />
              </div>
              <Button>Filtrar</Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

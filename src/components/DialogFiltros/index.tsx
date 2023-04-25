import { useSetAtom } from "jotai";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "~/components/Button";
import { Dialog } from "~/components/Dialog";
import { TextInput } from "~/components/TextInput";
import { filtroAtom } from "~/queries/ficha-query";
import { ToggleInput } from "../ToggleInput";

export function DialogFiltros() {
  const methods = useForm();
  const setFiltros = useSetAtom(filtroAtom);

  async function handleSubmit(data: any) {
    console.log("data", data);

    const keys = Object.keys(data);
    const filtros = keys.reduce((obj, key) => {
      const value = data[key];
      if (value != "") {
        obj[key] = value;
      }

      return obj;
    }, {} as any);

    setFiltros(filtros);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Filtros</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <form>
            <FormProvider {...methods}>
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
                <Dialog.Close
                  asChild
                  onClick={methods.handleSubmit(handleSubmit)}
                >
                  <Button>Filtrar</Button>
                </Dialog.Close>
              </div>
            </FormProvider>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

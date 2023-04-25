import { Dialog } from "~/components/Dialog";
import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { ToggleInput } from "../ToggleInput";
import { useForm, FormProvider } from "react-hook-form";
import { useSetAtom } from "jotai";
import { filtroAtom } from "~/queries/ficha-query";
import { useState } from "react";
import { SituacaoInput } from "../SituacaoInput";

export function DialogFiltros() {
  const [isOpen, setOpen] = useState(false);
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
    setOpen(false);
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger asChild onClick={() => setOpen(true)}>
        <Button>Filtros</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
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
                  {/* <SituacaoInput name="situacao.id" label="Situação" /> */}
                </div>

                <div>
                  <TextInput name="observacao" label="Observação" />
                </div>
                <Dialog.Close asChild>
                  <Button type="submit">Filtrar</Button>
                </Dialog.Close>
              </div>
            </FormProvider>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

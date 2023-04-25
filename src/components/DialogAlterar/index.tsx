import { Dialog } from "~/components/Dialog";
import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { Checkbox } from "../Checkbox";
import { ToggleInput } from "../ToggleInput";
import { useForm, FormProvider } from "react-hook-form";
import { useSetAtom } from "jotai";
import { filtroAtom } from "~/queries/ficha-query";
import { useState } from "react";

export function DialogAlterar() {
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
        <Button>Alterar</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <FormProvider {...methods}>
              <div className="grid gap-6">
                <TextInput name="situacao" label="Situação" />
                <ToggleInput name="especial" label="Especial" />
                <TextInput name="observacao" label="Observação" />
                <Dialog.Close asChild>
                  <Button type="submit">Salvar</Button>
                </Dialog.Close>
              </div>
            </FormProvider>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

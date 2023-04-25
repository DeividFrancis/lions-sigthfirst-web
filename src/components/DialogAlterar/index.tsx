import { Dialog } from "~/components/Dialog";
import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { Checkbox } from "../Checkbox";
import { ToggleInput } from "../ToggleInput";
import { useForm, FormProvider } from "react-hook-form";
import { useAtom, useAtomValue } from "jotai";
import {
  FICHA_QUERY_KEY,
  editaModalOpenAtom,
  fichaAtom,
  filtroAtom,
} from "~/queries/ficha-query";
import { useEffect, useState } from "react";
import { SituacaoInput } from "../SituacaoInput";
import { z } from "zod";
import { FichaService, FichaUpdate } from "~/services/FichaService";
import { queryClient } from "~/queries";

export function DialogAlterar() {
  const [isOpen, setOpen] = useAtom(editaModalOpenAtom);
  const methods = useForm();
  const ficha = useAtomValue(fichaAtom);

  // useEffect(() => {
  //   methods.reset(ficha);
  // }, [ficha, methods]);

  async function handleSubmit(data: any) {
    console.log("data", data);

    const keys = Object.keys(data);
    const dataFull = keys.reduce((obj, key) => {
      const value = data[key];
      if (value != "") {
        obj[key] = value;
      }

      return obj;
    }, {} as any);

    const res = await FichaService.update(ficha.id, dataFull);
    console.log("Update", res);
    queryClient.invalidateQueries([FICHA_QUERY_KEY]);
    setOpen(false);
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <FormProvider {...methods}>
              <div className="grid gap-6">
                <SituacaoInput name="situacao.id" label="Situação" />
                <div className="flex gap-6">
                  <TextInput name="notaOlhoEsquerdo" label="Olho esquerdo" />
                  <TextInput name="notaOlhoDireito" label="Olho direito" />
                </div>
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

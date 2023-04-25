import { Dialog } from "~/components/Dialog";

export default function Home() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>Open modal</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <h1>Teste</h1>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

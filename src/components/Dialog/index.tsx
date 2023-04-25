import * as RadixDialog from '@radix-ui/react-dialog'

function Content({ ...rest }: RadixDialog.DialogContentProps) {
    return <RadixDialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none" {...rest} />
}

function Overlay({ ...rest }: RadixDialog.DialogOverlayProps) {
    return <RadixDialog.Overlay className='bg-zinc-600 bg-opacity-70 fixed inset-0' {...rest} />
}

export const Dialog = {
    ...RadixDialog,
    Content,
    Overlay
}


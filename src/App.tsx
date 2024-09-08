import { useState } from "react";
import {
	Dialog,
	DialogBackdrop,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";

function App() {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex gap-4">
			<div className="p-4 font-bold flex flex-col border border-orange-400 w-48">
				<span className="text-orange-400">
					The listbox outside the modal works
				</span>
				<MyListbox />
			</div>

			<div className="p-4 font-bold flex flex-col border border-orange-400 w-48">
				<span className="text-orange-400">
					The listbox insde the modal doesn't
				</span>
				<button
                    type="button"
					className="p-4 bg-orange-400 hover:bg-orange-700"
					onClick={() => setOpen(true)}
				>
					Open modal
				</button>
			</div>

			<Dialog
				as="div"
				open={open}
				style={{ zIndex: 1000 }}
				className="fixed inset-x-64 h-40 overflow-y-auto"
				onClose={setOpen}
			>
				<MyListbox />
				<DialogBackdrop className="fixed inset-0 bg-black/30" />
				{/* The ListboxOptions inside a modal becomes inert */}
			</Dialog>
		</div>
	);
}

function MyListbox() {
	const [selected, setSelected] = useState("");
	return (
		<div className="w-36 bg-orange-400 text-black z-50 relative">
			<Listbox value={"oh no"} onChange={setSelected}>
				<ListboxButton
					className="w-36 h-12 items-center justify-center data-[focus]:ring-gray-500 flex"
				>
					<span className="grow text-[7px] sm:text-[12px] mt-1 max-w-full truncate">
						{selected ? selected : "Select something"}
					</span>
				</ListboxButton>
				<ListboxOptions
					anchor="bottom"
					className="[--anchor-gap:8px] min-w-[var(--button-width)] bg-orange-400"
				>
					<ListboxOption
						value={"Option 1"}
						className="data-[focus]:bg-green-400 data-[selected]:"
					>
						Option 1
					</ListboxOption>
					<ListboxOption
						value={"Option 2"}
						className="data-[focus]:bg-green-400"
					>
						Option 2
					</ListboxOption>
					<ListboxOption
						value={"Option 3"}
						className="data-[focus]:bg-green-400"
					>
						Option 3
					</ListboxOption>
					<ListboxOption
						value={"Option 4"}
						className="data-[focus]:bg-green-400"
					>
						Option 4
					</ListboxOption>
				</ListboxOptions>
			</Listbox>
		</div>
	);
}

export default App;

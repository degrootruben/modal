"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ModalProps = {};
const Modal: React.FC<ModalProps> = (props) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return (
		<Dialog open={isOpen} onOpenChange={(_) => router.back()}>
			<DialogContent>
				<h1 className="text-4xl font-semibold">Modal</h1>
				<p>This is the actual modal</p>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;

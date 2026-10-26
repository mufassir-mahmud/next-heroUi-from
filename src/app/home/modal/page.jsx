"use client";

import { useState } from "react";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

export default function ModalPage() {
  const [activeModal, setActiveModal] = useState(null);

  const variants = ["opaque", "blur", "transparent"];

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold">
          Modal Backdrop Variants
        </h1>

        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <Modal key={variant}>
              <Button
                variant="secondary"
                onPress={() => setActiveModal(variant)}
              >
                {variant.charAt(0).toUpperCase() +
                  variant.slice(1)}
              </Button>

              <Modal.Backdrop
                variant={variant}
                isOpen={activeModal === variant}
                onOpenChange={(open) =>
                  setActiveModal(open ? variant : null)
                }
              >
                <Modal.Container>
                  <Modal.Dialog className="sm:max-w-[360px]">
                    <Modal.CloseTrigger />

                    <Modal.Header>
                      <Modal.Icon className="bg-default text-foreground">
                        <Rocket className="size-5" />
                      </Modal.Icon>

                      <Modal.Heading>
                        Backdrop:{" "}
                        {variant.charAt(0).toUpperCase() +
                          variant.slice(1)}
                      </Modal.Heading>
                    </Modal.Header>

                    <Modal.Body>
                      <p>
                        This modal uses the{" "}
                        <code>{variant}</code> backdrop.
                        Compare the different visual effects.
                      </p>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button
                        className="w-full"
                        slot="close"
                        onPress={() => setActiveModal(null)}
                      >
                        Continue
                      </Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          ))}
        </div>
      </div>
    </main>
  );
}

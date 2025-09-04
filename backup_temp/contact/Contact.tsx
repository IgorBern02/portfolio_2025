import React, { memo } from "react";
import { contacts } from "./arraycontact";
import { ContactItem } from "./ContactItem";

export const ModalContact: React.FC = () => (
  <section
    className="w-full h-auto p-3 flex flex-col justify-center items-center z-50"
    id="contato"
  >
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent md:text-5xl xl:text-4xl">
        Contato
      </h1>
    </div>
    <div className="w-full h-full flex flex-col items-center p-3 gap-5 rounded-lg mt-5 md:bg-transparent">
      {contacts.map((contact) => (
        <ContactItem key={contact.name} contact={contact} />
      ))}
    </div>
  </section>
);

export const Contact = memo(ModalContact);

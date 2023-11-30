import ContactsFooter from "./ContactsFooter";
import ListaFooter from "./ListaFooter";
import CardsLineFooter from "./CardsLineFooter"
import Logo from "../commons/Logo";

export default function Footer() {
  return (
    <div className="mx-10 md:mx-44 mt-32">
      <div className="flex justify-between ">
        <Logo/>
        <ContactsFooter />
      </div>
      <ListaFooter />
      <CardsLineFooter />
    </div>
  );
}

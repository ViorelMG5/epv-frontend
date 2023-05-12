import { useState } from "react";
import Modal from "@mui/material/Modal";
import Loader from "../Common/Loader";
import sendContactForm from "@/lib/api";
import { AiOutlineClose } from "react-icons/ai";

type FormValues = {
  name: string;
  email: string;
  kilowati: number;
  message: string;
  phone: string;
  locatie: string;
};

const initValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  kilowati: 0,
  message: "",
  locatie: "",
};

interface Props {
  MenuOpen?: (arg: boolean) => void;
}
export default function IndustrialForm({ MenuOpen }: Props) {
  const initState = { isLoading: false, error: "", values: initValues };
  const [state, setState] = useState(initState);
  const [open, setOpen] = useState(false);
  const { values, isLoading, error } = state;
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [touched, setTouched] = useState({});

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    MenuOpen && MenuOpen(false);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
        subject: "Montaje Industriale",
      },
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setOpen(false);
      setTouched({});
      setState(initState);
      setConfirmOpen(true);
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return isLoading ? (
    <div className="min-h-screen min-w-screen grid place-content-center fixed left-0 right-0 bottom-0 top-0 bg-[#ffffff90]">
      <Loader size={10} />
    </div>
  ) : (
    <>
      <button className="btn-primary" onClick={handleOpen}>
        Montaje Industriale
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white top-0 bottom-0 left-0 max-w-[90vw] right-0 m-auto md:h-fit absolute gap-6 lg:max-w-4xl border p-5 rounded-md overflow-auto  scrollbar-hide md:scrollbar-default max-h-[90vh] h-full"
        >
          <div className="flex justify-between">
            <h3>Montaje Industriale</h3>
            <AiOutlineClose
              onClick={handleClose}
              className="w-5 h-5 cursor-pointer hover:text-red-500"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="flex flex-col gap-1 grow">
              <label className="font-medium">Nume Societate</label>
              <input
                placeholder="Societatea SRL"
                className="input"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1 grow">
              <label className="font-medium">Telefon</label>
              <input
                placeholder="073 3333 333"
                className="input"
                type="number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="flex flex-col gap-1 grow">
              <label className="font-medium">Email</label>

              <input
                type="email"
                placeholder="example@info.com"
                className="input"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1 grow">
              <label className="font-medium">Estimare kilowati</label>
              <input
                placeholder="10"
                className="input"
                type="number"
                name="kilowati"
                value={values.kilowati}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 grow">
            <label className="font-medium">Locatie</label>
            <input
              placeholder="Str. Zorilor 7A, Cluj-Napoca"
              className="input"
              type="text"
              name="locatie"
              value={values.locatie}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">Alte Detalii</label>

            <textarea
              className="input"
              placeholder="Mesajul tău"
              name="message"
              required
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="accept-industrial"
              required
              className="w-4 h-4 mr-2 relative top-1"
            />
            <label
              htmlFor="accept-industrial"
              className="text-[15px] cursor-pointer"
            >
              Sunt de acord ca datele personale colectate în formularul de mai
              sus să fie folosite exclusiv pentru scopul de a primi un raspuns
              la solicitare.*
            </label>
          </div>
          <button type="submit" className="btn-primary w-fit">
            Trimite Solicitare{" "}
          </button>
        </form>
      </Modal>
      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex flex-col bg-white top-0 bottom-0 left-0 right-0 m-auto h-fit absolute gap-8 max-w-xl border p-5 rounded-md">
          <div className="check-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-success"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              >
                <circle
                  className="success-circle-outline"
                  cx="12"
                  cy="12"
                  r="11.5"
                />
                <circle
                  className="success-circle-fill"
                  cx="12"
                  cy="12"
                  r="11.5"
                />
                <polyline
                  className="success-tick"
                  points="17,8.5 9.5,15.5 7,13"
                />
              </g>
            </svg>
          </div>
          <p className="text-center">
            Vă mulțumim pentru solicitarea dumneavoastră. Vă vom răspunde cât
            mai curând posibil. Toate cele bune!
          </p>
          <button
            className="btn-primary w-fit mx-auto mb-4"
            onClick={() => setConfirmOpen(false)}
          >
            Inchide
          </button>
        </div>
      </Modal>
    </>
  );
}

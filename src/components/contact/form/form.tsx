"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "./input/input";

export const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validação manual
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setIsSuccess(false);
      setModalMessage("Por favor, preencha todos os campos antes de enviar.");
      setModalOpen(true);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_nqcpmsp",
        "template_4g1rsli",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
        },
        "LFdh7pEUgDoKh1zmP"
      );

      setIsSuccess(true);
      setModalMessage("Email enviado com sucesso! 🚀");
      setModalOpen(true);

      setFormData({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setModalMessage("Erro ao enviar mensagem. Tente novamente.");
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-3/5 h-auto p-3 mt-10 rounded-lg gap-5 flex flex-col items-center justify-center"
      >
        <p className="text-white text-md md:text-lg">
          Envie seu email para contato
        </p>

        <div className="w-full flex flex-col items-center justify-center gap-5">
          <Input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Nome"
            className=" w-4/5 h-auto bg-transparent border-2 border-white/20 rounded-lg p-2  text-white text-sm md:text-lg lg:text-sm outline-none focus:border-white transition duration-300"
          />
          <Input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Email"
            className=" w-4/5 h-auto bg-transparent border-2 border-white/20 rounded-lg p-2 text-white text-sm md:text-lg lg:text-sm outline-none focus:border-white transition duration-300"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escreva sua mensagem"
            className="w-4/5 h-auto p-2 bg-transparent border border-white/20 text-sm md:text-lg lg:text-sm outline-none rounded-lg text-white focus:border-white transition duration-300"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-4/5 h-auto bg-transparent border-2 border-white/20 rounded-lg p-2 text-white text-sm md:text-lg lg:text-sm outline-none cursor-pointer hover:border-white transition duration-300"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl w-80 text-center">
            <h2
              className={`text-lg font-semibold mb-3 ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}
            >
              {isSuccess ? "Sucesso!" : "Erro"}
            </h2>
            <p className="mb-4">{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

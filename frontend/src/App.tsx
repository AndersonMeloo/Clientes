import { useEffect, useRef, useState, type FormEvent } from "react";
import { api } from "./services/api";
import { FiTrash } from "react-icons/fi";

interface CustomerProps {
  id: string,
  name: string,
  email: string,
  status: boolean,
  created_at: string
}

function App() {

  const [customers, setCustomers] = useState<CustomerProps[]>([])

  // Atrelar uma referência a algum item
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)

  // Será carregado assim que a página for aberta (componente)
  useEffect(() => {

    loadCustomers()
  }, [])

  async function loadCustomers() {

    const response = await api.get("/customers")
    // console.log(response.data) //.data - Retorno da API
    setCustomers(response.data)
  }

  async function handleSubmit(event: FormEvent) {

    event.preventDefault()

    if (!nameRef.current?.value || !emailRef.current?.value) return;

    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value
    })

    setCustomers(allCustomer => [...allCustomer, response.data])

    nameRef.current.value = ""
    emailRef.current.value = ""

    // console.log(nameRef.current?.value)
    // console.log(emailRef.current?.value)

    // console.log(response.data)
  }

  async function handleDelete(id: string) {

    try {
      await api.delete("/customer", {
        params: {
          id: id
        }
      })

      const allCustomers = customers.filter((customer) => customer.id !== id)
      setCustomers(allCustomers)

    } catch (error) {
      console.log(error)
    }
  }

  //  npm install -D tailwindcss postcss autoprefixer
  // npm i axios

  return (

    <>
      <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
        <main className="my-10 w-full md:max-w-2xl">
          <h1 className="text-4xl font-medium text-white">Cliente</h1>

          <form className="flex  flex-col my-6"
            onSubmit={handleSubmit}
          >
            <label className="font-medium text-white">Nome:</label>
            <input
              className="w-full mb-5 p-2 rounded"
              type="text"
              placeholder="Digite seu nome completo.."
              ref={nameRef}
            />

            <label className="font-medium text-white">Email:</label>
            <input
              className="w-full mb-5 p-2 rounded"
              type="email"
              placeholder="Digite seu email.."
              ref={emailRef}
            />

            <input
              className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
              type="submit"
              value='Cadastar'
            />
          </form>

          <section className="flex flex-col gap-4">
            {customers.map((customer) => (
              <article className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
                key={customer.id}
              >

                <p><span className="font-medium">Nome:</span>{customer.name}</p>
                <p><span className="font-medium">Email:</span>{customer.email}</p>
                <p><span className="font-medium">Status:</span>{customer.status ? "ATIVO" : "INATIVO"}</p>

                <button className="bg-red-500 w-7 h-7 flex items-center  justify-center rounded-lg absolute right-0 -top-3"
                  onClick={() => handleDelete(customer.id)}
                >
                  <FiTrash size={18} color="#fff" />
                </button>

              </article>
            ))}
          </section>

        </main>
      </div>
    </>
  )
}

export default App

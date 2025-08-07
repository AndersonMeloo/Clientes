import prismaClient from "../prisma"

interface DeleteCustomerProps {

    id: string
}

class DeleteCustomerService {

    async execute({ id }: DeleteCustomerProps) {

        if (!id) {
            throw new Error('Solicitação invalida')
        }

        const findCustomer = await prismaClient.customer.findFirst({

            // where() filtra, procura o dado que estou informando
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error('Cliente não existe.')
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { massage: 'Deletado com sucesso!' }
    }
}

export { DeleteCustomerService }
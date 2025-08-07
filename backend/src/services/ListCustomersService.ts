import prismaClient from "../prisma";

class ListCustomersService {

    async execute() {

        // findMany() - Encontrar todos
        const customers = await prismaClient.customer.findMany()

        return customers
    }
}

export {ListCustomersService}
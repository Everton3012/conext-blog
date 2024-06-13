import { PrismaService } from '@/database/prisma/prisma.service'
import { Query, Resolver } from '@nestjs/graphql'
import { Author } from '../models/author'

@Resolver(() => Author)
export class AuthorsResolver {
    constructor(private readonly prisma: PrismaService) {}

    @Query(() => [Author])
    async authors() {
        return await this.prisma.author.findMany()
    }
}

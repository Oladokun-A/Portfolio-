import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


const seedProjects = async () => {
    const count = await prisma.project.count()
    if (count === 0) {
        await prisma.project.createMany({
            data: [
                {title: "Typing Test Program", demoUrl: "https://typing-test-liart.vercel.app", description: "A responsive typing speed application that tracks typing accuracy, speed, and performance across multiple game modes "},
                {title: "Digital Landing Page", demoUrl: "https://digitalbank-landing-page-b3ig.vercel.app", description: "A modern, responsive landing page for a digital banking service with interactive elements and smooth animations."},
                {title: "Product List with Cart", demoUrl: "https://product-list-with-cart-main-ashen-nine.vercel.app", description: "A modern e-commerce interface that allows users to browse products, manage a shopping cart, and experience a simplified online shopping workflow"},
                {title: "Newsletter Page", demoUrl: "https://news-six-rose.vercel.app", description: "A clean and responsive newsletter subscription page focused on user engagement and e-mail list growth "}
            ]
        })
    }
}

seedProjects()

export async function getProjects(query?: string) {

    if(query) {
        return prisma.project.findMany({
            where: {
                OR: [
                    {title: { contains: query }},
                    {description: { contains: query }}
                ]
            }
        })
    }
    return prisma.project.findMany()
}

export async function getProject(id: number){
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.project.findUnique({
        where: {id}
    })
} 

export async function addProject(
    title: string,
    demoUrl: string,
    description: string
) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.project.create({
        data: {title, demoUrl, description}
    })
}
export async function updateProject(
    id: number,
    title: string,
    demoUrl: string,
    description: string,
) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.project.update({
        where: {id},
        data: {title, demoUrl, description}
    })
}
export async function deleteProject(id: number){
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.project.delete({
        where: {id}
    })
}
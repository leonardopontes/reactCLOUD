import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import ButtonLogout from "@/components/ButtonLogout"
import { getServerSession } from "next-auth"


export default async function Admin(){
	const session = await getServerSession(nextAuthOptions)
// async e await se complementam. se a sessão await for bem sucedida irá disponibilizar e carregar a função de Admin (), return.
// Supondo que eu defini uma função admin com await de login. Significa que a função de admin só será carregada caso a sessão de login 
// for concluída com sucesso
	

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<h1 className="text-2xl mb-8">Olá, {session?.user.name}. Bem vindo(a)!</h1>
			<ButtonLogout />
		</div>
	)
}
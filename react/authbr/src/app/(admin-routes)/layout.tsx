import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface PrivateLayoutProps {
	children: ReactNode
}

/* as interfaces são usadas para definir a estrutura de objetos ou componentes. Neste caso, está sendo criada uma interface para definir quais propriedades 
podem ser passadas para a função PrivateLayout. Isso ajuda a documentar e garantir que as propriedades passadas estejam corretamente tipadas.

A função PrivateLayout é uma função que recebe um único argumento chamado children, e esse argumento é tipado como ReactNode. Aqui estão mais detalhes:

- children: É um argumento que normalmente contém elementos React (como componentes ou elementos HTML) que serão renderizados dentro deste layout. O 
- ReactNode é usado para indicar que essa propriedade pode receber qualquer coisa que seja renderizável no React.
- async function PrivateLayout({ children }: PrivateLayoutProps): Aqui, a função PrivateLayout está sendo definida como uma função assíncrona (async function).
  Isso significa que ela pode conter operações assíncronas, como fazer solicitações de rede ou esperar por dados, sem bloquear a execução do código.
  
Portanto, a função PrivateLayout espera receber um componente (ou vários componentes) como children, e ela provavelmente desempenha um papel na autenticação, 
verificando se o usuário está autenticado antes de renderizar esses componentes. Se o usuário não estiver autenticado, ele é redirecionado para a página inicial. 
*/

export default async function PrivateLayout({ children }: PrivateLayoutProps){
	const session = await getServerSession(nextAuthOptions)

	if (!session) {
		redirect('/')
	}

/*/ if (!session) { redirect('/') }: Após obter a sessão, o código verifica se há uma sessão válida. Se não houver (ou seja, o usuário não está autenticado), 
ele redireciona o usuário para a página inicial ('/'). Essa verificação garante que apenas usuários autenticados tenham acesso ao conteúdo dentro deste layout.*/	

	return <>{children}</>

/*/ return <>{children}</>: Se o usuário estiver autenticado, o componente React renderiza os elementos passados como children. Esses elementos podem ser 
componentes ou conteúdo que você deseja exibir dentro deste layout privado. */	
}
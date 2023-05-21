import { useAuth } from '@/context/auth/hook';
import { getDataSStorage } from '@/util/storage';

const Dashboard: React.FC = () => {
	const { isLoggedIn } = useAuth();

	return (
		isLoggedIn ? (
			<main className="w-full h-[90vh] mt-6 border-y border-dashed bg-bg_main_dashboard">
				<h1>Seja bem vindo!</h1>;
			</main>
		)
			: (
				<main className="w-full h-[90vh] mt-6 border-y border-dashed bg-bg_main_dashboard">
					<h1>Você não tem acesso, efutue o login!</h1>;
				</main>
			)
	);
};

export default Dashboard;
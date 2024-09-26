import { Menu } from '@headlessui/react';
import {Link} from "react-router-dom";
import Logo from "../assets/Logo.png";
//import Logo from "../assets/mision.png";

export default function Landingpage() {
  return (
    <>
    

        <section className="bg-fondo dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
				<div className="mr-auto place-self-center lg:col-span-7">
				<h1 className="max-w-2xl mb-4 text-6xl font-extrabold leading-none tracking-tight md:text-7xl xl:text-8xl dark:text-white" style={{ fontFamily: 'The Seasons' }}>
					 Mejorando el manejo de tus proyectos.</h1>
					 <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-2xl dark:text-gray-400" style={{ fontFamily: 'Times New Roman' }}> Aquí podrás encontrar varias opciones para mejorar la eficacia a la hora de organizar tus proyectos y además de mejorar tiempos de entrega de los mismos.<br /></p>
						<div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-5">
							<Link to="/formRegistro" className="inline-flex items-center justify-center mt-3 w-full px-5 py-3 text-sm font-medium text-center text-white bg-green-600 border border-transparent rounded-lg sm:w-auto hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800">
								Sign In
							</Link>
							<Link to="#" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
								Log in
							</Link>
						</div>
				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<img src={Logo} alt="Logo" />
				</div>
			</div>
		</section>

		<section className="bg-white dark:bg-gray-900">
			<div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
				<div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
				<h2 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Comprometidos con un futuro sostenible, donde cada acción cuenta</h2>
				<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-2xl dark:text-gray-400" style={{ fontFamily: 'Times New Roman' }}> Dale una segunda vida con producto greenbuy<br /></p>
			</div>
				<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

					<div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-black-0000 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
							<img src={Logo} alt="mision" />
						</div>
							<h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: 'Times New Roman' }}>Misión</h2>
							<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400"> Ofrecer una tienda en línea que permita a las empresas vender productos cercanos a vencer, mientras los usuarios obtienen descuentos y apoyan la sostenibilidad.</p>

						<a href="#"className="text-white bg-links hover:bg-links focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
					</div>
					<div>
						
					</div>
					<div
						className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
							<img src={Logo} alt="vision" />
						</div>
						<h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: 'Times New Roman' }}>Vision</h2>
						<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Lanzar una plataforma innovadora que reduzca el desperdicio alimentario en Colombia, facilitando la conexión entre empresas y consumidores para redistribuir productos cercanos a su vencimiento, promoviendo así el consumo responsable y el impacto social positivo</p>			<a href="#"
							className="text-white bg-links hover:bg-links focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
					</div>
				</div>
			</div>
		</section>

		<section className="bg-white dark:bg-gray-900">
			<div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
				<div className="col-span-2 mb-8">
					<p className="text-xl font-medium text-links dark:text-purple-500">Trusted Worldwide</p>
					<h2 className="mt-3 mb-4 text-5xl font-bold" style={{ fontFamily: 'Times New Roman' }}>¿Conoces el porcentaje del desperdicio de alimentos durante el año 2023 en Colombia?</h2>
					<p className="font-light text-gray-500 sm:text-2xl dark:text-gray-400">El tema del desperdicio de alimentos en Colombia es alarmante, ya que en 2023 se estima que se pierden alrededor de 9,76 millones de toneladas de alimentos según la (FAO).</p>
					<div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700"> </div>
				</div>
				<div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
					<div>
						<svg className="w-12 h-12 mb-2 text-links md:w-14 md:h-14 dark:text-lionsk" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
						</svg>
						<h3 className="mb-2 text-4xl font-bold" style={{ fontFamily: 'Times New Roman' }}>34% desperdicio</h3>
						<p className="font-light text-gray-500 dark:text-gray-400 text-xl" style={{ fontFamily: 'Times New Roman' }}>Pérdidas de alimentos</p>
					</div>
					<div>
						<svg className="w-12 h-12 mb-2 text-links md:w-14 md:h-14 dark:text-links" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
						</svg>
						<h3 className="mb-2 text-4xl font-bold" style={{ fontFamily: 'Times New Roman' }}>Users</h3>
						<p className="font-light text-gray-500 dark:text-gray-400 text-xl" style={{ fontFamily: 'Times New Roman' }}>Únete a nuestra plataforma</p>
					</div>
					<div>
						<svg className="w-12 h-12 mb-2 text-links md:w-14 md:h-14 dark:text-links" fill="currentColor" viewBox="0 0 20,20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M10,18a8,8,0,100,-16,8,8,0,000,16zM4.332,8.027a6.012,6.012,0,011.912,-2.706C6.512,5.73,6.974,6,7.5,6A1.5,1.5,0,009,7.5V8a2,2,0,004,0,2,2,a=1.523,-1.943A5.977,5.977,a=16,c=10,c=10,c=10,c=10,c=10,c=10,c=10,c=10,c=10,c=10,c=10,c=10,c=10,a=10,a=10,a=10,a=10,a=10,a=10,a=10,a=10,a=10,a=10,a=10,a=10,a=10"></path>
						</svg>
						<h3 className="mb-2 text-4xl font-bold" style={{ fontFamily: 'Times New Roman' }}>Colombia</h3>
						<p >Un granito de arena para mejorar nuestro país.</p>
					</div>
				</div>
			</div>
		</section>


		<section style={{ backgroundColor: '#C8E6C9' }} className="dark:bg-gray-800">                        
			<div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">                                
				<figure className="max-w-screen-md mx-auto">                                        
					<svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">                                                
						<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />                                        
					</svg>                                        
					<blockquote>                                                
						<p className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white font-sans" style={{ fontFamily: "Arial Narrow, Arial, sans-serif" }}>Cada bocado cuenta, y al reducir el desperdicio de comida, no solo cuidamos nuestro planeta, sino que también construimos un futuro más justo y sostenible para todos, donde cada alimento salvado se convierte en una oportunidad para quienes más lo necesitan.</p>                                        
					</blockquote>                                
				</figure>                        
			</div>            
		</section>





	<footer className="bg-white dark:bg-gray-800">
		<div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
			
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<div className="text-center">
				<a href="#"
					className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
	</a>
					<span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 greenbuy. Todos lo derechos reservados.
	</span>
					<ul className="flex justify-center mt-5 space-x-5">
						<li>
							<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd" /></svg>
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path fillRule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clipRule="evenodd" /></svg>
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path fillRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clipRule="evenodd" /></svg>
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path fillRule="evenodd"
										d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
										clipRule="evenodd" /></svg>
							</a>
						</li>
					</ul>
			</div>
		</div>
	</footer>
        </>
    );
}
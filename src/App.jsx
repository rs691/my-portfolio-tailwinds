
// import { Link} from 'react-router-dom'

// import './index.css'



// function App() {
  

//   return (
//    <>
//    <container className="min-width bg-custom-100">

//    <div className="card bg-base-100 w-96 shadow-xl ">
//   <figure>
//     <img
//       src='./assets/alien.svg'
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

//    </container>


// 		<header className="container flex items-center justify-between w-full max-w-3xl px-6 py-10 mx-auto xl:max-w-5xl bg-custom-100">
// 			<button className="block h-6 text-2xl font-semibold text-color-white">Welcome to my Home Portfolio App</button>
// 			<div className="flex items-center">
// 				<div className="hidden space-x-2 font-medium sm:block">
					
// 					<button className="p-1 text-blue-500 hover:underline">Blog</button>
// 					<Link to="/home">Home</Link>
// 					<button className="p-1 text-blue-500 hover:underline">Tags</button>
// 					<button className="p-1 text-blue-500 hover:underline">Projects</button>
// 					<button className="p-1 text-blue-500 hover:underline">About</button>
// 				</div>
// 				<button aria-label="Toggle Dark Mode" type="button" className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4">
// 					{/* Get image from local folder using url()*/}
					
// 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="dark:text-gray-50">
// 						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
// 					</svg>
// 				</button>
// 				<div className="sm:hidden">
// 					<button type="button" aria-label="Toggle Menu" className="w-8 h-8 ml-1 mr-1 rounded">
// 						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="dark:text-gray-50">
// 							<path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
// 						</svg>
// 					</button>
// 					<div className="fixed right-0 z-10 w-full h-full duration-300 ease-in-out transform translate-x-full top-24">
// 						<button type="button" aria-label="toggle modal" className="fixed w-full h-full cursor-auto focus:outline-none"></button>
// 						<nav className="fixed h-full mt-8">
// 							<div className="px-12 py-4">
// 								<button className="text-2xl font-bold tracking-widest dark:text-gray-50">Blog</button>
// 							</div>
// 							<div className="px-12 py-4">
// 								<button className="text-2xl font-bold tracking-widest dark:text-gray-50">Tags</button>
// 							</div>
// 							<div className="px-12 py-4">
// 								<button className="text-2xl font-bold tracking-widest dark:text-gray-50">Projects</button>
// 							</div>
// 							<div className="px-12 py-4">
// 								<button className="text-2xl font-bold tracking-widest dark:text-gray-50">About</button>
// 							</div>
// 						</nav>
// 					</div>
// 				</div>
// 			</div>
// 		</header>
// 		<main className="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl">
// 			<div className="space-y-6">
// 				<h2 className="text-3xl font-extrabold dark:text-gray-900">Recent blog posts</h2>
// 				<ul className="space-y-8 xl:space-y-10">
// 					<li>
// 						<article>
// 							<dl>
// 								<dt className="sr-only">Published on</dt>
// 								<dd className="text-xs dark:text-gray-600">
// 									<time dateTime="2021-01-12">January 12, 2021</time>
// 								</dd>
// 							</dl>
// 							{/* <div className="space-y-1">
// 								<h3 className="text-2xl font-bold tracking-tight">
// 									<a rel="noopener noreferrer" href="#" className="dark:text-gray-900">Hendrerit vulputate eu quo.</a>
// 								</h3>
// 								<p className="max-w-full dark:text-gray-800 prose prose-invert">Qui ei agam assum vivendum, ad nostro mediocrem sit, erant sanctus maiestatis vel no. Reque periculis usu at, id mel dicam impetus aliquip. At discere feugiat qui, meliore lucilius persecuti ut pri, vivendo corpora ne sit.</p>
// 								<div className="flex flex-wrap space-x-3">
// 									<button className="text-xs dark:text-violet-600">#angular</button>
// 									<button className="text-xs dark:text-violet-600">#tailwind</button>
// 									<button className="text-xs dark:text-violet-600">#webdev</button>
// 								</div>
// 							</div> */}
// 						</article>
// 					</li>
// 					<li>
// 						<article>
// 							<dl>
// 								<dt className="sr-only">Published on</dt>
// 								<dd className="text-xs dark:text-gray-600">
// 									<time dateTime="2021-01-12">January 12, 2021</time>
// 								</dd>
// 							</dl>
// 							<div className="space-y-1">
// 								<h3 className="text-2xl font-bold tracking-tight">
// 									<button className="dark:text-gray-900 hover:underline"> Vis te oporteat deterruisset.</button>
// 								</h3>
// 								<p className="max-w-full dark:text-gray-800 prose prose-invert"> Vero facete sea ne. Ludus saperet scriptorem no usu. Legere intellegam delicatissimi te sit. Vis te oporteat deterruisset.</p>
// 								<div className="flex flex-wrap space-x-3">
// 									<button className="text-xs dark:text-violet-600 hover:underline">#angular</button>
// 									<button className="text-xs dark:text-violet-600 hover:underline">#tailwind</button>
// 									<button className="text-xs dark:text-violet-600">#webdev</button>
// 								</div>
// 							</div>
// 						</article>
// 					</li>
// 					<li>
					
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="space-y-6">
// 				<div>
// 					<h2 className="text-3xl font-extrabold">Projects</h2>
// 					<p>Showcase your projects with a hero image (16 x 9)</p>
// 				</div>
// 				<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
// 					<button type="button" aria-label="Te nulla oportere reprimique his dolorum" className="flex flex-col dark:bg-gray-50">
// 						<img alt="" className="object-cover w-full dark:bg-gray-500 h-52" src="https://source.unsplash.com/200x200/?fashion?1" />
// 					</button>
// 					<div className="flex flex-col flex-1 p-6">
// 						<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum" className="flex flex-col dark:bg-gray-50"></a>
// 						<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
// 						<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
// 						<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
// 							<span>June 1, 2020</span>
// 							<span>2.1K views</span>
// 						</div>
// 					</div>
// 					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum" className="flex flex-col dark:bg-gray-50">
// 						<img alt="" className="object-cover w-full dark:bg-gray-500 h-52" src="https://source.unsplash.com/200x200/?fashion?2" />
// 					</a>
// 					<div className="flex flex-col flex-1 p-6">
// 						<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum" className="flex flex-col dark:bg-gray-50"></a>
// 						<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
// 						<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
// 						<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
// 							<span>June 2, 2020</span>
// 							<span>2.2K views</span>
// 						</div>
// 					</div>
// 					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum" className="flex flex-col dark:bg-gray-50">
// 						<img alt="" className="object-cover w-full dark:bg-gray-500 h-52" src="https://source.unsplash.com/200x200/?fashion?3" />
// 					</a>
// 					<div className="flex flex-col flex-1 p-6">
// 						<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum" className="flex flex-col dark:bg-gray-50"></a>
// 						<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
// 						<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
// 						<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
// 							<span>June 3, 2020</span>
// 							<span>2.3K views</span>
// 						</div>
// 					</div>
// 					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum" className="flex flex-col dark:bg-gray-50">
// 						<img alt="" className="object-cover w-full dark:bg-gray-500 h-52" src="https://source.unsplash.com/200x200/?fashion?4" />
// 					</a>
// 					<div className="flex flex-col flex-1 p-6">
// 						<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum" className="flex flex-col dark:bg-gray-50"></a>
// 						<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
// 						<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
// 						<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
// 							<span>June 4, 2020</span>
// 							<span>2.4K views</span>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="flex justify-center">
// 					<button type="button" className="px-6 py-3 text-sm hover:underline dark:text-gray-600">Load more posts...</button>
// 				</div>
// 			</div>
// 			<div className="space-y-6">
// 				<h2 className="text-2xl font-bold md:text-4xl">Timeline</h2>
// 				<div className="space-y-8">
// 					<div>
// 						<h3 className="mb-3 text-lg font-bold md:text-xl">2021</h3>
// 						<ul className="space-y-4">
// 							<li className="ml-2 space-y-1">
// 								<div className="flex items-center">
// 									<svg viewBox="0 0 24 24" aria-label="Checkmark" className="w-4 h-4 mr-2 dark:text-violet-600">
// 										<g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// 											<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
// 											<path d="M22 4L12 14.01l-3-3"></path>
// 										</g>
// 									</svg>
// 									<h4 className="font-medium">Vel an apeirian assentior</h4>
// 								</div>
// 								<p className="ml-6 dark:text-gray-600">Eam eu stet porro fabellas, accumsan prodesset cum ad, has cu odio mundi neglegentur. Cu solum vocent fabellas vix, an dicant constituto duo.</p>
// 							</li>
// 							<li className="ml-2 space-y-1">
// 								<div className="flex items-center">
// 									<svg viewBox="0 0 24 24" aria-label="Checkmark" className="w-4 h-4 mr-2 dark:text-violet-600">
// 										<g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// 											<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
// 											<path d="M22 4L12 14.01l-3-3"></path>
// 										</g>
// 									</svg>
// 									<h4 className="font-medium">Mea ea diam vidisse</h4>
// 								</div>
// 								<p className="ml-6 dark:text-gray-600"> Vero facete sea ne. Ludus saperet scriptorem no usu. Legere intellegam delicatissimi te sit. Vis te oporteat deterruisset.</p>
// 							</li>
// 						</ul>
// 					</div>
// 					<div>
// 						<h3 className="mb-3 text-lg font-bold md:text-xl">2020</h3>
// 						<ul className="space-y-4">
// 							<li className="ml-2 space-y-1">
// 								<div className="flex items-center">
// 									<svg viewBox="0 0 24 24" aria-label="Checkmark" className="w-4 h-4 mr-2 dark:text-violet-600">
// 										<g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// 											<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
// 											<path d="M22 4L12 14.01l-3-3"></path>
// 										</g>
// 									</svg>
// 									<h4 className="font-medium">Vix at latine consulatu.</h4>
// 								</div>
// 								<p className="ml-6 dark:text-gray-600">Cu eum nostrum repudiare, sed dicat doming integre in. Id scripta percipit lucilius pro, te eam libris verterem.</p>
// 							</li>
// 							<li className="ml-2 space-y-1">
// 								<div className="flex items-center">
// 									<svg viewBox="0 0 24 24" aria-label="Checkmark" className="w-4 h-4 mr-2 dark:text-violet-600">
// 										<g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// 											<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
// 											<path d="M22 4L12 14.01l-3-3"></path>
// 										</g>
// 									</svg>
// 									<h4 className="font-medium">Eam eu stet porro fabellas</h4>
// 								</div>
// 								<p className="ml-6 dark:text-gray-600">Cut et laoreet vocibus adipisci. Verear utroque perpetua per eu.</p>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 		<section className="py-6 rounded-md dark:bg-gray-50 dark:text-gray-900">
// 			<div className="container flex flex-col justify-center max-w-3xl p-4 px-6 mx-auto space-y-8 xl:max-w-5xl md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
// 				<div className="flex flex-col space-y-4 text-center lg:text-left">
// 					<h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
// 					<p>Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!</p>
// 				</div>
// 				<div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
// 					<div className="flex flex-row">
// 						<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
// 						<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50">Subscribe</button>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 		<footer className="container flex flex-col items-center max-w-3xl px-6 mx-auto xl:max-w-5xl">
// 			<div className="flex mb-3 space-x-4">
// 				<a target="_blank" rel="noopener noreferrer" href="mailto:address@yoursite.com" className="text-sm">
// 					<span className="sr-only">mail</span>
// 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-6 h-6 fill-current dark:text-violet-600">
// 						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
// 						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
// 					</svg>
// 				</a>
// 				<a target="_blank" rel="noopener noreferrer" href="https://github.com" className="text-sm">
// 					<span className="sr-only">github</span>
// 					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current dark:text-violet-600">
// 						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
// 					</svg>
// 				</a>
// 				<a target="_blank" rel="noopener noreferrer" href="https://facebook.com" className="text-sm">
// 					<span className="sr-only">facebook</span>
// 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current dark:text-violet-600">
// 						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
// 					</svg>
// 				</a>
// 				<a target="_blank" rel="noopener noreferrer" href="https://youtube.com" className="text-sm">
// 					<span className="sr-only">youtube</span>
// 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current dark:text-violet-600">
// 						<path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"></path>
// 					</svg>
// 				</a>
// 				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com" className="text-sm">
// 					<span className="sr-only">linkedin</span>
// 					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current dark:text-violet-600">
// 						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
// 					</svg>
// 				</a>
// 				<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Twitter" className="text-sm">
// 					<span className="sr-only">twitter</span>
// 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current dark:text-violet-600">
// 						<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
// 					</svg>
// 				</a>
// 			</div>
// 		</footer>

		
// import './App.css'

// import StatsBlock from './components/StatsBlock.jsx';
// import { useNavigate} from "react-router-dom";
// import DarkModeToggle from './components/DarkModeToggle.jsx';






// function App() {
import { useNavigate } from 'react-router-dom';




import './App.css';









function App() {

  const navigate =  useNavigate();

  return (


<div className="bg-background">
   
<div className="flex flex-col items-center justify-center h-screen">
   <div className="text-6xl text-cyan-200 font-bold border-1 border-red">Testicles</div>
   <div className="text-6xl text-cyan-200 font-bold border-2 border-red">Testicles</div>
   <div className="text-6xl text-yellow-300">Testicles</div>
      

       
        <div className="text-6xl">
 		<button onClick={() => navigate('/about')} className=" text-cyan-500 font-bold rounded-lg hover:bg-gray-
     100 hover:scale-105 focus:outline-none focus:ring-2
     -indigo-500 transition-all">About</button>
 		</div>
     <div className="text-6xl">
 		<button onClick={() => navigate('/template')} className=" text-white font-bold rounded-lg hover:bg-gray-
     100 hover:scale-105 focus:outline-none focus:ring-2
     -indigo-500 transition-all">template</button>
 		</div>
     <div className="text-6xl">
 		<button onClick={() => navigate('/business')} className=" text-white font-bold rounded-lg hover:bg-gray-
     100 hover:scale-105 focus:outline-none focus:ring-2
     -indigo-500 transition-all">business</button>
 		</div>
          </div>

         
              </div>
              
           
              
              );
            }
            export default App;

//             </button>
//           </div>
//       </h1>
//     </div>
//   </div>
//   <div className="text-6xl">
// 		<button onClick={() => navigate('/about')} className=" text-black font-semibold rounded-lg hover:bg-gray-
//     100 hover:scale-105 focus:outline-none focus:ring-2
//     -indigo-500 transition-all">About</button>
// 		</div>

//     <div className="text-6xl">
// 		<button onClick={() => navigate('/contact')} className=" text-black font-semibold rounded-lg hover:bg-gray-
//     100 hover:scale-105 focus:outline-none focus:ring-2
//     -indigo-500 transition-all">Contact</button>
// 		</div>
//     <div className="text-6xl">
// 		<button onClick={() => navigate('/projects')} className=" text-black font-semibold rounded-lg hover:bg-gray-
//     100 hover:scale-105 focus:outline-none focus:ring-2
//     -indigo-500 transition-all">Projects</button>
// 		</div>
   
 
// </div>



//   )
// }

// export default App


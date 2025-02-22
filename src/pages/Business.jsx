

function Business() {
    return (
       


<div className="min-h-screen dark:bg-gray-100 dark:text-gray-800">
	<div className="p-6 space-y-8">
		<header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-50">
			<a rel="noopener noreferrer" href="#" aria-label="Homepage">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-6 h-6 dark:text-violet-600">
					<path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
					<path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
				</svg>
			</a>
			<div className="items-center hidden space-x-8 lg:flex">
				<div className="space-x-4">
					<a rel="noopener noreferrer" href="#">Link</a>
					<a rel="noopener noreferrer" href="#">Link</a>
					<a rel="noopener noreferrer" href="#">Link</a>
				</div>
				<button className="px-4 py-2 rounded-md dark:bg-violet-600 dark:text-gray-50">Sign up</button>
			</div>
			<button className="flex items-center justify-center p-2 lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-900">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</header>
		<main>
			<div className="container mx-auto space-y-16">
				<section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
					<div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-50">
						<span className="block mb-2 dark:text-violet-600">Mamba design system</span>
						<h1 className="text-5xl font-extrabold dark:text-gray-900">Build it with Mamba</h1>
						<p className="my-8">
							<span className="font-medium dark:text-gray-900">Modular and versatile.</span>The ultimate design toolkit for savvy technology startups.
						</p>
						<form noValidate="" action="" className="self-stretch space-y-3">
							<div>
								<label htmlFor="name" className="text-sm sr-only">Your name</label>
								<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
							</div>
							<div>
								<label htmlFor="lastname" className="text-sm sr-only">Email address</label>
								<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
							</div>
							<button className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Join the waitlist</button>
						</form>
					</div>
					<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500" />
				</section>
				<section>
					<span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-600">How it works</span>
					<h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">Building with Mamba is simple</h2>
					<div className="grid gap-6 my-16 lg:grid-cols-3">
						<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">1</div>
							<p className="text-2xl font-semibold">
								<b>Nulla.</b>Nostrum, corrupti blanditiis. Illum, architecto?
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">2</div>
							<p className="text-2xl font-semibold">
								<b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor veniam alias debitis?
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">3</div>
							<p className="text-2xl font-semibold">
								<b>Maxime.</b>Expedita temporibus culpa reprehenderit doloribus consectetur odio!
							</p>
						</div>
					</div>
				</section>
				<section className="grid gap-6 lg:grid-cols-2">
					<img src="https://source.unsplash.com/random/360x480" alt="" className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500" />
					<div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50">
						<img src="https://source.unsplash.com/random/100x100" alt="" className="object-cover w-20 h-20 rounded-full dark:bg-gray-500" />
						<blockquote className="max-w-lg text-lg italic font-medium text-center">Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!</blockquote>
						<div className="text-center dark:text-gray-600">
							<p>Leroy Jenkins</p>
							<p>CEO of Company Co.</p>
						</div>
						<div className="flex space-x-2">
							<button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-900"></button>
							<button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
							<button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
							<button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
						</div>
					</div>
					<div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 dark:bg-gray-50">
						<h2 className="text-5xl font-bold dark:text-gray-900">Create with us</h2>
						<p className="dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt facilis quod accusantium beatae cum nam adipisci reiciendis omnis possimus error quo animi voluptas magni, at incidunt. Nulla ex at ullam corporis quidem adipisci vitae, perferendis dolorem libero minus atque tenetur enim pariatur cupiditate commodi in beatae, ipsa eligendi? Quis, saepe.</p>
					</div>
				</section>
				<section>
					<div className="grid gap-6 lg:grid-cols-3">
						<div className="overflow-hidden rounded lg:flex lg:col-span-3">
							<img src="https://source.unsplash.com/random/485x365" alt="" className="object-cover w-full h-auto max-h-96 dark:bg-gray-500" />
							<div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-50">
								<span className="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-600 dark:text-gray-50">Business</span>
								<h2 className="text-3xl font-bold md:flex-1">Curating a workplace that inspires team movement</h2>
								<div>
									<p className="dark:text-gray-600">November 30, 2020</p>
									<p className="dark:text-gray-600">By Leroy Jenkins</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
							<h3 className="inline font-medium dark:text-gray-900">Panel-based blocks.</h3>
							<p className="inline">Flexible panels that are perfect for building functional layouts.</p>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
							<h3 className="inline font-medium dark:text-gray-900">Responsive design.</h3>
							<p className="inline">Panels look great no matter the device.</p>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
							<h3 className="inline font-medium dark:text-gray-900">Premium support.</h3>
							<p className="inline">Join over 50 000 satisfied customers who use our templates.</p>
						</div>
					</div>
				</section>
				<section>
					<div className="container p-6 py-20 mx-auto rounded lg:px-8 dark:bg-gray-50">
						<h2 className="text-5xl font-bold text-center">Our team is here to help you.</h2>
						<div className="flex justify-center p-4">
							<a rel="noopener noreferrer" href="#">Meet our crew &gt;</a>
						</div>
						<img src="https://source.unsplash.com/random/360x240" alt="" className="object-cover w-full h-auto mt-8 rounded max-h-96 dark:bg-gray-500" />
					</div>
				</section>
			</div>
		</main>
		<footer>
			<div className="container flex justify-between p-6 mx-auto lg:p-8 dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" className="font-bold">Mamba</a>
				<div className="flex space-x-2">
					<a aria-label="Email" rel="noopener noreferrer" href="#" className="flex items-center justify-center dark:text-gray-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					<a aria-label="Twitter" rel="noopener noreferrer" href="#" className="flex items-center justify-center dark:text-gray-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
							<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
						</svg>
					</a>
					<a aria-label="Github" rel="noopener noreferrer" href="#" className="flex items-center justify-center dark:text-gray-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
							<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	</div>
</div>

    );
}
export default Business;
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Hero = () => {
     return (
		<section className="bg-white dark:bg-gray-900 py-16">
			<div className="w-full md:max-w-5xl mx-auto px-6">
			<div className="grid md:grid-cols-2 gap-10 items-center">

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					className="space-y-6"
					>
						<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>EO</AvatarFallback>
						</Avatar>
						<h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
						I'm a Software Engineer from Lagos, Nigeria.
						</h1>

						<p className="text-gray-600 dark:text-gray-300">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ullam quae et, corrupti numquam tempora perspiciatis autem dolorum consectetur.
						</p>

						<div>
							<a
								href="#projects"
								className="inline-block px-6 py-3 rounded-lg font-medium ring-1 ring-indigo-500 hover:shadow-lg hover:scale-[1.02] transition-transform dark:text-white"
							>
								Explore my work
							</a>
						
						</div>
				</motion.div>

			</div>
			</div>
		</section>
  	)
}

export default Hero
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homebanner from '@/components/Homebanner'
import Abouthome from '@/components/Abouthome'
import Homemaking from '@/components/Homemaking'
import Oursolution from '@/components/ourSolution'

const inter = Inter({ subsets: ['latin'] })


export const homePage = async () => {
	const res = await fetch('http://localhost/sunsure/graphql?query=query%20Header%20{%20header%20{%20header%20{%20headerStikyLogo%20{%20node%20{%20sourceUrl%20altText%20}%20}%20headerLogo%20{%20node%20{%20sourceUrl%20altText%20}%20}%20}%20}%20menuItems(where:%20{location:%20PRIMARY,%20parentId:%20%220%22})%20{%20nodes%20{%20uri%20label%20childItems%20{%20nodes%20{%20label%20uri%20cssClasses%20}%20}%20}%20}%20}');
	const data = await res.json();
	return{
		props:{
			homepagedata: data?.data,
		}
	}
	
}
// export const getStaticProps = async () => {
// 	const res = await fetch('http://localhost/sunsure/graphql?query=query%20Header%20{%20header%20{%20header%20{%20headerStikyLogo%20{%20node%20{%20sourceUrl%20altText%20}%20}%20headerLogo%20{%20node%20{%20sourceUrl%20altText%20}%20}%20}%20}%20menuItems(where:%20{location:%20PRIMARY,%20parentId:%20%220%22})%20{%20nodes%20{%20uri%20label%20childItems%20{%20nodes%20{%20label%20uri%20cssClasses%20}%20}%20}%20}%20}');
// 	const data = await res.json();
// 	return{
// 		props:{
// 			menudata: data?.data,
// 		}
// 	}
	
// }

export default function Home({homepagedata}) {

	return (
		<>
			<Homebanner bannerdata={homepagedata} />
			<section className="contain_wapper">
				<div className="home_wapper">
					<Abouthome />
					<div className="home_making_power_sec">
						<div className="container">
							<Homemaking />
						</div>
					</div>
					<Oursolution />
				</div>
			</section>
		</>
	)
}

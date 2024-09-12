import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homebanner from '@/components/Homebanner'
import Abouthome from '@/components/Abouthome'
import Homemaking from '@/components/Homemaking'
import CustomTab from '@/components/CustomTab'
import Oursolution from '@/components/ourSolution'

const inter = Inter({ subsets: ['latin'] })


export default function Home({homepagedata}) {

	return (
		<>
			{/* <Homebanner bannerdata={homepagedata} /> */}
			<section className="contain_wapper">
				<div className="home_wapper">
					{/* <Abouthome />
					<div className="home_making_power_sec">
						<div className="container">
							<Homemaking />
						</div>
					</div> */}
					<CustomTab />
					<Oursolution />
				</div>
			</section>
		</>
	)
}

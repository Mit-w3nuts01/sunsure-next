import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/style.css'
import '@/styles/responsive.css'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useState } from 'react';

import Header from '@/components/layout/Header'
// export const getStaticProps = async () => {
// 	const res = await fetch('http://localhost/sunsure/graphql?query=query%20Header%20{%20header%20{%20header%20{%20headerStikyLogo%20{%20node%20{%20sourceUrl%20altText%20}%20}%20headerLogo%20{%20node%20{%20sourceUrl%20altText%20}%20}%20}%20}%20menuItems(where:%20{location:%20PRIMARY,%20parentId:%20%220%22})%20{%20nodes%20{%20uri%20label%20childItems%20{%20nodes%20{%20label%20uri%20cssClasses%20}%20}%20}%20}%20}');
// 	const data = await res.json();
// 	return{
// 		props:{
// 			menudata: data?.data,
// 		}
// 	}
	
// }

export default function App({ Component, pageProps }) {
	

	
	
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	})
	const [menuData, setMenuData] = useState(null);

	useEffect(() => {
	  const fetchData = async () => {
		const res = await fetch('http://localhost/sunsure/graphql?query=query%20Header%20{%20header%20{%20header%20{%20headerStikyLogo%20{%20node%20{%20sourceUrl%20altText%20}%20}%20headerLogo%20{%20node%20{%20sourceUrl%20altText%20}%20}%20}%20}%20menuItems(where:%20{location:%20PRIMARY,%20parentId:%20%220%22})%20{%20nodes%20{%20uri%20label%20childItems%20{%20nodes%20{%20label%20uri%20cssClasses%20}%20}%20}%20}%20}');
		const data = await res.json();
		setMenuData(data?.data);
	  };
  
	  fetchData();
	}, []);

	if(!menuData){
		return ''
	}
	// console.log(menuData);
	return (
		<>
			<ReactLenis root>
			<div className='main-wapper'>
			<Header  menuData={menuData}/>
			<Component {...pageProps} />
			</div>
			</ReactLenis>
		</>
	)
}

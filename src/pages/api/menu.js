import Logowebsite from '@/images/logo-white.svg'
import Logowebsitestiky from '@/images/logo.svg'
import HomeBannermainimage from '@/images/home-banner-image.jpg'
import HomeBannermobileimage from '@/images/home-banner-mobile-image.jpg'
import HomeBannerpatern from '@/images/banner-paten.svg'
import Homeaboutcounterimage1 from '@/images/note-icon-orange.svg'
import Homeaboutcounterimage2 from '@/images/multi-user-icon.svg'
import Homeaboutcounterimagemain from '@/images/about-image.png'

export const HeaderData = {
	"logoLink" : "https://multiatesting1.in/sunsure/about.html",
	"logoUrl" : Logowebsite,
	"stickyLogo" : Logowebsitestiky,
	"menuButtontext" : 'Contact Us',
	"menuButtonlink" : 'https://multiatesting1.in/sunsure',
	"menuItems" : [
		{
			menutitle: 'About',
			menulink: 'https://multiatesting1.in/sunsure/about.html',
		},
		{
			menutitle: 'Solutions',
			menulink: 'https://multiatesting1.in/sunsure/solution.html',
		},
		{
			menutitle: 'Projects',
			menulink: 'https://www.google.com/',
		},
		{
			menutitle: 'Careers',
			menulink: 'https://www.youtube.com/',
		},
		{
			menutitle: 'Knowledge Hub',
			menulink: 'https://getbootstrap.com/',
		}
	]
}

export const Homebannerdata = {
	"Bannerimage": HomeBannermainimage,
	"Bannerimagemobile": HomeBannermobileimage,
	"Bannerpatern": HomeBannerpatern,
	"HomeBannerheading": 'Making India’s <br> power move.',
	"HomeBannerdetail": 'Developing renewable energy assets, Powering India’s growth.',
	"HomeBannerbuttontext": 'Explore Our Solutions',
	"HomeBannerbuttonlink": 'https://multiatesting.in/sunsure/#solutionSection',

}

export const Homeaboutdata =  {
	"Homeaboutsubtitle": "ABOUT SUNSURE",
	"Homeabouttitle": "Power your business green",
	"Homeaboutdetail": "Sunsure simplifies your journey to renewable energy with customized Power Purchase Agreements (PPAs). We manage everything, from infrastructure setup to operations, delivering reliable clean energy as a service. You focus on your business, we power your future.",
	"Homeaboutbuttontext": "Explore Our Solutions",
	"Homeaboutbuttonlink": "https://multiatesting.in/sunsure/about/",
	"Homeaboutmainimage": Homeaboutcounterimagemain,
	"Homeaboutcounterdata": [{
		"Homeaboutcounterimage": Homeaboutcounterimage1,
		"Homeaboutcounternumber": "400",
		"Homeaboutcounternumbersymbol": "+",
		"Homeaboutcounterdetail": "Million USD Raised in Equity Capital",
	},{
		"Homeaboutcounterimage": Homeaboutcounterimage1,
		"Homeaboutcounternumber": "300",
		"Homeaboutcounternumbersymbol": "+",
		"Homeaboutcounterdetail": "MW commissioned",
	},{
		"Homeaboutcounterimage": Homeaboutcounterimage2,
		"Homeaboutcounternumber": "70",
		"Homeaboutcounternumbersymbol": "+",
		"Homeaboutcounterdetail": "Happy Industrial Customers",
	}]
}


export const customTab =  {
	"tabdata": [{
		id: 'tab1',
		tabTitle: "RE 100 Solutions",
		tabDetail: "With expertise in utility scale and distributed RE projects, Sunsure caters to commercial and industrial (C&I) clients through open access and behind the meter solutions.",
		accordiondata:[
			{
				accordiontitle: "RTC Power",
				accordiontext: "Sunsure delivers consistent, Round-the-Clock renewable energy solutions by integrating a bespoke mix of solar, wind, and battery storage, complemented by savvy energy trading. Our approach is meticulously tailored to meet the unique needs of sectors that face challenges in reducing carbon emissions, like Steel, Cement, and Data Centers."
			},{
				accordiontitle: " Energy Storage",
				accordiontext: "Harnessing advanced Energy Storage Systems (ESS), Sunsure delivers steadfast and dispatchable renewable power to Commercial & Industrial (C&I) clients, ensuring uninterrupted energy supply, even in constant-load environments."
			},{
				accordiontitle: " Green Attributes",
				accordiontext: "Sunsure can help you strategize and acquire the right kind of Green Attributes to offset your emissions via Renewable Energy Certificates (RECs), Carbon Credits, and other key market instruments. This service is meticulously designed to help Commercial & Industrial (C&I) clients meet and exceed their Environmental, Social, and Governance (ESG) commitments with full compliance."
			},
		]
	},{
		id: 'tab2',
		tabTitle: "Green Energy Open Access",
		tabDetail: "Sunsure Energy offers Open Access Solar plants that can provide over 70% of a large industrial power demand. The power is delivered through the existing grid connection, and any excess power can be saved for later use.",
		accordiondata:[
			{
				accordiontitle: "Hybrid PPAs",
				accordiontext: "Our Hybrid PPAs integrate the strengths of both solar and wind energy, offering a more consistent and reliable power supply compared to standalone solar or wind systems. This innovative approach significantly enhances the Capacity Utilization Factor (CUF), ensuring that your business benefits from a higher and more stable energy output."
			},{
				accordiontitle: "Solar PPAs ",
				accordiontext: "Sunsure Energy uses Round-the-Clock (RTC) power. RTC power is a 24-hour period during which renewable energy is supplied with the help of battery storage."
			},{
				accordiontitle: " Wind PPAs",
				accordiontext: "Sunsure Energy uses Round-the-Clock (RTC) power. RTC power is a 24-hour period during which renewable energy is supplied with the help of battery storage."
			},
		]
	},{
		id: 'tab3',
		tabTitle: "Green Energy On-Site",
		tabDetail: "We offer long-term power purchase agreements (PPAs) for on-site renewable energy power plants. These PPAs allow industries to offset more than 70% of their power usage with RE technologies like wind, solar, and battery storage.",
		accordiondata:[
			{
				accordiontitle: "Rooftop",
				accordiontext: "Sunsure Energy uses Round-the-Clock (RTC) power. RTC power is a 24-hour period during which renewable energy is supplied with the help of battery storage."
			},{
				accordiontitle: "Ground Mounted",
				accordiontext: "Sunsure Energy uses Round-the-Clock (RTC) power. RTC power is a 24-hour period during which renewable energy is supplied with the help of battery storage."
			}
		]
	}]
}

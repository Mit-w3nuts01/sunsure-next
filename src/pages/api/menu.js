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


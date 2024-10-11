import axios from 'axios';
import {createProxyMiddleware} from 'http-proxy-middleware';

const proxy = createProxyMiddleware({
	target: 'http://localhost:8000',
});

const isStatic = process.env.NUXT_ENV_STATIC === 'true';

const staticBase = (process.env.NODE_ENV === 'development' || isStatic) ? '' : '/themes/pbctf/static';

export default {
	ssr: isStatic,

	head: {
		title: 'Blue Water CTF',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{
				name: 'description',
				hid: 'description',
				content: "Blue Water CTF is a capture the flag event organized by perfect blue and Water Paddler.",
			},
			{name: 'apple-mobile-web-app-title', content: 'Blue Water CTF'},
			{name: 'og:title', content: 'Blue Water CTF'},
			{name: 'og:site_name', content: 'Blue Water CTF'},
			{name: 'og:description', content: "Blue Water CTF is a capture the flag event organized by perfect blue and Water Paddler"},
			{name: 'og:type', content: 'website'},
			{name: 'og:url', content: 'https://bw.ctf.ing'},
			{name: 'og:image', content: `${staticBase}/ogimage.png`},
			{name: 'twitter:card', content: 'summary'},
			{name: 'twitter:site', content: '@pb_ctf'},
			{name: 'twitter:title', content: 'Blue Water CTF'},
			{
				name: 'twitter:description',
				content: "Blue Water CTF is a capture the flag event organized by perfect blue and Water Paddler",
			},
			{name: 'twitter:image', content: `${staticBase}/ogimage.jpg`},
			{name: 'twitter:image:alt', content: 'Blue Water CTF'},
		],
		link: [{rel: 'icon', type: 'image/png', href: `${staticBase}/icon.png`}],
	},

	loading: {color: '#fff'},

	css: [],

	plugins: ['~/plugins/axios', '~/plugins/vue-timeago', '~/plugins/inject-is-static'],

	modules: [
		...(isStatic ? [] : [
			'nuxt-client-init-module',
		]),
		'@nuxtjs/axios',
		'@nuxtjs/markdownit',
		'@nuxtjs/pwa',
//		...(isStatic ? [] : [
//			'@nuxtjs/onesignal',
//		]),
	],

	generate: {
		fallback: '404.html',
		routes: async () => {
			if (!isStatic) {
				return [];
			}
			const {data} = await axios.get('https://bw.ctf.ing/api/v1/teams');
			return data.data.map(({id}) => `/teams/${id}`);
		},
		concurrency: 5,
	},

	axios: {
		baseURL: 'https://bw.ctf.ing/',
		browserBaseURL: '/',
	},

//	oneSignal: {
//		init: {
//			appId: '37f6f0f0-e195-43ba-9fc8-d08702e11484', // public token
//			allowLocalhostAsSecureOrigin: true,
//		},
//	},

	markdownit: {
    html: true,
		injected: true,
	},

	build: {
		postcss: {
			plugins: {
				precss: {},
				'postcss-import-url': {},
			},
			preset: {
				features: {
					customProperties: false,
				},
			},
		},
		publicPath: `${staticBase}/_nuxt/`,
	},

	router: {},

	serverMiddleware: [
		...(process.env.NODE_ENV === 'development'
			? [
				{
					path: '/api',
					handler: proxy,
				},
				{
					path: '/login',
					handler: proxy,
				},
				{
					path: '/logout',
					handler: proxy,
				},
				{
					path: '/register',
					handler: proxy,
				},
				{
					path: '/teams/join',
					handler: proxy,
				},
				{
					path: '/teams/new',
					handler: proxy,
				},
			  ]
			: []),
	],

	env: {
		session: process.env.SESSION || '',
	},
};

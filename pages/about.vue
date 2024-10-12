<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20241012T1400" target="_blank" rel="noopener">10/12 14:00</a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20241014T0200" target="_blank" rel="noopener">10/14 02:00</a> <small>UTC</small>
		</p>

		<!--
		<h3>Prizes</h3>
		<p> We have a total prize pool of 7,500 USD! 🏆 </p><br>
		<ul>
			<li><b>1st place</b> - 3,000 USD (2,000 USD cash + 500 USD x 2 Amazon vouchers), 5 Binary Ninja Personal License</li><br>
			<li><b>2nd place</b> - 2,000 USD (1,500 USD cash + 500 USD Amazon voucher),  3 Binary Ninja Personal License</li><br>
			<li><b>3rd place</b> - 1,000 USD (500 USD cash + 500 USD Amazon voucher), 1 Binary Ninja Personal License</li><br>
     		<li><b>Writeups </b> - 1,400 USD (9 selected writeups x 100 USD cash for each, 1 selected writeup x 500 USD Amazon voucher)</li><br>
			<li><b>BN Cloud Writeup </b> - 1 Binary Ninja personal license to best writeup showing Binary Ninja Cloud usage, 100 USD</li><br>
		</ul>
		-->

		<h3>Social</h3>
		<ul class="socials">
			<li>
				<iframe src="https://discord.com/widget?id=748672086838607943&theme=dark" width="350" height="500"
					allowtransparency="true" frameborder="0"
					sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
					<a href="https://discord.gg/7mNgBEHreu" target="_blank" rel="noopener">Discord</a>
				</iframe>
			</li>
			<li>
				<timeline
					id="pb_ctf"
					source-type="profile"
					:options="{tweetLimit: '3', theme: 'dark', height: '500'}"
				>
					<a href="https://twitter.com/pb_ctf" target="_blank" rel="noopener">Tweets from @pb_ctf</a>
				</timeline>
			</li>
		</ul>

		<h3>Staff</h3>
		<a href="https://perfect.blue" target="_blank" rel="noopener">
			<img class=logo src="https://blog.perfect.blue/img/logo.png">
		</a>
		<a href="https://waterpaddler.team" target="_blank" rel="noopener">
			<img class=logo src="https://ctftime.org/media/cache/84/94/8494a42b84778569b83b8258d72de82d.png">
		</a>
		<p>
			Blue Water CTF is organized by <a href="https://perfect.blue" target="_blank"
      rel="noopener">perfect blue</a> and <a href="https://waterpaddler.team" target="_blank"
      rel="noopener">Water Paddler </a>.
		</p>
		<br><p>Below is the full list of people who contributed to Blue Water CTF 2024 edition. Many thanks to their efforts!</p>
		<ul class="credits">
			<li><a href="https://x.com/kidOfArcrania" target="_blank" rel="noopener">@kidOfArcrania</a></li>
			<li><a href="https://x.com/j0nathanj" target="_blank" rel="noopener">@j0nathanj</a></li>
			<li><a href="https://x.com/udp_ctf" target="_blank" rel="noopener">@udp_ctf</a></li>
			<li><a href="https://x.com/TheGrandPew" target="_blank" rel="noopener">@TheGrandPew</a></li>
			<li><a href="https://x.com/_Nobodyisnobody" target="_blank" rel="noopener">@_Nobodyisnobody</a></li>
			<li><a href="https://x.com/ah_p_uh" target="_blank" rel="noopener">@ah_p_uh</a></li>
			<li><a href="https://x.com/RBTree_" target="_blank" rel="noopener">@RBTree_</a></li>
			<li><a href="https://x.com/vie_pls" target="_blank" rel="noopener">@vie_pls</a></li>
			<li><a href="https://x.com/ret2jazzy" target="_blank" rel="noopener">@ret2jazzy</a></li>
			<li><a href="https://x.com/josep68_" target="_blank" rel="noopener">@josep68_</a></li>
			<li><a href="https://x.com/Strellic_" target="_blank" rel="noopener">@Strellic_</a></li>
			<li><a href="https://x.com/sshckk" target="_blank" rel="noopener">@sshckk</a></li>
			<li><a href="https://x.com/SuperFashi1" target="_blank" rel="noopener">@SuperFashi1</a></li>
		</ul>
	</section>
</template>

<script>
import {Timeline} from 'vue-tweet-embed';

export default {
	components: {Timeline},
	head() {
		return {
			title: 'About - Blue Water CTF',
		};
	},
};
</script>

<style>
.About {
	text-align: center;

	h3 {
		font-size: 2rem;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-top: 3rem;
		margin-bottom: 1rem;
		word-break: break-word;
	}

	.period {
		text-align: center;
		font-size: 3rem;
		line-height: 3rem;
	}

	p,
	ul,
	ol {
		font-family: 'Roboto';
		width: 100%;
		max-width: 50rem;
		margin: 0 auto;
		font-size: 1.4rem;
		line-height: 2rem;
	}

	p, h1,h2,h3 {
		padding-bottom: 4pt;
	}

	ul.credits {
		/*text-align: left;*/
		list-style-type: none;
		columns: 2;
		-webkit-columns: 2;
		-moz-columns: 2;
	}

	ul.socials {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 0;

		li {
			flex: 0 0 20rem;
			height: 30rem;
			overflow-y: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 1rem;
			margin: 0 1rem 0.6rem;
		}
	}

	img {
		display: inline-block;
		margin: 0 auto;
		width: 80vw;
		max-width: 20rem;
		margin-bottom: 1rem;
	}

	img.sponsor {
		display: inline;
		height: 80px;
		max-width: unset;
		width: auto;
	}

	.logo {
		object-fit: cover;
		border-radius: 50%;
		max-width: 10rem;
	}
	a {
		color: #90cbff;
	}
}
</style>

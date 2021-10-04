<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211009T00" target="_blank" rel="noopener">10/09 00:00</a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211011T0000" target="_blank" rel="noopener">10/11 00:00</a> <small>UTC</small>
		</p>

		<h3>Prizes</h3>
		<p> We have a total prize pool of 7,500 USD! 🏆 </p><br>
		<ul>
			<li><b>1st place</b> - 3,000 USD (2,000 USD cash + 500 USD x 2 Amazon vouchers), 5 Binary Ninja Personal License</li><br>
			<li><b>2nd place</b> - 2,000 USD (1,500 USD cash + 500 USD Amazon voucher),  3 Binary Ninja Personal License</li><br>
			<li><b>3rd place</b> - 1,000 USD (500 USD cash + 500 USD Amazon voucher), 1 Binary Ninja Personal License</li><br>
     		<li><b>Writeups </b> - 1,400 USD (9 selected writeups x 100 USD cash for each, 1 selected writeup x 500 USD Amazon voucher)</li><br>
			<li><b>BN Cloud Writeup </b> - 1 Binary Ninja personal license to best writeup showing Binary Ninja Cloud usage, 100 USD</li><br>
		</ul>
		
		<h3>Social</h3>
		<ul class="socials">
			<li>
				<iframe
					src="https://discord.com/widget?id=748672086838607943&theme=dark"
					allowtransparency="true"
					frameborder="0"
					width="350"
					height="500"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
				>
					<a href="https://discord.gg/8BhEHts" target="_blank" rel="noopener">Discord</a>
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
		<p>
			pbctf is organized by <a href="https://perfect.blue" target="_blank"
      rel="noopener">perfect blue</a>.
		</p>
		<p>perfect blue is the top ranked CTF team on CTFTime worldwide rankings since 2019. Follow <a href="https://blog.perfect.blue/perfect-blue-finishes-top-1-on-CTFtime-2020">here</a> to read more about us.</p>
		<br><p>Below is the full list of <a href="https://twitter.com/pb_ctf">perfect blue</a> members (and guests) who contributed to this pbctf edition. Many thanks to their efforts!</p>
		<ul class="credits">
			<li><a href="https://twitter.com/ret2jazzy" target="_blank" rel="noopener">@ret2jazzy</a></li>
			<li><a href="https://twitter.com/aaditya_purani" target="_blank" rel="noopener">@aaditya_purani</a></li>
			<li><a href="https://twitter.com/gf_256" target="_blank" rel="noopener">@gf_256 (cts)</a></li>
			<li><a href="https://twitter.com/sampriti0" target="_blank" rel="noopener">@sampriti0</a></li>
			<li><a href="https://twitter.com/wcbowling" target="_blank" rel="noopener">@wcbowling</a></li>
			<li><a href="https://twitter.com/kidofarcrania" target="_blank" rel="noopener">@kidofarcrania</a></li>
			<li><a href="https://twitter.com/0x464c457f" target="_blank" rel="noopener">@0x464c457f</a></li>
			<li><a href="https://twitter.com/RBTree_" target="_blank" rel="noopener">@RBTree_</a></li>
			<li><a href="https://twitter.com/_VoidMercy" target="_blank" rel="noopener">@_VoidMercy</a></li>
			<li><a href="" target="_blank" rel="noopener">@IKEA</a></li>
			<li><a href="https://twitter.com/j0nathanj" target="_blank" rel="noopener">@j0nathanj</a></li>
			<li><a href="https://twitter.com/Unblvr1" target="_blank" rel="noopener">@Unblvr1</a></li>
			<li><a href="https://twitter.com/elafargue" target="_blank" rel="noopener">@elafargue</a></li>
			<li><a href="https://twitter.com/_neptunia_" target="_blank" rel="noopener">@_neptunia_</a></li>
		</ul>
	</section>
</template>

<script>
import {Timeline} from 'vue-tweet-embed';

export default {
	components: {Timeline},
	head() {
		return {
			title: 'About - pbctf',
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

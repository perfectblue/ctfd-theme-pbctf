<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20201205T00" target="_blank" rel="noopener">12/05 00:00</a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20201206T1159" target="_blank" rel="noopener">12/06 23:59</a> <small>UTC</small>
		</p>
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
		<h3>Prizes</h3>
		<ul>
			<li>1st: 5 Binary Ninja personal licenses, $300 cash</li>
			<li>2nd: 3 personal licenses, $200 cash</li>
			<li>3rd: 1 personal license, $100 cash</li>
     		<li>1 personal license for best write-up using Binary Ninja Cloud</li>
      		<small>* May be subject to change</small>
		</ul>

		<h3>Sponsors</h3>

		<p style="display: block; margin: 0 auto; text-align: center;">
		<a href="https://vector35.com" target="_blank" rel="noopener">
			<img src="../static/v35.png" class="sponsor">
		</a>
		<a href="https://vector35.com" target="_blank" rel="noopener">
			<img src="../static/binja.png" class="sponsor">
		</a>
		</p>
		<p>Vector 35 makes <a href="https://binary.ninja">Binary Ninja</a>.</p>
		<p>If you're interested in building reverse engineering tools, <a href="https://vector35.com/hiring.html">contact us</a>.
		
		<h3>Staff</h3>
		<a href="https://perfect.blue" target="_blank" rel="noopener">
			<img class=logo src="https://blog.perfect.blue/img/logo.png">
		</a>
		<p>
			pbctf is organized by <a href="https://perfect.blue" target="_blank"
      rel="noopener">perfect blue</a>.
		</p>
		<p>Below is the full list of perfect blue members (and guests) who contributed to this pbctf edition. Many thanks to their efforts!</p>
		<ul class="credits">
			<li><a href="https://twitter.com/ret2jazzy" target="_blank" rel="noopener">@ret2jazzy</a></li>
			<li><a href="https://twitter.com/aaditya_purani" target="_blank" rel="noopener">@aaditya_purani</a></li>
			<li><a href="https://twitter.com/gf_256" target="_blank" rel="noopener">@gf_256 (cts)</a></li>
			<li><a href="https://twitter.com/sampriti0" target="_blank" rel="noopener">@sampriti0</a></li>
			<li><a href="https://twitter.com/_neptunia_" target="_blank" rel="noopener">@_neptunia_</a></li>
			<li><a href="https://twitter.com/wcbowling" target="_blank" rel="noopener">@wcbowling</a></li>
			<li><a href="https://twitter.com/kidofarcrania" target="_blank" rel="noopener">@kidofarcrania</a></li>
			<li><a href="https://twitter.com/0x464c457f" target="_blank" rel="noopener">@0x464c457f</a></li>
			<li><a href="https://twitter.com/RBTree_" target="_blank" rel="noopener">@RBTree_</a></li>
			<li><a href="https://twitter.com/Corb3nik" target="_blank" rel="noopener">@Corb3nik</a></li>
			<li><a href="https://twitter.com/_VoidMercy" target="_blank" rel="noopener">@_VoidMercy</a></li>
			<li><a href="https://twitter.com/bemusicscript" target="_blank" rel="noopener">@bemusicscript</a></li>
			<li><a href="https://twitter.com/Unblvr1" target="_blank" rel="noopener">@Unblvr1</a></li>
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

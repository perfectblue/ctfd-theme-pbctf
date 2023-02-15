<template>
	<section class="Register">
		<script src="https://www.google.com/recaptcha/api.js" async="true" defer=""></script>
		<h2 class="title"><span>Register</span></h2>
		<div class="subtitle">or <iso-link to="/login">Login</iso-link></div>
		<form
			class="login-form"
			method="post"
			accept-charset="utf-8"
			autocomplete="off"
		>
			<div class="form-group">
				<label for="name-input">
					User Name
				</label>
				<input
					id="name-input"
					class="form-control"
					type="text"
					name="name"
				>
			</div>
			<div class="form-group">
				<label for="email-input">
					Email
				</label>
				<input
					id="email-input"
					class="form-control"
					type="email"
					name="email"
				>
			</div>
			<div class="form-group">
				<label for="password-input">
					Password
				</label>
				<input
					id="password-input"
					class="form-control"
					type="password"
					name="password"
				>
			</div>
			<div class="form-group">
				Share info to sponsors (for hiring purpose)? &nbsp;
 					<input type="radio" id="fields[1]" name="fields[1]" value="Yes" checked/> Yes &nbsp;
  					<input type="radio" id="fields[1]" name="fields[1]" value="No" /> No
			</div>
			<div>
				By signing up, you agree with our <a href="themes/pbctf/static/tnc.pdf"><u>T&C</u></a> and <a href="themes/pbctf/static/PRIVACYNOTICE.pdf"><u>Privacy Policy</u></a>
			</div>
			<div class="form-group">
			<div class="g-recaptcha" data-size="normal" data-sitekey="6LfQh4UcAAAAABe57KhqjDpli8njkM0-OFjGRhm8"></div>
			</div>
			<div>
        You may choose to create a shared team or individual account here, (you
        will still need to create a team account later).
			</div>
			<div v-for="error in errors" class="error">
			  {{ error }}
			  <br />
			</div>
			<div>
				<button id="submit" type="submit" tabindex="5">
					Submit
				</button>
			</div>
			<input type="hidden" name="nonce" :value="csrfToken">
		</form>
	</section>
</template>

<script>
import IsoLink from '~/components/IsoLink.vue';
import {mapState} from 'vuex';

export default {
	components: {IsoLink},
	data() {
		return {
			errors: [],
		};
	},
	computed: {
		...mapState(['isLoggedIn', 'csrfToken']),
	},
	async asyncData(context) {
		await context.store.dispatch('updateCsrfToken', context);
	},
	mounted() {
		let errors_json = document.getElementById('form-errors').textContent.trim();
		if (errors_json !== '') {
			let errors = JSON.parse(errors_json);
			if (errors.length > 0) {
				this.errors = errors;
			}
		}
	},
	head() {
		return {
			title: 'Register - pbctf',
		};
	},
};
</script>

<style>
.Register {
	text-align: center;

	.title {
		margin-bottom: 0;
	}

	.subtitle {
		margin-bottom: 2rem;
		font-size: 1.5rem;

		a {
			color: #90cbff;
		}
	}

	.form-group {
		display: flex;
		justify-content: center;
		line-height: 2rem;
		padding: 0.6rem 0;
		align-items: center;
	}

	label {
		font-size: 1rem;
		width: 10rem;
		text-align: right;
		padding-right: 1rem;
	}

	.form-control {
		font-size: 1.2rem;
		width: 20rem;
	}

	.error {
		font-size: 1.5rem;
		font-family: 'Roboto', cursive;
		font-weight: 300;

		color: #f44336;
		padding: 0;
		line-height: 2rem;
	}

	button[type='submit'] {
		width: 10rem;
		margin: 1rem 0;
	}
}
</style>

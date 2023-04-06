<script setup lang="ts">
const links = [
	{ name: "dashboard", title: "Home" },
	{ name: "orders", title: "Orders" },
	{ name: "downloads", title: "Downloads" },
	{ name: "addresses", title: "Addresses" },
	{ name: "account", title: "Account" },
];
</script>

<template>
	<div class="sidebar flex flex-column">
		<div class="sidebar__logo">
			<IconsShoppeLogo />
		</div>
		<ul class="sidebar__links flex flex-column">
			<li v-for="link in links" :key="link.name">
				<NuxtLink :to="{ name: 'index' }" class="flex items-center" :class="{ active: $route.name === link.name }">
					<IconsNavigation :variant="link.name"></IconsNavigation>
					{{ link.title }}
				</NuxtLink>
			</li>
		</ul>
		<button class="sidebar__logout button flex items-center">
			<IconsNavigation variant="logout" />
			Logout
		</button>
	</div>
</template>

<style lang="scss" scoped>
%sidebar__link {
	gap: 1.2rem;
	padding: 1.4rem 1.9rem;
	font-weight: 500;
	transition: all 0.3s linear;
	color: #686868;

	&:hover {
		color: var(--accent-color);
	}
}

.sidebar {
	padding: 3.2rem;
	height: 100vh;

	&__logo {
		margin-bottom: 6rem;
		padding-left: 1.9rem;
	}

	&__links {
		gap: 1.4rem;

		a {
			@extend %sidebar__link;
			text-decoration: none;
			border-radius: 0.6rem;

			&.active {
				background-color: rgb(161, 138, 104, 0.1);
				color: var(--accent-color);
			}

			&:visited,
			&:active {
				text-decoration: none;
			}
		}
	}

	&__logout {
		@extend %sidebar__link;
		margin-top: auto;
	}
}
</style>

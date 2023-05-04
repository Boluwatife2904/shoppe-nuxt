<script setup lang="ts">
interface Emits {
	(event: "toggle-sidebar"): void;
}

defineEmits<Emits>();

const links = [
	{ name: "dashboard", title: "Home" },
	{ name: "dashboard-orders", title: "Orders" },
	{ name: "dashboard-downloads", title: "Downloads" },
	{ name: "dashboard-addresses", title: "Addresses" },
	{ name: "dashboard-account", title: "Account" },
];
</script>

<template>
	<div class="sidebar flex flex-column">
		<div class="sidebar__logo">
			<IconsShoppeLogo />
		</div>
		<ul class="sidebar__links flex flex-column">
			<li v-for="link in links" :key="link.name" @click="$emit('toggle-sidebar')">
				<NuxtLink :to="{ name: link.name }" class="flex items-center" :class="{ active: $route.name === link.name }">
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
	padding: 3.2rem 2rem;
	height: 100vh;

	@media screen and (min-width: 600px) {
		padding: 3.2rem;
	}

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

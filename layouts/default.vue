<script setup lang="ts">
import References from '../plugins/references/References.vue';
import BaseLayout from './base.vue'
</script>

<template>
	<BaseLayout>
		<template #main>
			<main class="flex-grow flex flex-col px-12 py-8">
				<slot />
			</main>
		</template>
	</BaseLayout>
</template>

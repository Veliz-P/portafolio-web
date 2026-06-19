<script lang="ts">
	import type { Component } from 'svelte';
	import type { LucideProps } from '@lucide/svelte';
	interface Props extends LucideProps {
		Icon: Component<LucideProps>;
	}
	const { Icon, ...props }: Props = $props();
</script>

<Icon {...props} />
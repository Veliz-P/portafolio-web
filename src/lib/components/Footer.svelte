<script lang="ts">
import { translationStore } from '$lib/stores/langStore';
</script>

<footer>
    <p>
        &copy; {new Date().getFullYear()}, Carlos Veliz | {$translationStore.footer.rightsReserved}
    </p>
</footer>

<style>
:global(.dark) footer {
    background-color: var(--bg-400);

}
footer {
    margin-top: 6rem;
    background-color: var(--bg-500);
    display: flex;
    justify-content: center;
    padding: var(--space-3) var(--space-2);
    color: var(--text-muted);
    font-size: var(--fs-sm);
    font-weight: 500
}
@media (min-width: 768px) {
    footer {
        margin-top: 8rem;
    }
}
</style>

<script>
   import { text as Text } from 'src'
   const loadDark = () => {
     document.getElementById('theme').setAttribute('href', 'css/dark.css');
   };
   const loadLight = () => {
     document.getElementById('theme').setAttribute('href', 'css/light.css');
   }
</script>

<main>
    <h1>Maitred UI - Kitchen Sink</h1>
    <button on:click={loadDark}>Load Dark Mode</button>
    <button on:click={loadLight}>Load Light Mode</button>
    <Text />
</main>

<style lang="scss">
    $bg: var(--bg);
    $text: var(--text);

    main {
        display: flex;
        flex-flow: column;
        height: 100%;
        background: $bg;
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    h1 {
        color: $text;
        font-weight: bold;
        font-size: 4em;
    }
</style>

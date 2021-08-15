<script lang="ts">
    let name = "Foo";
    let value = "";
    let alt = "";
    let placeholder = "Input text here!";
</script>

<div>
    <p>Test</p>
    <input type="text" name="{name}" alt="{alt}" bind:value={value} placeholder="{placeholder}" />
</div>
<template>
  <SmaragdPage>
    <h1>Smaragd UI</h1>
    <p>This page provides an overview over all smaragd components.</p>

    <hr>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>

    <hr>
    <h2>Layout and Positioning</h2>

    <Layout name="flow" spacing="tight">
      <h3>&lt;Layout /&gt;</h3>
      <p>Provides general layouting options. Recommended layouts:</p>
      <p>Flow: provides a vertical flow of elements</p>
      <p>Inline: provides a horizontal flow of elements</p>
      <p>[Grid]: Provide up to 3 column names and their relative width. Each column can be between 1 and 4 fractions or a for automatic.</p>
      <SmaragdDemoPropDisplay :props="[
        { name: 'name', desc: 'which layout to use', required: 'false', type: [ 'flow', 'padded', 'inline', 'center', 'left', 'right', 'dynamic', '/[1-4]{1,3}a?/ → (11, 14, 212, 21a, 132, 1a, ...)' ] },
        { name: 'spacing', desc: 'how much space between elements', required: 'false', type: [ 'regular', 'tight', 'loose', 'none' ] }
      ]" />
    </Layout>

    <Layout name="flow" spacing="tight">
      <h3>&lt;Spacer /&gt;</h3>
      <p>An empty element that can take up any height</p>
      <SmaragdDemoPropDisplay :props="[
        { name: 'size', desc: 'How tall you want this spacer to be', required: 'false', type: [ 'regular', 'tight', 'loose', '[Number]' ] }
      ]" />
    </Layout>

    <Layout name="flow" spacing="tight">
      <h3>&lt;Box /&gt;</h3>
      <p>A box to group and organize content</p>
      <SmaragdDemoPropDisplay :props="[
        { name: 'layout', desc: 'if you want to use a layout in this box, use this to not have to create another layout element', required: 'false', type: '[Layout name]' },
        { name: 'spacing', desc: 'padding between box border and box content', required: 'false', type: [ 'regular', 'tight', 'loose', 'none' ] },
        { name: 'layout-spacing', desc: 'spacing to pass to the nested layout component. defaults to \'spacing\' attribute', required: 'false', type: [ 'regular', 'tight', 'loose', 'none' ] }
      ]" />
      <Layout name="11" spacing="tight">
        <Box layout="flow">
          <h3>Demo box header</h3>
          <p>Demo box content. This box has layout flow</p>
        </Box>
        <Box spacing="tight">
          <p>Demo box without layout but tight spacing</p>
        </Box>
      </Layout>
    </Layout>

    <hr>
    <h2>Buttons and Inputs</h2>

    <Layout name="flow" spacing="tight">
      <h3>&lt;Button /&gt;</h3>
      <p>A general purpose button element to use across your application</p>
      <SmaragdDemoPropDisplay :props="[
        { name: 'text', desc: 'button text', required: 'false', type: 'String' },
        { name: 'type', desc: 'which style to display the button in', required: 'false', type: 'TODO' },
        { name: 'icon', desc: 'give the button an icon', required: 'false', type: 'String' },
        { name: 'disabled', desc: 'set button to disabled', required: 'false', type: 'Boolean' },
        { name: 'href', desc: 'turn button into a link', required: 'false', type: 'String' },
        { name: '@click', desc: 'on click event handler', required: 'false', type: 'Function' },
      ]" />
      <Button
        text="Gamers"
        color="primary"
        @click="clicked()"
      />
    </Layout>

  </SmaragdPage>
</template>

<script setup>
function clicked() {
  alert('clicked!')
}
</script>

<style scoped lang="scss">
// div {
//   border: 1px solid red;
// }
</style>

<template>
  <SmaragdPage>
    <h1>Smaragd UI</h1>
    <p>This page provides an overview over all smaragd components.</p>

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
        { name: '@click', desc: 'on click event handler', required: 'false', type: 'Function' },
      ]" />
    </Layout>

  </SmaragdPage>
</template>

<style scoped lang="scss">
// div {
//   border: 1px solid red;
// }
</style>

<template>
  <Layout>
    <h1>Smaragd UI</h1>
    <p>This page provides an overview over all smaragd components.</p>
    <Spacer />
    <h2>Layout and Positioning</h2>
    <h3>&lt;Layout /&gt;</h3>
    <SmaragdDemoPropDisplay :props="[
      { name: 'name', required: 'false', type: [ 'flow', 'padding' ] }
    ]" />
  </Layout>
</template>

<style scoped lang="scss">
div {
  border: 1px solid red;
}
</style>

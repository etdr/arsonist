<script lang="ts">
  import 'carbon-components-svelte/css/g90.css'

  import Header from 'carbon-components-svelte/src/UIShell/Header.svelte'
  import HeaderNav from 'carbon-components-svelte/src/UIShell/HeaderNav.svelte'
  import HeaderNavMenu from 'carbon-components-svelte/src/UIShell/HeaderNavMenu.svelte'
  import HeaderNavItem from 'carbon-components-svelte/src/UIShell/HeaderNavItem.svelte'
</script>


<Header platformName="arsonist">
  <HeaderNav>
      <HeaderNavItem text="option 1"></HeaderNavItem>
  </HeaderNav>
</Header>

<slot />


<style>
:global(body) {
  margin: 5rem 2rem;
}
</style>
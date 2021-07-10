<script>
  import "../app.postcss";
</script>

<header>
  <nav class="flex list-none space-x-6 p-4 shadow-md">
    <li><a href="/">home</a></li>
    <li><a href="/blog">blog</a></li>
    <li><a href="/user">user</a></li>
  </nav>
</header>
<slot><!-- optional fallback --></slot>

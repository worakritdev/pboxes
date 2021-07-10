<script>
  let username, password;
  async function logIn() {
    const res = await fetch("/auth", {
      method: "POST",
      body: JSON.stringify(username, password),
    });
  }
</script>

<form on:submit|preventDefault={logIn}>
  <div class="grid place-items-center">
    <input
      type="text"
      name="username"
      id="username"
      placeholder="username"
      bind:value={username}
    />
    <input
      type="password"
      name="passwor"
      id="password"
      placeholder="password"
      bind:value={password}
    />
    <button type="submit">Login</button>
  </div>
</form>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>

<script setup>
</script>

<template>
  <h1>Contact me</h1>
  <form class="form" action="mailto:wlsherrin@gmail.com">
    <div class="input">
      <label for="name">Name*</label>
      <input type="text" id="name" name="name" placeholder="Name..." required/>
    </div>

    <div class="input">
      <label for="email">Email*</label>
      <input type="text" id="email" name="email" placeholder="example@email.com" required/>
    </div>

    <div class="input">
      <label for="subject">Subject*</label>
      <input type="text" id="subject" name="subject" placeholder="Subject..." required/>
    </div>

    <div class="input">
      <label for="message">Message*</label>
      <textarea id="message" name="message" placeholder="Message..." style="height: 105px" required></textarea>
    </div>

    <div>
      <router-link :to="{ name: 'thank_you' }">Send Message</router-link>
    </div>
  </form>
</template>

<style scoped>
h1 {
  text-align: center;
  color: #672f87;
}

form.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  div.input {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 50%;
    min-width: 400px;
    font-size: 18px;

    input {
      background-color: white;
      border: 2px solid #672f87;
      font-size: 18px;
      padding: 5px 5px 5px 10px;
    }

    label {
      color: #672f87;
      font-weight: bold;
    }

    textarea {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      background-color: white;
      border: 2px solid #672f87;
      padding-left: 5px;
      font-size: 18px;
    }
  }

  a {
    font-weight: bold;
    color: #672f87;
    background-color: white;
    border: 2px solid #672f87;
    text-decoration: none;
    padding: 5px;

    &:hover {
      background-color: #902f89;
      color: white;
      border: 2px solid white;
    }
  }
}

@media (max-width: 800px) {
  form.form {
    width: 100%;
  }
}
</style>

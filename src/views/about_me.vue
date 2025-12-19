<script setup>
</script>

<template>
  <div class="header">
    <img :src="'./src/assets/profile_pic.png'" />
    <div class="info">
      <h1>About me</h1>
      <div class="quick_facts">
        <h2>Graphic Designer | October '04 | University of Minnesota | Chicago | Sports Management Minor</h2>
      </div>
      <div class="text">
        <p>Hello to anyone who happens to be reading this,</p>
        <p>
          I’m Wil Sherrin and I’m glad you’re here. I’m born and raised in the midwest and have been
          doing something creative all my life. My Mom is an interior designer and my Dad is a
          software engineer, so everyone, including me, thought I would become an architect.
          However, things changed when I took an architecture class and wasn’t a big fan of it. I
          picked up graphic design in high school and instantly fell in love with it. I have always
          appreciated designs around me and since taking graphic design in high school, I’ve noticed
          it even more. I’ve learned that I love branding and developing a brand identity so that
          every detail is a true reflection of the mission and people behind the company.
        </p>
        <p>
          Now at this point you’re tired of hearing my background and learning more about my design
          process and how I came up with my own personal brand. I always start by sketching with
          pencil in my grid sketch book. I sketch as many ideas as I can until I can’t think of
          anything else. Next, I get feedback to decide what the best potential directions would be.
          From there, I make digital roughs and seek more feedback to decide the final direction and
          start refining small details. I then develop and add more pieces to the project to make a
          fully cohesive final project that the client will love for years to come. I used this
          process to come up with my personal brand ‘Wilrus Design’. The name Wilrus comes from my
          online handle from when I was a kid. I had a friend who mixed his name with an animal, so
          I did that with mine. Walrus + Wil worked perfectly, especially since I spell my name with
          1 L.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.header {
  display: flex;

  img {
    width: 45%;
  }

  div.info {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 15px;

    h1 {
      color: #672f87;
      font-size: 50px;
      margin: 0;
    }

    div.quick_facts {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      max-width: 100%;

      h2 {
        color: #672f87;
        font-size: 20px;
        margin: 0;
        padding: 0;
      }
    }

    div.text {
      color: #672f87;
      margin: 0;
      width: 100%;
      font-size: 18px;
    }
  }
}

@media (max-width: 1400px) {
  div.header {
    flex-direction: column;

    img {
      width: 100%;
    }

    div.info {
      margin: 0;
    }
  }
}
</style>

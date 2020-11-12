<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="about col-8 offset-2 text-center">
        <h1>You wanna know about Organyze?</h1>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-8 offset-2 text-center">
        <p>Organyze is here to help organyze your life by simplifing how you structure your goals. You can creates a board that can have any amount of lists with in it. To help better manage those lists, we have allowed you to add tasks to help break it down even more. If you want to even go a step farther, you can add a comment to those tasks as well.<b> This product was made in mind for the average person to help organyze their everyday life.</b> </p>
      </div>
    </div>
    <div class="row mt-3 justify-content-center">
      <div class="col-4 text-center">
        <router-link :to="{name: 'Profile'}">
          <h1 class="text-dark">
            LETS GET STARTED
          </h1>
        </router-link>
      </div>
    </div>
    <div class="row mt-3 justify-content-center text-center">
      <div class="col-6 mt-2">
        <h4>What your profile page can look like!</h4>
        <img class="img-fluid mt-2" src="../assets/img/boards.png" alt="" srcset="">
      </div>
      <div class="col-6 mt-2">
        <h4>What your Board page can look like!</h4>
        <img class="img-fluid mt-2" src="../assets/img/activeBoard.png" alt="" srcset="">
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div>
        <h1 class="text-center">
          Creators
        </h1>
      </div>
    </div>
    <div class="row justify-content-center text-center mb-5">
      <div class="col-6">
        <h2>Trevor Douty</h2>
        <img class="img-fluid mt-2 imgHeight shadow-lg" src="../assets/img/6798.jpeg" alt="" srcset="">
      </div>
      <div class="col-6">
        <h2>Kody Dudley</h2>
        <img class="img-fluid mt-2 imgHeight shadow-lg" src="../assets/img/kody.jpg" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.imgHeight{
height: 20em;
border-radius: 15%;
}
</style>

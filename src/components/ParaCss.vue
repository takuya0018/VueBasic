<template>
  <section>
    <!-- <ul>
      <li class="paras img01"><p>aaaaaa</p></li>
      <li class="paras img02"><p>iiiiiii</p></li>
    </ul> -->
    <div class="paraWrap">
      <div class="block block-one">
        <p>one</p>
      </div>
      <div class="block block-two">
        <p>two</p>
      </div>
      <div class="block block-three">
        <p>Three</p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
ul {
  width: 100%;
  height: 1000px;
}
.paras {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.block {
  outline: 1px solid red;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  p {
    display: inline-block;
    font-size: 60px;
    font-family: 'Great Vibes', cursive;
    padding: 0;
    margin: 0;
  }
}
.block-one {
  background-image: url(../assets/img/img01.JPG);
}
.block-two {
  background-image: url(../assets/img/img02.JPG);
}
.block-three {
  background-image: url(../assets/img/img01.JPG);
}
</style>
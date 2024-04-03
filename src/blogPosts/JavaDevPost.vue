<script>
import { postLogic } from "/src/blogPostUtils.js";

export default {
  mixins: [postLogic],

  mounted() {
    this.$nextTick(() => {
      const postContents = this.$el.querySelectorAll(".post__body__text");
      if (postContents.length > 0) {
        this.calcReadTime(Array.from(postContents));
      }
    });
  },
};
</script>

<template>
  <div class="post">
    <h3 class="post__title" @click="toggleBody">
      Becoming a Full-Stack Java developer - A Practical Roadmap
    </h3>
    <div class="post__body" :class="{ 'post__body--visible': isBodyVisible }">
      <h4 class="post__body__info">
        Posted: 02-04-2024, Read Time: {{ readTime }} min.
      </h4>
      <p class="post__body__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quo
        quidem soluta nulla fuga eveniet illum facere modi ipsum dolores, unde
        natus perferendis sunt accusamus pariatur, quasi nihil! Maiores aliquam
        debitis rem dignissimos fugiat ipsum, perferendis autem voluptatibus
        perspiciatis ut porro consequuntur soluta nobis libero ex veniam nostrum
        eum fugit assumenda ullam, voluptas maxime! Neque, dignissimos sequi!
        Pariatur ipsa sequi corrupti distinctio nobis aut cum. Dolore velit,
        voluptatem et ea at vitae facere odit praesentium minus dignissimos
        porro nulla, exercitationem labore deserunt magnam optio sint iusto!
        Illo, animi maiores saepe quidem quae ex nostrum eius quisquam magni
        soluta minima labore laboriosam aliquid suscipit repellat totam sunt
        quaerat accusamus quos asperiores, tempore rem unde rerum! Inventore
        mollitia voluptates deleniti vitae, sed repellendus. Fugiat sed atque
        sint, optio, tenetur exercitationem eveniet aspernatur ut earum tempore
        asperiores! Cum, fugit illo. Harum, sit, et vero nihil consequuntur eos
        eaque non rem enim temporibus provident maxime quidem voluptate, nostrum
        doloribus hic. Aliquid, voluptas! Id natus nobis eaque molestias atque
        modi! Provident omnis labore ab debitis nesciunt! Quaerat nesciunt
        officia ipsa, porro, labore doloribus voluptas pariatur maxime quos
        suscipit dicta, optio blanditiis. Ab, optio magnam. Mollitia odit
        voluptate, atque eaque eos autem quas reiciendis, nisi nesciunt, ipsum
        magnam impedit consectetur molestias id aut est. Totam suscipit porro
        quas nemo veniam optio aspernatur, quaerat vitae eum temporibus iusto
        quisquam tenetur ab doloremque architecto repellat explicabo! Minus
        earum corporis a quia reprehenderit facilis ea possimus velit,
        consectetur eius ratione accusamus cum ipsa illo laboriosam excepturi
        error quisquam tempore ipsum harum voluptatibus saepe reiciendis? Cum,
        amet non dolorem laboriosam nam labore voluptatibus ipsa ex mollitia
        aperiam dignissimos, suscipit error fugit aut necessitatibus dolorum
        odio voluptatum excepturi maiores quia, sunt aliquam rem est! Assumenda
        placeat inventore dolore nihil quam? Quae nostrum fugit amet provident
        consequatur enim sed distinctio quas perspiciatis ullam? Possimus simi
      </p>
      <br />
      <p class="post__body__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
        repellat. Fugiat nostrum hic deserunt laudantium, eligendi saepe rerum
        aliquam possimus eaque est sapiente vel suscipit libero, ipsum quia
        culpa? Provident, cupiditate accusantium id deleniti dignissimos sint
        magnam placeat. Modi expedita ab sequi deserunt, qui nam at velit culpa
        iure, minima nostrum quia doloribus. Totam, rerum nulla ea, illo
        cupiditate voluptatum numquam blanditiis neque recusandae repellat
        eligendi. Voluptatem nisi est eum provident omnis quod impedit ullam
        illo vero dicta sint quia voluptatum modi id numquam ipsa voluptas,
        aspernatur culpa similique molestiae quos ad? Dolorem tempora
        perferendis, necessitatibus autem enim expedita doloribus?
      </p>

      <p class="post__body__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
        repellat. Fugiat nostrum hic deserunt laudantium, eligendi saepe rerum
        aliquam possimus eaque est sapiente vel suscipit libero, ipsum quia
        culpa? Provident, cupiditate accusantium id deleniti dignissimos sint
        magnam placeat. Modi expedita ab sequi deserunt, qui nam at velit culpa
        iure, minima nostrum quia doloribus. Totam, rerum nulla ea, illo
        cupiditate voluptatum numquam blanditiis neque recusandae repellat
        eligendi. Voluptatem nisi est eum provident omnis quod impedit ullam
        illo vero dicta sint quia voluptatum modi id numquam ipsa voluptas,
        aspernatur culpa similique molestiae quos ad? Dolorem tempora
        perferendis, necessitatibus autem enim expedita doloribus?
      </p>
    </div>
  </div>
</template>

<style scoped></style>

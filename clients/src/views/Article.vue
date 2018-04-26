<template>
  <div class="article">
      <h2>Article</h2>
      <div class="list-article">
          <ul>
              <li v-for="(article, index) in articles" v-bind:key="index">
                  <h4> {{ article.title }} </h4>
                  <p> {{ article.content }} </p>
                  <p> {{ article.category }} </p>
                  <p> {{ article.author }} </p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'Article',
    data: function () {
        return {
            articles: []
        }
    },
    beforeCreate () {

        axios.get('http://localhost:3000/api/articles/all')
        .then(response => {
            console.log(response)
            let data = response.data.data
            data.forEach(article => {
            this.articles.push(article)
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>

<style>
    .list-article > ul > li {
        border: thin solid grey;
        margin-bottom: 10px;
    }
</style>

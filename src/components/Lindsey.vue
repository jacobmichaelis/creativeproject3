<template>
  <section>
                    
                    <aside>
                            <h2><b>bio</b></h2>
                            <p>
                                I love yoga. And hip hop. Ask me to dance sometime.
                            </p>
                    </aside>
                    <article>
                            <div class="titles"><p>lindsey steinhorst</p></div>
                            <br>
                            
                        <img style="width: 80%" alt="aboutImg" v-bind:src ="lindsey">
                        
                    </article>
                    <aside>
                            <h2 style="text-align: center">contact me</h2>
                            <form action="https://formspree.io/brandon_patrick13@hotmail.com"
                            method="POST">
                            <input type="text" name="name" placeholder="name">
                            <br>
                            <br>
                            <input type="email" name="_replyto" placeholder="email">
                            <br>
                            <br>
                            <textarea name="comment"  placeholder="what's the plan, stan?"></textarea>
                            <br>
                            <br>
                            <input type="submit" value="Send">
                        </form>
                    </aside>
                </section>
</template>

<script>
export default {
  name: 'Lindsey',
  data () {
    return {
      msg: 'Lindsey Steinhorst',
      lindsey: './static/images/lindseyProfile.png'
    }
  }
}
</script>

<style>
h1 {
    text-align: center;
    font-family: 'Quicksand';
    color: rgb(60, 73, 143);
    margin: 0 auto;
}

a{
    text-decoration: none;
}

h2{
    font-family: 'Quicksand';
    color: rgb(60, 73, 143);
    text-align: center;
}

p{
    text-align: center;
    color: rgb(60, 73, 143);
    font-family: 'Quicksand';
}

.titles p{
    font-family: 'Quicksand';
    text-align: center;
    font-family: 'Quicksand';
    font-size: 30px;
    color: rgb(60, 73, 143);
    margin: 0 auto;
}

li{
    font-family: 'Quicksand';
}

img {
    margin: 0 auto;
    display: block;
}

aside{
    flex: 2 !important;
}

form{
    margin: 0 auto;
    text-align: center;
}

input, textarea {
    font-size: 0.8em;
    font-family: 'proxima-nova-soft', sans-serif;
    border: 1px solid #ddd;
    background: #fff;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    width: 40%; }

#imgWrap {
    border-style: solid;
    border-width: 5px;
}


nav{
    padding: 20px;
}

footer{
    padding-top: 20px;
}

nav p{
    color: rgb(60, 73, 143);
    font-size: 40px;
    text-align: center;
    margin: 0 auto;
    font-family: 'Quicksand';
}

nav ul {
    list-style-type: none;
    margin: 0 auto;
    text-align: center;
    padding: 0;
    overflow: hidden;
    background-color: white;
}

nav li {
    display: inline-block;

}

nav li a {
    display: block;
    color: rgb(60, 73, 143);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

nav li a:hover {
    background-color: rgb(231, 221, 218);
}

hr{
    border-color: rgb(231, 221, 218)
}


section {
    display: flex;
   }
   
aside {
    flex: 1
   }
   
article {
    flex: 4
   }


  #center{
      float: center;
  }

  #aboutImg{
    max-height:100%;
    width: 100%;
    object-fit: cover; /*magic*/
  }

  article h2{
      padding-left: 20px;
  }
  
  article p {
    padding-left: 20px;
  }

  #rev{
      list-style-type: none;
  }

  .card {
    width: 250px;
    margin: 0 auto;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.card:hover {
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: white;
  grid-column-gap: 0px;
  grid-row-gap: 20px;
}

.object-fit-cover {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
</style>
